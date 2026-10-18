import { defineConfig, globalIgnores } from "eslint/config";
import nextConfig from "eslint-config-next";

export default defineConfig([
  ...nextConfig({
    pagesDir: "src/app",
    lintHook: "off",
  }),
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
