module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'import',
        'simple-import-sort',
        'eslint-plugin-eslint-comments',
        'eslint-plugin-deprecation'
    ],
    env: {
        es6: true,
        browser: true,
        node: true
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: 'tsconfig.json'
    },
    rules: {
        "@typescript-eslint/consistent-type-imports": "error"
    },
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    overrides: [
        {
            'files': ['**/*.ts'],
        }
    ]
}
