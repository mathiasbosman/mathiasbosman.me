module.exports = {
    "root": true,
    "ignorePatterns": [
        'node_modules/**/*',
        'dist/**/*',
        'coverage/**/*'],
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["standard-with-typescript","plugin:lit/recommended"],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "rules": {
    }
}
