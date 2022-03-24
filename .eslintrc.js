module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  plugins: ["vue", "@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "./.eslintrc-auto-import.json",
  ],
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    parser: {
      js: "espree",
      ts: "@typescript-eslint/parser",
      "<template>": "espree",
    },
  },
  rules: {
    "no-console": "warn",
    "no-debugger": "error",
    "no-unused-vars": "error",
    "prettier/prettier": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "vue/script-setup-uses-vars": "error",
    eqeqeq: ["warn", "always", { null: "ignore" }],
  },
};
