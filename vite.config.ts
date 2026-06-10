// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Use Nitro's Netlify preset so the build produces a Netlify Function for SSR
// and places static assets in dist/ for Netlify to serve.
export default defineConfig({
  nitro: { preset: "netlify" },
  tanstackStart: {
    server: { entry: "server" },
  },
});
