# Marc Cheatham — Portfolio Website Spec

> **Status:** Content & build defaults largely set for v1; fill §5–§8 gaps before polish. Implementation can start once **contact email** and minimum **experience** facts are supplied (or flagged “private”).  
> **Last updated:** 2026-05-14 *(spec review)*  
> **Owner:** Marc Cheatham — **Chart Room AI LLC** (Founder & Principal)  
> **Brand source of truth:** `c:\Users\emche\OneDrive\Chart Room AI\Marketing\branding.md` (v1.0, May 2026)  
> **Source code repo:** [`https://github.com/cheezd/website`](https://github.com/cheezd/website)

---

## 1. Goals

| Goal | Notes |
|------|-------|
| **Brand home for Chart Room AI** | Conversion-focused site consistent with brand guidelines (clean, professional, high white space). |
| **Primary funnel** | **[Confirmed]** **Fractional AI transformation / advisory engagements** via Chart Room AI *(full-time CTO interest can still arrive via LinkedIn — not hero focus)* |
| Audience | **Financial services & technology executives** navigating AI adoption; secondary: PE operating partners / boards *[refine wording at copy time]* |
| Credibility | Communicate CTO-level depth in fintech, regulated industries, practical AI adoption and transformation leadership |
| Lead / contact path | **[Confirmed]** **Email-first** hero CTA; LinkedIn (+ optional calendar link) in footer or contact section — **publish mailbox TBD §12** |

---


## 2. Tech stack, hosting & ops *(confirmed for v1)*

| Decision | Choice |
|---------|--------|
| **Framework** | **Next.js** + **Tailwind CSS** |
| **DNS & edge** | **Cloudflare** — public DNS for **`chartroomai.com`** *(and **`chartroom.ai`** when owned)* is **edited in Cloudflare** (records, optional proxying, redirects). |
| **App deployment** | **Pick when wiring CI:** **`Cloudflare Pages`** *(stay on CF)* vs **`Vercel`** *(Next.js deploy target)* — DNS at Cloudflare still points **`@` / `www`** at whatever those providers require *(CNAME, A, or Pages custom-domain flow)*. |
| **Content model** | **No CMS v1** — copy and structure live in the repo *(Markdown or TS/constants); revisit if non-dev editors need CMS* |
| **Canonical domain** | **https://chartroomai.com** — **`chartroom.ai`** → redirect to `.com` *(e.g. **Bulk Redirect / Redirect Rules** in Cloudflare once that zone or hostname exists)* |
| **Analytics** | **None** at launch |
| **Static export requirement** | **No hard requirement** documented — *[flag if hosting must avoid edge/Node]* |
| **Source repo** | **[`cheezd/website`](https://github.com/cheezd/website)** on GitHub *(this folder → `origin`); wire **Cloudflare Pages** or **GitHub Action → host** next* |

**Domain confirmed:** **`chartroomai.com`**. Registrar may live at Cloudflare or elsewhere; **`chartroomai.com`** ultimately uses **Cloudflare nameservers** so **records you change at launch live in Cloudflare → DNS.**

**Launch — DNS checklist (high level):** *(1)* In **Cloudflare Pages**, **Vercel**, etc., add **`chartroomai.com`** (+ **`www`**) as a custom domain and note the **CNAME/A targets** they show. *(2)* In **Cloudflare → DNS** for **`chartroomai.com`**, create matching records; leave **Proxied** vs **DNS only** (**grey cloud**) per your host’s Cloudflare docs *(SSL / certificate quirks vary)*. *(3)* Enforce **one** canonical hostname *(apex vs **`www`**)* with a **Bulk Redirect / Single Redirect** Rule. *(4)* **`chartroom.ai`** → **`chartroomai.com`** via Cloudflare redirects when active.

---

## 3. Site Map *(draft)*

| Page / section | Purpose |
|----------------|---------|
| Home / Hero | **Chart Room AI** wordmark-feel headline, primary tagline, value prop, primary CTA |
| About | **We**-voiced firm story + **Founder / Principal** block for **Marc Cheatham** (name + credentials; third person *or* *I* — not mixed in one paragraph) |
| Experience | Roles, companies *(with permission)*, timelines, impact |
| Expertise | Skills grouped (leadership, engineering, AI, security, domain) |
| Why hire / Value | Differentiators vs other CTOs or AI consultants |
| Selected work *(optional)* | Case studies or anonymized engagements |
| Contact | **Email-first**; LinkedIn + optional booking link *(secondary)*. Lightweight contact form optional backlog. |

**Information architecture (v1):** **Single-page** (`/`) **with anchor sections** (About, Expertise, Experience, Contact, etc.). Add **`/privacy`** before turning on analytics; **not required** for analytics-off v1 unless other widgets dictate.

---

## 4. Voice & Messaging

### 4.1 Chart Room AI — positioning *(from brand guidelines; use verbatim on hero / SEO where appropriate)*

> Chart Room AI delivers fractional AI Transformation Leadership from a former fintech CTO and Acting CEO with 31 years of experience. We provide strategic AI roadmaps, seamless business-IT bridging, and executive guidance that helps financial services and technology companies navigate complexity and capture sustainable AI-driven growth.

### 4.2 Tagline *(confirmed for hero / parity with LinkedIn & proposals)*

- **Primary tagline:** Helping you navigate your AI Transformation  

- **Alternates** *(from Chart Room AI brand guidelines v1.0 — use for decks, footer, or A/B copy if desired):* “Navigating AI Transformation from the Chart Room” · “Strategic AI Leadership. Clear Roadmaps. Executive Command.” · “Charting the Course for Enterprise AI Success” · “Where Fintech Expertise Meets AI Vision”

### 4.3 Elevator pitch *(one sentence — refine after Q&A)*

> Seasoned technology executive (31 years) and long-time CTO (18 years), recently CTO and acting CEO of a fintech software startup — now advising financial services and regulated firms on **practical AI adoption** from strategy through delivery.

### 4.4 Professional summary *(Marc — source copy for web; adapt per §4.7)*

Marc is a seasoned technology executive with **31 years** of professional experience, including **18 years as Chief Technology Officer** across multiple firms. Most recently, for **4 years**, he served as **CTO and acting CEO** of a fintech software startup.

In those roles he:

- Led development teams building sophisticated fintech platforms: trading systems; Capital Market Assumption engines (Monte Carlo); next-gen financial planning tools; Asset Liability Management (ALM) models.
- Built full security master databases (stocks, bonds, mutual funds, ETFs, commodities, annuities) with deep SQL expertise.
- Designed and implemented **production multi-agent AI systems** for client productivity (e.g., cash flow analysis, tax planning, financial forecasting); built an agentic evaluation framework with quality gates and human-verified baselines.
- Improved developer productivity via AI in DevOps; strong practices in **TDD** and **CI/CD**.
- Built business models, led **VC** pitches; primary presenter for complex capital market and ALM capabilities.
- Acted as **CISO**, creating full information security policy and compliance framework.

### 4.5 Consulting focus *(provided)*

Helps financial services and regulated companies **adopt AI successfully** by bridging business stakeholders and IT delivery:

- AI vision and strategy  
- Actionable roadmaps  
- Unblocking stalled initiatives  
- Hands-on support across business, engineering, infrastructure, security, compliance  

Differentiator framing: **30+ years regulated-industry experience** + **proven AI implementation** → rare blend for strategic + execution leadership.

### 4.6 Voice & tone *(from brand guidelines)*

| | |
|--|--|
| **Voice** | Authoritative yet approachable |
| **Tone** | Strategic, insightful, decisive, collaborative |
| **Do say** | “We chart a clear course…”, “From the Chart Room, we navigate…”, “Proven fintech leadership applied to AI transformation” |
| **Avoid** | Hype (“revolutionary”, “game-changing”), unexplained jargon, casual or salesy copy |

### 4.7 Narrative perspective: “we” vs “Marc” vs “I” *(confirmed)*

**Default site voice:** Use **first-person plural — we** for Chart Room AI everywhere it reads as the firm addressing the visitor (*services, value prop, positioning, CTAs*). That matches the brand guidelines and stays valid as you occasionally bring in collaborators on limited aspects — **“we” = Chart Room AI LLC**, not an implied large firm.

**Founder credibility:** Surface **Marc Cheatham** by name where proof of *who delivers the work* matters (*photo caption, footer sign-off, bio heading, LinkedIn parity*). Credential-heavy blocks may stay **third person** (“Marc is / has…”) **or** shift to **I** inside a clearly labeled subsection (e.g. **Founder / Principal**) if you want a warmer touch — but **do not** mix *I* and *we* in the same paragraph without a section break.

**Resume-style bio (§4.4):** Treat as **source content** for the site. For published pages, plan to **rewrite into “we”** for firm-led sections, and keep a **dedicated founder / background** area for the third-person (or *I*) arc.

### 4.8 Logo & visual identity *(from brand guidelines — implement when assets exist)*

- **Wordmark:** “Chart Room AI”  
- **Icon concept:** Minimal ship’s helm / compass + neural node or upward trajectory; geometric, professional (no cartoon).  
- **Variations:** Full color, monochrome, reversed (light background).

---

## 5. Experience Timeline *(fill from Q&A)*

| Dates | Role | Company | Confidentiality | Highlights / metrics *(TBD)* |
|-------|------|---------|-----------------|-------------------------------|
| ~4 yrs ending *[TBD]* | CTO, Acting CEO | *[TBD startup name]* | *[public / “a fintech startup”]* | *[bullets]* |
| *[TBD]* | CTO | *[TBD]* | | |
| *[TBD]* | *[prior roles]* | | | |

**Companies you’re willing to name publicly:** *[TBD]*  
**Anything you refuse to disclose (NDA):** *[TBD]*  

---

## 6. Skills & Expertise Buckets *(draft — expand after Q&A)*

### Leadership & business

- *[TBD: team sizes led, offshore/onshore, P&L, board interaction]*  
- Fundraising / partnerships / pricing / roadmap ownership  

### Engineering & platforms

- Fintech platforms, trading, Monte Carlo/CMA engines, planning tools, ALM  
- Security masters, SQL-heavy data modeling  
- TDD, CI/CD, developer productivity  

### AI & automation

- Multi-agent production systems  
- Evaluation / quality frameworks, human baseline verification  
- AI in DevOps  

### Security & compliance

- CISO-style ownership; security policy & compliance frameworks  
- Regulated industry context *[TBD: SOX, GLBA, state regs, FFIEC-minded, HIPAA, SOC2 narrative?]*  

### Soft skills / working style *(TBD)*

- Stakeholder communication, facilitation, mentorship, conflict resolution  

---

## 7. “Why Hire Marc / Chart Room AI?” *(hypotheses — confirm with specifics)*

1. Bridges **regulated-domain depth** with **hands-on AI delivery** — not purely advisory slide decks.  
2. Comfortable from **architecture** through **fundraising pitches** and **client-facing demos**.  
3. Produces **measurable engineering discipline** (TDD/CI/CD) and **governance** (security, evaluations).  

**Proof points we should add:**

- *[TBD: named outcomes, percentages, timelines, anonymized wins]*  

---

## 8. Proof & Assets *(gather before build)*

| Asset | Available? |
|-------|------------|
| Professional headshot | Brand: business attire, on-site — *[TBD: file path / shoot]* |
| Logo / brand colors | **Defined** in `branding.md` and §10 below; vector/logo files *[TBD]* |
| PDF resume / downloadable CV link | *[TBD]* |
| LinkedIn URL | *[TBD]*  
| Speaking / podcasts / publications | *[TBD]*  
| Recommendations / quotes | *[TBD]*  

---

## 9. Legal & Disclosure *(draft — counsel review before launch)*

- **Official entity:** Chart Room AI LLC (Virginia)  
- **Trademark:** Brand doc recommends intent-to-use filing once the site is live — track as a launch task.  
- **Disclaimer (draft website copy):**
  - Information on this site is for **general informational purposes only**. It is **not legal, tax, accounting, or investment advice**, and **not** a substitute for a signed consulting or advisory engagement.
  - **Chart Room AI is not** a broker-dealer or registered investment adviser. Nothing herein is investment advice or a solicitation to buy or sell securities or other financial instruments.
  - *[Add governing law / jurisdiction if counsel recommends (e.g. Virginia).]*
- **Cookies / banners:** With **analytics off for v1**, no cookie-consent UX is implied for measurement alone. **Re-evaluate** if you embed scripted widgets *(booking SaaS, chat, CRM, video)* that set cookies or process personal data.

---

## 10. Design Direction *(from Chart Room AI brand guidelines + open items)*

**Overall aesthetic keywords:** Clean, professional, conversion-focused, **high white space**, confident executive advisor, subtle nautical + tech (abstract charts, horizon lines, connected nodes).

**Color palette (Tailwind-facing tokens — names TBD in code):**

| Token role | Hex | Usage |
|------------|-----|--------|
| **Primary (navy)** | `#0A2540` | Main headings, navigation |
| **Accent (teal)** | `#00B4A8` | Buttons, links, highlights |
| **Secondary (gold)** | `#D4AF37` | Sparingly: premium accents, trust signals, select CTAs |
| **Neutral dark** | `#1E2937` | Body text, dark UI surfaces |
| **Neutral light** | `#F4F7FA` | Page background, cards |

**Color rules:** Navy + teal = core identity; gold sparingly; **target WCAG AA** contrast.

**Typography:**

- **Headings:** Satoshi Bold *or* Inter Bold  
- **Body:** Inter Regular *or* system sans (Arial, Helvetica)  
- **Accent font:** Taglines / nav *(same family stack as brand doc — confirm webfont licensing for Satoshi)*  

**Type scale (brand doc):** H1 42–56px · H2 28–36px · body 18–20px (credibility-forward).

**Imagery:** Professional headshots (business attire); abstract data/AI visualizations — **avoid generic “AI robot” stock**.

**Logo:** Implement full-color / mono / reversed per §4.8 when assets are supplied.

**Reference sites (“I like how X feels”):** *[Optional — add URLs anytime; useful for spacing/motion benchmarks]*  

**Theme (v1):** **Light** default (`#F4F7FA` surfaces, `#0A2540` / `#1E2937` type). Optional **full-width navy band** for sticky nav or footer; **no dark-mode toggle** in v1 unless you request it.

**Motion (v1):** **Subtle** only (short fades, restrained hover states) — aligns with credible executive advisory positioning.

---

## 11. Content Checklist *(pre-build)*

- [x] Primary tagline: **Helping you navigate your AI Transformation** *(§4.2)*  
- [x] **Hero structure (v1 proposal):** H1 **Chart Room AI** · subtitle = tagline (§4.2) · short supporting sentence trimmed from §4.1 positioning  
- [x] Narrative voice: **we** default; **Marc** in founder blocks (§4.7)  
- [ ] About: **we**-led firm copy + founder block  
- [ ] Experience entries (+ NDA posture)  
- [ ] Skills grouped for Expertise section  
- [ ] 3–5 “why hire” bullets + proof metrics where possible  
- [x] **Primary CTA:** **Email** (hero + Contact) · LinkedIn secondary — **mailbox TBD §12**  
- [ ] `mailto:` vs obfuscation vs form backlog  
- [ ] Optional testimonials  
- [x] **SEO sketch:** title `Chart Room AI | Fractional AI Transformation Leadership` · meta ~ first sentence of §4.1 trimmed to ≤155 chars *[refine with keywords §12]*  

---

## 12. Outstanding *(need your input)*

Reply inline here or paste into chat — **anything missing will use tasteful placeholders** until you ship real copy.

| # | Topic | Question |
|---|-------|----------|
| 1 | **Contact** | **Public email** for hero `mailto` *(e.g. hello@chartroomai.com)?* Spam strategy: plain address vs masked / form later? |
| 2 | **LinkedIn & links** | **LinkedIn URL**; optional **booking** URL; optional **resume PDF** hosted or omitted v1 |
| 3 | **Geography** | Where you engage *(US-remote only vs travel % vs specific metros)* |
| 4 | **Ideal engagement** | **One sentence** — what does a perfect next client engagement look like? |
| 5 | **Industries** | Beyond financial services — **explicitly mention** insuretech / wealthtech / SaaS adjacency, etc.? |
| 6 | **Experience table** | **Startup:** name OK or anonymous? Approx **years** CTO/CEO. **Prior roles**: company · title · years · 1 highlight each *(NDAs noted)* |
| 7 | **Scale & proof** | **Team sizes** led; rough **budget/scope** credibility; **2–3 wins with metrics** (even directional) |
| 8 | **Public artifacts** | Press, talks, podcasts, certifications, repos — **URLs** or “none yet” |
| 9 | **Offering copy** | **Conversational** “how we work” only vs hints on **commercial** shape *(discovery → SOW)* — still no dollar rates unless you insist |
| 10 | **Speaking / board / mentor** | **Yes/no**, and what to promise on the site *(e.g. selective inquiries only)* |
| 11 | **Personality** | **Five adjectives** + optional **risk message** *(e.g. compliance over hype)* + **what peers get wrong** *(short paragraph)* |
| 12 | **Visual references** | **Optional:** 2–3 sites whose layout you **like/dislike** |
| 13 | **Assets** | **Headshot ready?** Logo files path? Compliance frameworks you want **named** in §6 |

**Already resolved elsewhere (see §13):** ~~primary site goal → fractional advisory~~ · ~~canonical domain `.com`~~ · ~~DNS in Cloudflare~~ · ~~hero CTA email-first~~ · ~~analytics off v1~~ · ~~Next + Tailwind + no CMS~~ · ~~light theme + subtle motion~~ · ~~accent colors locked~~ .

---

## 13. Answer Log *(paste consolidated answers here as we go)*

- **2026-05-14:** Imported **Chart Room AI** brand guidelines from `c:\Users\emche\OneDrive\Chart Room AI\Marketing\branding.md` — positioning statement, taglines, color system, typography, voice/tone, logo concept, entity name, domain priorities, and WCAG AA intent reflected across this spec.
- **2026-05-14:** **Narrative perspective:** Default site copy in **we** (Chart Room AI); solo principal today with expectation of occasional collaborators — **“we”** denotes the LLC, not a big team; founder sections use **Marc Cheatham** by name; §4.7 for rules (*I* vs third person only in labeled founder blocks, not mixed with *we* in the same paragraph).
- **2026-05-14:** **Primary tagline locked:** Helping you navigate your AI Transformation (§4.2).
- **2026-05-14 *(spec review, interactive)* — business & ops defaults:** Primary funnel = **Chart Room AI fractional / advisory engagements** *(not full-time CTO hero)*; **chartroomai.com** canonical · **chartroom.ai** redirects; hero **Email** CTA; **no analytics v1**.
- **2026-05-14 *(spec review)* — technical defaults:** **Next.js + Tailwind**, **no CMS** for v1 (repo-hosted copy). **Hosting:** **`chartroomai.com`** DNS managed in **Cloudflare**; app target **`Cloudflare Pages` vs `Vercel`** **TBD at deploy**.
- **User confirmation:** **Domain:** **`chartroomai.com`** — registered; intended production canonical host for this site (see §2).
- **Repo:** Site code lives at **`https://github.com/cheezd/website`** — local workspace aligned as Git `origin` for pushes & CI/deploy.

---

*End of planning doc. Fill §12 for launch-ready copy.*
