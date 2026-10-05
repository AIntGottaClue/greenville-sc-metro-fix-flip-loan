# Greenville SC Metro Fix & Flip Loan

Astro site for the Upstate of South Carolina (Greenville, Anderson, Pickens and Laurens counties, SC) fix-and-flip funding inquiries. We are connectors between investors and funding sources, not a lender. The site carries no fee or fee-example content by design.

Domain: greenvillescfixandflip.loansapp.cfd (set in `astro.config.mjs` and `src/data/cities.ts`).
GA4: not installed. Paste the measurement ID into `ga4Id` in `src/data/cities.ts`; `src/layouts/Base.astro` renders the tag only when it is set.
Contact form: airchatty tracker wired in `src/layouts/Base.astro` and `src/components/DealForm.astro`.
