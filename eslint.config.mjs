import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import importPlugin from 'eslint-plugin-import'

export default tseslint.config(
	{
		ignores: ['dist', 'node_modules'],
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				document: 'readonly',
				window: 'readonly',
			},
		},
		plugins: {
			react,
			'react-hooks': reactHooks,
			import: importPlugin,
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
		rules: {
			// React
			'react/react-in-jsx-scope': 'off',
			'react/jsx-uses-react': 'off',

			// Hooks
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',

			// Imports
			'import/no-duplicates': 'error',
			'import/newline-after-import': 'error',

			// TypeScript
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{ argsIgnorePattern: '^_' },
			],
			'@typescript-eslint/no-explicit-any': 'warn',
		},
	}
)
