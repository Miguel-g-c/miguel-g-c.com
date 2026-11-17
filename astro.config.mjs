import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.miguel-g-c.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
