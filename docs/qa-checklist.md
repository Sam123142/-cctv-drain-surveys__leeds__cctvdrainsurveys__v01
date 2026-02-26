# QA Checklist: CCTV Drain Surveys Leeds Project

## Content QA
- [ ] NO fake addresses/offices listed.
- [ ] NO fake review/testimonial claims.
- [ ] NO "based in Leeds" claims; all use "serving Leeds".
- [ ] All British spellings used (UK English).
- [ ] No marketing hype or superlatives (e.g., "cheap", "best").
- [ ] Contact details match the .env variables.
- [ ] Headlines (H1, H2, H3) follow a logical hierarchy.
- [ ] No grammar or spelling errors.

## SEO QA
- [ ] Keywords included naturally in primary headlines.
- [ ] Title tags are descriptive and stay within character limits.
- [ ] Meta descriptions are optimized for clicks and include Leeds.
- [ ] Images have descriptive alt text (e.g., "CCTV drain survey monitor Leeds").
- [ ] Semantic HTML is used correctly (`<header>`, `<main>`, `<footer>`, etc.).
- [ ] Internal linking is implemented per the PRD.
- [ ] All URLs are clean and keyword-rich.
- [ ] Canonical tags point to the correct URLs.
- [ ] Schema is implemented (Service, not LocalBusiness unless verified).

## Conversion QA
- [ ] Phone number is clearly visible and clickable (tel link).
- [ ] Short enquiry form is functional and fields are labeled.
- [ ] Success message displays after form submission.
- [ ] CTA buttons are high-contrast and clear.
- [ ] Mobile navigation is easy to use.
- [ ] Error states are present on the form.

## Performance QA
- [ ] Images are optimized (WebP format if possible).
- [ ] Page load speed (LCP) is within performance targets.
- [ ] No CLS (Cumulative Layout Shift) issues on mobile or desktop.
- [ ] Resources (JS/CSS) are minified and only loaded where needed.

## Final Deploy Readiness
- [ ] All links are working (no 404s).
- [ ] Sitemap.xml and robots.txt are generated and correct.
- [ ] Favicon and social sharing tags are in place.
- [ ] Google Analytics/Tracking code is ready (if applicable).
- [ ] The .env.example file is up-to-date.
- [ ] README.md contains instructions for the final site version.
