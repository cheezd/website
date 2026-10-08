# Proof for PR #34 (#21 client site template, first slice)

Local `next start` runs of `template/` at head 988095b (no template Vercel project yet; that needs Marc's OK).

- `sample-*`: built with the default config, `dry-creek-sample` (placeholder content).
- `swap-*`: built with a throwaway config (`swap-demo-config.ts.txt`, not committed) via `CLIENT_CONFIG=swap-demo`, to show swapping changes name, colors, logo, fonts and copy with no component changes.
- `invalid-config-build-error.txt`: `next build` output when a config has a bad color and email.
