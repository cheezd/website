type ContactRequest = {
  name: string;
  email: string;
  firmRole: string;
  initiative: string;
  formContext: string;
};

type GraphTokenResponse = {
  access_token?: unknown;
};

const THANK_YOU_PATH = "/contact/thank-you";
const ERROR_PATH = "/contact/error";
const HONEYPOT_FIELD = "company_website";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    if (getField(formData, HONEYPOT_FIELD)) {
      return redirectTo(request, THANK_YOU_PATH);
    }

    const contactRequest = parseContactRequest(formData);

    if (!contactRequest) {
      return redirectTo(request, ERROR_PATH);
    }

    const deliveryMode = process.env.CONTACT_DELIVERY_MODE ?? "noop";

    if (deliveryMode === "microsoft_graph") {
      await sendWithMicrosoftGraph(contactRequest);
    } else if (deliveryMode !== "noop") {
      throw new Error(`Unsupported contact delivery mode: ${deliveryMode}`);
    } else {
      console.info("Contact form submission accepted in noop mode.");
    }

    return redirectTo(request, THANK_YOU_PATH);
  } catch (error) {
    console.error("Contact form submission failed:", getSafeErrorMessage(error));
    return redirectTo(request, ERROR_PATH);
  }
}

function parseContactRequest(formData: FormData): ContactRequest | null {
  const name = getField(formData, "name");
  const email = getField(formData, "email");
  const firmRole = getField(formData, "firm_role");
  const initiative = getField(formData, "initiative");
  const formContext = getField(formData, "form_context");

  if (!name || !isLikelyEmail(email) || !initiative) {
    return null;
  }

  return {
    name,
    email,
    firmRole,
    initiative,
    formContext,
  };
}

function getField(formData: FormData, fieldName: string) {
  const value = formData.get(fieldName);
  return typeof value === "string" ? value.trim() : "";
}

function isLikelyEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function redirectTo(request: Request, path: string) {
  return Response.redirect(new URL(path, request.url), 303);
}

async function sendWithMicrosoftGraph(contactRequest: ContactRequest) {
  const accessToken = await getMicrosoftGraphAccessToken();
  const fromMailbox = requiredEnv("CONTACT_FROM_MAILBOX");
  const toEmail = requiredEnv("CONTACT_TO_EMAIL");

  const response = await fetch(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(fromMailbox)}/sendMail`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: {
          subject:
            contactRequest.formContext === "care-helm"
              ? `Care Helm demo request from ${contactRequest.name}`
              : `Chart Room AI diagnostic request from ${contactRequest.name}`,
          body: {
            contentType: "Text",
            content: buildEmailBody(contactRequest),
          },
          toRecipients: [
            {
              emailAddress: {
                address: toEmail,
              },
            },
          ],
          replyTo: [
            {
              emailAddress: {
                address: contactRequest.email,
                name: contactRequest.name,
              },
            },
          ],
        },
        saveToSentItems: true,
      }),
    },
  );

  if (!response.ok) {
    throw new Error(`Microsoft Graph sendMail failed with status ${response.status}`);
  }
}

async function getMicrosoftGraphAccessToken() {
  const tenantId = requiredEnv("MICROSOFT_TENANT_ID");
  const clientId = requiredEnv("MICROSOFT_CLIENT_ID");
  const clientSecret = requiredEnv("MICROSOFT_CLIENT_SECRET");

  const response = await fetch(
    `https://login.microsoftonline.com/${encodeURIComponent(tenantId)}/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "client_credentials",
        scope: "https://graph.microsoft.com/.default",
      }),
    },
  );

  if (!response.ok) {
    throw new Error(`Microsoft Graph token request failed with status ${response.status}`);
  }

  const tokenResponse = (await response.json()) as GraphTokenResponse;

  if (typeof tokenResponse.access_token !== "string" || !tokenResponse.access_token) {
    throw new Error("Microsoft Graph token response did not include an access token");
  }

  return tokenResponse.access_token;
}

function requiredEnv(name: string) {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function buildEmailBody(contactRequest: ContactRequest) {
  const heading =
    contactRequest.formContext === "care-helm"
      ? "New Care Helm demo request"
      : "New Chart Room AI diagnostic request";

  return [
    heading,
    "",
    `Name: ${contactRequest.name}`,
    `Email: ${contactRequest.email}`,
    `Firm / role: ${contactRequest.firmRole || "Not provided"}`,
    "",
    contactRequest.formContext === "care-helm"
      ? "What would you like to explore?"
      : "What needs momentum?",
    contactRequest.initiative,
  ].join("\n");
}

function getSafeErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "Unknown error";
}
