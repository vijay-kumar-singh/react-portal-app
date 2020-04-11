module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    extends: [
      "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
      "plugin:@typescript-eslint/recommended" // Uses the recommended rules from @typescript-eslint/eslint-plugin
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true // Allows for the parsing of JSX
      }
    },
    rules: {
      // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
      "@typescript-eslint/explicit-function-return-type": [
        "warn",{
          ällowExpressions: true,
          ällowTypedFunctionExpressions: true
        }
      ],
      "@typescript-eslint/explicit-function-return-type": ["error", {
        "allowTypedFunctionExpressions": true
      }],
      "@typescript-eslint/interface-name-prefix": [
        "error",
        {
            "prefixWithI": "never"
        }
    ],
    "interface-name" : [true, "never-prefix"],
    "allowTypedFunctionExpressions": true,
    "@typescript-eslint/no-angle-bracket-type-assertion": "off",
    "react/display-name": "off"
    },
    settings: {
      react: {
        version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
      }
    }
  };
  