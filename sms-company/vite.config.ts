import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import viteTsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  server: {
    port: 3001,
  },
  preview: {
    port: 3000,
  },
});
