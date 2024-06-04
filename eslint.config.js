import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import globals from 'globals'
import prettier from 'eslint-config-prettier'

export default tseslint.config(
  {
    ignores: ['.wdio/'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tseslint.parser,
      parserOptions: {
        project: true,
      },
    },
    rules: {
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'no-empty': 'off',
    },
  },
  prettier
)
