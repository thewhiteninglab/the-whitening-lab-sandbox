import { createFileRoute, redirect } from "@tanstack/react-router";

// 301 redirect — page retired but URL preserved for SEO (still ranks in Google).
export const Route = createFileRoute("/striplikeapro")({
  beforeLoad: () => {
    throw redirect({ to: "/our-results", statusCode: 301 });
  },
});
