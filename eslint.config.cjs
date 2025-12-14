// eslint.config.cjs - Flat config para React + TypeScript

const js = require("@eslint/js");
const ts = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");
const importPlugin = require("eslint-plugin-import");
const reactPlugin = require("eslint-plugin-react");
const reactHooksPlugin = require("eslint-plugin-react-hooks");

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = [
  // Ignorar paths (equivalente a .eslintignore)
  {
    ignores: ["dist", "coverage", "docs", "node_modules", "build"],
  },

  // Reglas base JS recomendadas
  js.configs.recommended,

  // Reglas para TypeScript + React (app)
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        document: "readonly",
        window: "readonly",
        console: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": ts,
      import: importPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // Reglas recomendadas de TypeScript
      ...ts.configs.recommended.rules,

      // Reglas recomendadas de React
      ...reactPlugin.configs.recommended.rules,

      // Reglas recomendadas de react-hooks
      ...reactHooksPlugin.configs.recommended.rules,

      // No obligar a importar React en cada archivo JSX/TSX (React 17+)
      "react/react-in-jsx-scope": "off",

      // Orden de imports (similar a tu template de lib)
      "import/order": [
        "warn",
        {
          groups: [
            ["builtin", "external"],
            ["internal"],
            ["parent", "sibling", "index"],
          ],
          "newlines-between": "always",
        },
      ],
    },
  },

  // Override para tests (Vitest globals)
  {
    files: ["**/*.test.ts", "**/*.test.tsx", "**/*.spec.ts", "**/*.spec.tsx"],
    languageOptions: {
      globals: {
        describe: "readonly",
        it: "readonly",
        test: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        vi: "readonly",
      },
    },
  },

  // Scripts JS (si en el futuro agregás scripts de build, etc.)
  {
    files: ["scripts/**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        console: "readonly",
        process: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
      },
    },
  },
];
