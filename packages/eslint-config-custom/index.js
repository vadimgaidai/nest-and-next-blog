module.exports = {
  extends: ['next', 'turbo', 'airbnb', 'airbnb/hooks', 'eslint:recommended', 'prettier'],
  plugins: ['eslint-plugin-prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', './'],
      },
    },
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        jsxBracketSameLine: true,
        printWidth: 100,
        proseWrap: 'never',
        endOfLine: 'auto',
      },
    ],
    '@next/next/no-html-link-for-pages': 0,
    'react/jsx-key': 0,
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'no-unneeded-ternary': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: false }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-param-reassign': 0,
    'import/no-cycle': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/button-has-type': 0,
    'import/extensions': 0,
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: true,
        allowLiteral: false,
        allowObject: true,
      },
    ],
  },
}
