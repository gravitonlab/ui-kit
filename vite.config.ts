/// <reference types="vitest/config" />
import { defineConfig, esmExternalRequirePlugin } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

// https://vite.dev/config/
import path, { extname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { globSync } from "node:fs";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: resolve(__dirname, "tsconfig.lib.json"),
      insertTypesEntry: true,
    }),
    babel({ presets: [reactCompilerPreset()] }),
    libInjectCss(),
  ],
  server: {
    open: true,
    port: 3000,
  },
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
    },
    rolldownOptions: {
      input: Object.fromEntries(
        globSync("lib/**/*.{ts,tsx}", {
          exclude: ["lib/**/*.d.ts"],
        }).map((file) => [
          // The name of the entry point
          // lib/nested/foo.ts becomes nested/foo
          relative("lib", file.slice(0, file.length - extname(file).length)),
          // The absolute path to the entry file
          // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
          fileURLToPath(new URL(file, import.meta.url)),
        ]),
      ),
      output: {
        entryFileNames: "[name].js",
      },
      plugins: [
        esmExternalRequirePlugin({
          external: [/^react(-dom)?(\/.+)?$/],
        }),
      ],
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: "chromium",
              },
            ],
          },
        },
      },
    ],
  },
});
