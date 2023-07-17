# Mathias Bosman - online resume

## About

A simple website with a bit of GitHub magic containing my personal resume
on [mathiasbosman.be][link_mathiasbosman_be].

## Development

1. make sure the development branch contains the latest state
2. create a feature branch from the dev branch
3. make your changes and create a pull request into the dev branch

We follow the default Git workflow:
![Git workflow](https://gist.githubusercontent.com/mathiasbosman/22d6d72b4db2c33a7b33979c4654287f/raw/98a23b57423f499a4520e164c95cc0cac17d4f62/release_branches.svg)

Once you're ready make a PR into the development branch.

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

The master branch will automatically be deployed via [Netlify][link_netlify].

## Credits

### Frameworks and libraries

-   [Lit][link_lit]
-   [Tailwindcss][link_tailwind]
-   [Vite][link_vite]
-   [Cypress][link_cypress] for testing components and simple e2e.

[link_mathiasbosman_be]: http://mathiasbosman.be
[link_lit]: https://lit.dev/
[link_tailwind]: https://tailwindcss.com/
[link_cypress]: https://cypress.io
[link_netlify]: https://netlify.com
[link_vite]: http://vitejs.dev
