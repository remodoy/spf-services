import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends(
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
).map(config => ({
    ...config,
    files: ["**/*.js", "**/*.ts"],
})), {
    files: ["**/*.js", "**/*.ts"],

    languageOptions: {
        globals: {
            ...globals.node,
        },

        ecmaVersion: 5,
        sourceType: "commonjs",

        parserOptions: {
            project: true,
        },
    },

    rules: {
        "prettier/prettier": "warn",
        eqeqeq: ["error", "smart"],
        "no-consecutive-blank-lines": 0,
        "no-restricted-syntax": ["error", "BinaryExpression[operator='in']"],

        "@typescript-eslint/explicit-member-accessibility": ["error", {
            accessibility: "no-public",
        }],

        "@typescript-eslint/explicit-module-boundary-types": ["error", {
            allowArgumentsExplicitlyTypedAsAny: true,
        }],

        "@typescript-eslint/no-unused-vars": ["error", {
            vars: "all",
            args: "none",
            varsIgnorePattern: "^_",
            argsIgnorePattern: "^_",
            caughtErrorsIgnorePattern: "^_",
        }],

        "@typescript-eslint/no-explicit-any": "off",
    },
}];