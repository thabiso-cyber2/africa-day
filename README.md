# Africa Day — Premium Multi-page Website

A responsive, editorial-style public website for Africa Day, designed as a permanent cultural platform with the Lesotho @60 celebrations as its 2027 flagship programme.

## Main sitemap

- `index.html` — Home
- `our-story.html` — Our Story, platform purpose, 2026 event photo and video documentation
- `agenda.html` — Lesotho @60 / 2027 celebration content, six-day programme, keynote and legacy ambition
- `schools.html` — Schools Edition and its five programme pillars (no implementation phases)
- `partnerships.html` — Partnership rationale and proposed sponsorship packages
- `get-involved.html` — Contact details and enquiry form

`404.html` is the not-found page. Legacy URLs are redirected to the new page structure in `vercel.json`. The former standalone 2026 archive is now part of Our Story.

## Preview locally

1. Extract the ZIP archive.
2. Open the `africa-day-premium` folder.
3. Double-click `index.html`, or run `python3 -m http.server 8080` in this folder and visit `http://localhost:8080`.
4. Use the main navigation to visit all six pages.

The site is static HTML, CSS and JavaScript. No build step, dependencies or environment variables are required. Google Fonts are loaded remotely, with system fallbacks if unavailable.

## Deploy with GitHub + Vercel

1. Create a GitHub repository named `africa-day-public-website`.
2. Upload the contents of this folder to the repository root.
3. Import the repository into Vercel and choose **Other** as the framework preset.
4. Leave the build and install commands empty; use the repository root as the output directory.
5. Deploy. Future pushes to the connected branch will trigger deployments.

## Branding and media

- `assets/africa-day-logo.png` — official Africa Day Carnival logo supplied by the project team.
- `assets/africa-map.svg` — Africa silhouette used as the clickable home marker in internal-page breadcrumbs.
- `assets/images/` — optimised 2026 photographs and video poster.
- `assets/video/africa-day-2026-highlights.mp4` — supplied 2026 event video.
- `assets/favicon.svg` — browser favicon.

The visual system uses Cormorant Garamond and DM Sans, deep charcoal/forest tones, warm ivory, burnt orange and restrained gold.

## Content notes before public launch

- 2027 programme dates, venues, guest participation and keynote details are based on the supplied concept and remain subject to confirmation.
- Sponsorship packages and amounts are reproduced from the supplied concept and should be confirmed before formal offers are made.
- The Schools Edition draft lists MINO as a fifth pillar but does not define its activities; the page marks its scope as pending.
- Beneficiary figures are planning targets, not achieved results.
- Obtain publication permission and appropriate consent for identifiable people in the 2026 photos and video.
- School approvals, MOUs, safeguarding and parent/guardian consent are required before working with learners or publishing recordings.
- The exact reference breadcrumb treatment at africadaysweden2026.com could not be loaded in this build environment. The current implementation uses a consistent Africa silhouette home marker; provide a screenshot of the reference breadcrumb if a pixel-accurate match is required.

## Contact details displayed on the site

Vuyiseka Tlhankana — Pabatso Exposée & US Africa Multimedia International Curator  
Email: Vuyimdana@gmail.com  
Telephone: +266 5631 0175
