# June – Shopify replica of shop-june.com

Theme files for the unpublished Shopify theme **"June – Wix replica"** (store: June., `ec6x8n-bh.myshopify.com`),
rebuilt to match the original Wix site page by page at 1440px desktop and 375px phone.

`theme/` mirrors the Shopify theme folder layout and holds every custom `wx-*` file of the replica.
The Horizon base files and the older, unused `june-*` sections live only in the Shopify theme.

| Page | Section | Template |
| --- | --- | --- |
| About Us | `sections/wx-about.liquid` | `templates/page.about-us.json` |
| June Gold Forming | `sections/wx-jgf.liquid` | `templates/page.june-gold-forming.json` |
| FAQ | `sections/wx-faq.liquid` | `templates/page.faq.json` |
| Careers | `sections/wx-careers.liquid` | `templates/page.careers.json` |
| Online Consultation, Contact, Return Form | `sections/wx-split.liquid` | `templates/page.online-consultation.json`, `page.contact.json`, `page.return-form.json` |
| Gift Finder (Quizell quiz) | `sections/wx-gift-finder.liquid` | `templates/page.gift-finder.json` |
| Policy pages (terms, privacy, refund, shipping, accessibility, care programme, size guide) | `sections/wx-policy.liquid` | `templates/page.policy.json` |
| Home | `sections/wx-home.liquid` + `snippets/wx-home-css.liquid` | `templates/index.json` |
| Collections | `sections/wx-collection.liquid` + `snippets/wx-collection-css.liquid` | `templates/collection.json` |
| Products | `sections/wx-product.liquid` + `snippets/wx-product-*.liquid`, `wx-info.liquid` | `templates/product.json` |
| Other pages | `sections/wx-page.liquid` + `snippets/wx-page-css.liquid` | `templates/page.json` |
| Header, cart drawer, footer | `sections/wx-header.liquid`, `wx-footer.liquid`, `snippets/wx-cart-drawer.liquid` | `sections/header-group.json`, `footer-group.json` |
| Site-wide Outfit font | `sections/wx-font.liquid` | `sections/header-group.json` |

Shared pieces: `snippets/wx-base.liquid` (Outfit font files and the screen-scaled `u()` unit),
`snippets/wx-product-fix.liquid` (product page tweaks).

Images and videos are stored in Shopify under Content > Files as `wx-img-<wix id>.jpg|png` and
`wx-*.mp4`, copied from the Wix media library. Policy page text lives in each Shopify page's content,
copied word for word from Wix.

## Prices

`data/` holds a price check from 18 Oct 2026. Wix prices were changed on 15 Oct, after the products were
imported into Shopify.

- `shopify-prices-2026-10-18.json` is a backup of every Shopify variant price before any sync.
- `wix-prices-2026-10-18.json` holds the per-variant Wix prices.
- `price-sync-plan.csv` lists the 1,220 variants (83 products) whose prices were changed to the Wix prices
  on 18 Oct 2026. This includes the 84 "Add a Necklace" variants, created when the
  "Would you like to add a necklace?" option was added to the 14 charms to match Wix.
  Afterwards every Shopify variant price matched Wix.
