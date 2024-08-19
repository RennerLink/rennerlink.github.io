import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://rennerlink.github.io",
  integrations: [vue(), icon()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport"
  }
});
