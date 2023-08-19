# [mathiasbosman.me][link_mathiasbosman_me]

## About

A simple website that tells a bit more abou me.  
Find it on [mathiasbosman.me][link_mathiasbosman_me].

## Development

### Local development

A simple `npm install` should be enough to get started.
Once dependencies are installed `npm run dev` will spin up the website locally.
The terminal will tell you which local address is used.
For example:

```shell
  VITE vx.x.x  ready in 126 ms

  ➜  Local:   http://localhost:9000/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

1. make sure the `main` branch contains the latest state
2. create a feature branch from the `main` branch
3. make your changes and create a pull request into the `main` branch

### Linting and code style

Eslint and Prettier are used to check (and fix) code style.

Run `npm run lint` to run both eslint and Prettier checks.  
To fix issues `npm run lint:fix` can be used.

## Testing

3 types of testing are active:

1. [Unit tests](#unit-testing)
2. [Component tests](#component-testing)
3. [End-2-end tests](#end-to-end)

Unit and component tests are run on each push.
In addition, end-2-end tests are run on pull requests.

### Unit testing

[Vitest][link_vitest] is used for unit testing and can be run by running the below npm script:

```shell
npm run test:unit
```

#### Component testing

Components are tested via [Cypress][link_cypress]:

```shell
npm run test:component
```

### End to end

These are also run with [Cypress][link_cypress].
For end-2-end tests the application should be running.

#### Run locally with Cypress ui for live updates

```shell
npm run dev
npm run cy:ui
```

##### Run on preview build

```shell
npm run build
npm run preview
npm run test:e2e
```

**Note:** there is a Cypress test that checks if outgoing links are reachable.  
When running `npm run test:e2e` this test will always run as part of the specs.  
If you just want to run the application e2e tests run `npm run test:e2e:app`

## Deployment

The main branch will automatically be deployed via [Vercel][link_vercel].
Every pull request will deploy a preview app.
[Vercel][link_vercel] will comment on the PR with the relevant links.

## Credits

### Frameworks and libraries

- [React][link_react]
- [Tailwindcss][link_tailwind]
- [Heroicons][link_heroicons]
- [Vite][link_vite]
- [Cypress][link_cypress]

_For other dependencies used check out the [package.json](package.json) file._

[link_mathiasbosman_me]: http://mathiasbosman.me
[link_react]: https://react.dev
[link_tailwind]: https://tailwindcss.com/
[link_heroicons]: https://heroicons.com
[link_cypress]: https://cypress.io
[link_vercel]: https://vercel.com/
[link_vite]: http://vitejs.dev
[link_vitest]: http://vitest.dev
