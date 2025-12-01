import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import prettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      "dist",
      "build",
      "node_modules",
      "eslint.config.mjs",
      "prettier.config.mjs",
    ],
  },

  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  js.configs.recommended,

  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^react$", "^react-dom$"],
            ["^@?\\w"],
            ["^@app(/.*)?$", "^@shared(/.*)?$"],
            [
              "^@entities(/.*)?$",
              "^@features(/.*)?$",
              "^@widgets(/.*)?$",
              "^@pages(/.*)?$",
            ],
            ["^../", "^./"],
            ["^.+\\.(css|scss)$"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",

      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports" },
      ],
    },
  },

  prettier,
];
