import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://www.thewhiteninglab.co";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().split("T")[0];
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/greater-portland-location", changefreq: "monthly", priority: "0.9" },
          { path: "/southern-maine-location", changefreq: "monthly", priority: "0.9" },
          { path: "/our-results", changefreq: "monthly", priority: "0.8" },
          { path: "/striplikeapro", changefreq: "monthly", priority: "0.7" },
          { path: "/book-an-appointment", changefreq: "monthly", priority: "0.9" },
          { path: "/contact-us", changefreq: "monthly", priority: "0.8" },
          { path: "/referrals", changefreq: "monthly", priority: "0.6" },
          { path: "/welcome-packet", changefreq: "monthly", priority: "0.5" },
          { path: "/aftercare", changefreq: "monthly", priority: "0.5" },
          { path: "/cancellation-policy", changefreq: "yearly", priority: "0.3" },
          { path: "/privacy", changefreq: "yearly", priority: "0.3" },
          { path: "/terms", changefreq: "yearly", priority: "0.3" },
          { path: "/accessibility", changefreq: "yearly", priority: "0.3" },
        ];

        const urls = entries
          .map(
            (e) =>
              `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
