# Alpha Brix Company Limited website

Static, multi-page site. No dependencies: only Node 18+.

    npm run dev      # build, then preview at http://localhost:4173
    npm run build    # output to dist/ (upload this folder to any host)

## Where things live

- `src/data/site.js`: all content (contacts, products, PPE, fumigation services, testimonials). Edit here, then rebuild.
- `src/pages.js`: page layouts (home, products, fumigation, about, contact, 404).
- `src/layout.js`: shared head, header, footer, SEO tags.
- `src/partials.js`: reusable blocks (product card, quote form, CTA).
- `src/assets/`: CSS (with light/dark theme tokens), JS, images.

Adding a product: add an entry to `products` in `src/data/site.js` and put its image in `src/assets/img/`.
Set `company.url` to the real domain before going live (used for canonical links and the sitemap).
