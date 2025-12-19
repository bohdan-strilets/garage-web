import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-config-prettier";

export default tseslint.config(
  // Global ignores
  {
    ignores: ["dist", "node_modules"],
  },

  // Base JS rules
  js.configs.recommended,

  // TypeScript rules
  ...tseslint.configs.recommended,

  // Application source files
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      import: importPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // React
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",

      // Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Imports
      "import/no-duplicates": "error",
      "import/newline-after-import": "error",

      // TypeScript
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },

  // Node.js config files (commitlint, vite, etc.)
  {
    files: ["*.config.js", "*.config.cjs"],
    languageOptions: {
      globals: {
        module: "readonly",
        require: "readonly",
        process: "readonly",
      },
    },
  },

  // Disable ESLint rules conflicting with Prettier
  prettier,
);
