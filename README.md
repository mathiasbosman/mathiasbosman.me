# Mathias Bosman - online resume

## About

A simple website with a bit of GitHub magic containing my personal resume
on [mathiasbosman.be][link_mathiasbosman_be].

## Development

1. make sure the dev branch contains the latest state
2. create a feature branch from the dev branch
3. make your changes and create a pull request into the dev branch

### Testing

At the moment only end-to-end tests exist.

These can be run by calling `npm run test:e2e`.
and are run with [Cypress][link_cypress].

For end-2-end tests the application should be running:

```shell
npm run dev
npm run test:e2e
```

## Deployment
The master branch will automatically be deployed via Netlify.

## Credits

### Frameworks and libraries

-   [Lit][link_lit]
-   [Tailwindcss][link_tailwind]
-   [Vite][link_vite]
-   [Cypress][link_cypress] for testing components and simple e2e.

[link_mathiasbosman_be]: http://mathiasbosman.be
[link_lit]: https://lit.dev/
[link_tailwind]: https://tailwindcss.com/
[link_github_new_release]: https://github.com/mathiasbosman/mathiasbosman.github.io/releases/new
[link_cypress]: https://cypress.io
[link_vite]: http://vitejs.dev
