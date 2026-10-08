# Proof for PR #34 (#21 client site template, first slice)

Local `next start` runs of `template/` at head 988095b (no template Vercel project yet; that needs Marc's OK).

- `sample-*`: built with the default config, `dry-creek-sample` (placeholder content).
- `swap-*`: built with a throwaway config (`swap-demo-config.ts.txt`, not committed) via `CLIENT_CONFIG=swap-demo`, to show swapping changes name, colors, logo, fonts and copy with no component changes.
- `invalid-config-build-error.txt`: `next build` output when a config has a bad color and email.

## slice2/ (brand kit + quote form, PR #34 head 4420faa)

- `sample-*`: the default `dry-creek-sample` config, local production build (no Turnstile or mail env set, so the form shows no widget and fails safe to the error page).
- `kitdemo-*`: a throwaway local build with `config/brand-kit.example.json` dropped in unchanged as `brand` (`kit-demo-brand-kit.json` here), proving fonts, palette, combo logo, duotone/sharp icons, favicon and OG image come from the kit. Not committed to the template.
- `bad-kit.json` → `validate-kit-bad-kit-output.txt`: what `npm run validate-kit` prints for a broken kit.

## slice3/ (final Services, Gallery, Reviews, About; PR #34 head d389586)

Local `next start` builds. Desktop is 1440 px wide and mobile is 390 px, both full page.

- `sample-*`: the default `dry-creek-sample` config. Placeholder SVGs only. The kit uses outline icons, rounded corners, and 4:3 hero and gallery crops.
- `swap-*`: a throwaway `swap-demo` config, not committed (`swap-demo/swap-demo.ts.txt` and `swap-demo/swap-demo.brand-kit.json`). Its kit uses solid icons, sharp corners, a 16:9 hero crop and a 1:1 gallery crop, with Montserrat and Source Sans 3. Its sources are 4:3 placeholder SVGs, so the crops are visible.
- `*-services-focus.png`: keyboard focus on the first service jump link (two-tone focus ring).
