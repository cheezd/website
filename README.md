# Proof for PR #34 (#21 client site template, first slice)

Local `next start` runs of `template/` at head 988095b (no template Vercel project yet; that needs Marc's OK).

- `sample-*`: built with the default config, `dry-creek-sample` (placeholder content).
- `swap-*`: built with a throwaway config (`swap-demo-config.ts.txt`, not committed) via `CLIENT_CONFIG=swap-demo`, to show swapping changes name, colors, logo, fonts and copy with no component changes.
- `invalid-config-build-error.txt`: `next build` output when a config has a bad color and email.

## slice2/ (brand kit + quote form, PR #34 head 4420faa)

- `sample-*`: the default `dry-creek-sample` config, local production build (no Turnstile or mail env set, so the form shows no widget and fails safe to the error page).
- `kitdemo-*`: a throwaway local build with `config/brand-kit.example.json` dropped in unchanged as `brand` (`kit-demo-brand-kit.json` here), proving fonts, palette, combo logo, duotone/sharp icons, favicon and OG image come from the kit. Not committed to the template.
- `bad-kit.json` → `validate-kit-bad-kit-output.txt`: what `npm run validate-kit` prints for a broken kit.
