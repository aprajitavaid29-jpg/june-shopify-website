# June – Shopify replica of shop-june.com

Theme files for the unpublished Shopify theme **"June – Wix replica"** (store: June., `ec6x8n-bh.myshopify.com`),
rebuilt to match the original Wix site page by page at 1440px desktop and 375px phone.

`theme/` mirrors the Shopify theme folder layout. It holds the files added or changed in this pass;
the rest of the theme (Horizon base files and the earlier `wx-*` home, header, footer, collection and
product sections) lives in the Shopify theme itself.

| Page | Section | Template |
| --- | --- | --- |
| About Us | `sections/wx-about.liquid` | `templates/page.about-us.json` |
| June Gold Forming | `sections/wx-jgf.liquid` | `templates/page.june-gold-forming.json` |
| FAQ | `sections/wx-faq.liquid` | `templates/page.faq.json` |
| Careers | `sections/wx-careers.liquid` | `templates/page.careers.json` |
| Online Consultation, Contact, Return Form | `sections/wx-split.liquid` | `templates/page.online-consultation.json`, `page.contact.json`, `page.return-form.json` |
| Gift Finder (Quizell quiz) | `sections/wx-gift-finder.liquid` | `templates/page.gift-finder.json` |
| Policy pages (terms, privacy, refund, shipping, accessibility, care programme, size guide) | `sections/wx-policy.liquid` | `templates/page.policy.json` |
| Site-wide Outfit font | `sections/wx-font.liquid` | `sections/header-group.json` |

Shared pieces: `snippets/wx-base.liquid` (Outfit font files and the screen-scaled `u()` unit),
`snippets/wx-product-fix.liquid` (product page tweaks).

Images and videos are stored in Shopify under Content > Files as `wx-img-<wix id>.jpg|png` and
`wx-*.mp4`, copied from the Wix media library. Policy page text lives in each Shopify page's content,
copied word for word from Wix.
