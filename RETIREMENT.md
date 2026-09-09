# Ycomer retirement — 2026-09-09

The personal site is now consolidated into https://fankus.me.

- Original Markdown and code stay in this repository for recovery, not ongoing updates.
- Both articles retain their full original text and publication dates in the Fankus repository's `content/` directory. The seven-day guide also lives there.
- `static/_redirects` sends article paths to their exact replacements. Blog collections and template docs go to the main journal. Root fragments such as `#subscribe` are handled by Fankus.
- Keep the domain registered and the Pages project running as the redirect host. Do not delete it or its custom domain.
- Disable this Pages project's Git-triggered production and preview deployments after verifying the redirect release. The production site becomes a stable redirect, not a second editorial site.
- Keep `hello@ycomer.xyz` forwarding and preserve the historical `leads` consent records. No subscribers are automatically added to unrelated products.

Rollback: restore Cloudflare Pages deployment `e1b5a713-a379-4b45-ae35-a05af50aec9c` and re-enable the existing Git source deployment settings. The old repository and contact data remain available.
