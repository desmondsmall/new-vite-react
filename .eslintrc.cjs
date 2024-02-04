module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "semi": ["error", "always"],
      "array-bracket-spacing": ["error", "always"],
      "object-curly-spacing": ["error", "always"],
      "react/no-unescaped-entities": ["off"],
      "no-trailing-spaces": ["error", {
          "skipBlankLines": false,
          "ignoreComments": true
      }],
      "eol-last": ["error", "always"],
      "@typescript-eslint/ban-ts-comment": "off",
      "quotes": ["error", "double"],
      "indent": ["error", 4]
  },
}
