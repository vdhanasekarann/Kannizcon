# KANNIZCON — Kannizcon IT Enabling Services

Kannizcon IT Enabling Services' React and Vite website for web and mobile applications, AI solutions, SaaS, cloud and database work, digital publishing, data services, and IT consulting.

## Run locally

1. Open this project folder in VS Code: `C:\Users\admin\Kannizcon-publish`.
2. Open **Terminal → New Terminal**.
3. Run `npm run dev`.
4. Open the local URL printed in the terminal (usually `http://localhost:5173/`).

The development server refreshes the browser when you save a change.

## Main files

- `src\App.jsx` — homepage, homepage service overview, and route selection.
- `src\components\BusinessPage.jsx` — standalone About, Services, AI, Software & SaaS, Cloud & Data, eBook, Portfolio, and Contact pages.
- `src\components\ServiceArtwork.jsx` — original, locally rendered service illustrations.
- `public\client-logos\` — client logos supplied for the homepage.
- `src\components\PolicyPage.jsx` — separate privacy, terms, refund, and payment-gateway pages.
- `src\assets\kannizcon-full-logo.svg` — supplied full Kannizcon logo used on the Contact page.
- `src\assets\kannizcon-icon.svg` — supplied Kannizcon symbol used on other pages.
- `public\kannizcon-icon.svg` — Kannizcon symbol used as the browser favicon and social/structured-data logo.
- `src\components\EnquiryForm.jsx` — project enquiry form.
- `src\App.css` and `src\index.css` — responsive site styles.

## Website pages

- `/` — Home
- `/about` — About Us
- `/services` — Services overview
- `/ai-solutions` — AI Solutions
- `/software-saas` — Software & SaaS
- `/cloud-data` — Cloud & Data
- `/ebook-publishing` — eBook & Publishing
- `/portfolio` — Selected product and project areas
- `/contact` — Contact & Quote

Service illustrations are original inline SVG artwork; no remote image host is required. Add portfolio case studies only with confirmed project details and permission to publish them.

## Policy page URLs

- `/privacy`
- `/terms`
- `/refund`
- `/payment-gateways`

The policy pages use a single-page app fallback in `public\_redirects`, so direct visits and refreshes work on Netlify. Contact details include `dhanasekaransjh6@gmail.com`, `codeverseteam@aicodeverse.com`, and `https://www.aicodeverse.com/`.

## Search engine discovery

- `public\robots.txt` allows crawling and points crawlers to the sitemap.
- `public\sitemap.xml` lists the homepage, company and service pages, portfolio, contact, and policy pages.
- Page titles, descriptions, canonical URLs, social previews, and structured data are set for search discovery.
- The production canonical domain is `https://www.kannizconites.com`. After connecting it in Netlify, add the domain property in Google Search Console and submit `https://www.kannizconites.com/sitemap.xml`. Google chooses when to crawl; submission does not guarantee indexing.
- The keywords meta tag is included for completeness, but Google does not use it to rank pages. Clear page content, titles, links, and a verified Search Console property matter more.

## Connect `www.kannizconites.com` to Netlify

1. Open Netlify and select the Kannizcon site currently published at `kannizconweb.netlify.app`.
2. Open **Site configuration → Domain management → Add a domain** and add both `www.kannizconites.com` and `kannizconites.com`.
3. At the domain registrar/DNS provider, add a `CNAME` record for host `www` pointing to `kannizconweb.netlify.app`.
4. For the root/apex domain, use Netlify DNS as instructed in Netlify's domain setup, or at your external DNS provider configure an `ALIAS`/`ANAME` to `apex-loadbalancer.netlify.com`. If the DNS provider does not support ALIAS/ANAME/flattening, Netlify's standard external-DNS fallback is an `A` record for `@` pointing to `75.2.60.5`.
5. Back in Netlify, set `www.kannizconites.com` as the primary domain and enable HTTPS/Netlify TLS. Keep any existing email-related DNS records (MX, SPF, DKIM, and DMARC) unchanged.
6. Wait for DNS/SSL provisioning, then verify that both the www and apex domain open and that the apex redirects to the chosen primary domain. DNS propagation can take up to 48 hours.
7. After the custom domain works, verify `https://www.kannizconites.com/robots.txt` and `/sitemap.xml`, then add `https://www.kannizconites.com` as a URL-prefix property in Google Search Console and submit the sitemap.

DNS records vary by provider and Netlify configuration. Follow the current instructions shown in your Netlify Domain management screen if they differ from these standard external-DNS records.

## Build and lint

- `npm run build` creates the deployable site in `dist`.
- `npm run lint` runs ESLint across the app and Firebase functions.
