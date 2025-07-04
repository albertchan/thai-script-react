import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
    settings: {
      next: {
        rootDir: 'packages/my-app/',
      },
    },
    rules: {
      "no-restricted-imports": [
        "error",
        {
          "patterns": [{ "regex": "^@mui/[^/]+$" }]
        }
      ]
    },
  }),
];

export default eslintConfig;
