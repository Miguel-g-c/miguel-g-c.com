import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://www.miguel-g-c.com",
  integrations: [tailwind()],
});
