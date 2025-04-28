import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    Components({
      dirs: ["src/components"],
      extensions: ["vue"],
      deep: true,
      dts: true,
    }),
    tailwindcss(),
    vue(),
  ],
});
