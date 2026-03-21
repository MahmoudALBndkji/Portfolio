# Lighthouse / performance checklist

Run locally after `npx serve .` or your static host (not `file://`).

1. **Chrome DevTools → Lighthouse** (Mobile + Desktop), categories: Performance, Accessibility, Best practices, SEO.
2. **Targets (guidance, not guarantees)**  
   - Performance: push toward **≥ 90** by compressing hero GIF, serving WebP/AVIF where possible, and keeping third-party scripts minimal.  
   - Accessibility: fix any contrast or name/role issues the report flags (especially custom controls).  
   - SEO: ensure one `<h1>` per page, valid meta description, and canonical URL when you deploy.
3. **Known tradeoffs**  
   - `og:image` / `twitter:image` on the home page use **relative** paths; set absolute URLs when you have a final domain so social crawlers resolve images correctly.  
   - Isotope + many portfolio images: already mitigated with layout on image load; consider fewer above-the-fold images or a CDN for LCP.

Re-run after large asset or script changes.
