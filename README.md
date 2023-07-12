# Mathias Bosman - online resume

## About

A simple website with a bit of GitHub magic containing my personal resume
on [mathiasbosman.be][link_mathiasbosman_be].

## Development
1. make sure the dev branch contains the latest state
2. create a feature branch from the dev branch
3. make your changes and create a pull request into the dev branch

### Testing - out of date
Testing is split up in:
1. Unit tests
2. Component tests
3. End-2-end tests

Unit tests can be run by calling `npm run test:unit`.

Component and end-2-end tests are run with [Cypress][link_cypress].  
Component tests can be run by calling `npm run cy:run:component`.  
Make sure that the app is running by either serving the build app or running it locally.

For end-2-end tests the application should be running:
```shell
npm run dev
npm run test:e2e
```

## Deployment
Steps to deploy:

1. once you want to publish merge the dev branch into the master branch
2. create a new release [via GitHub][link_github_new_release]
This will trigger [the GitHub workflow](.github/workflows/publish.yml) that builds the project and publishes it to the GitHub pages.  
The version of the GitHub release will be used.  
By building it the postBuild script will also update the sitemap.xml file with the latest update time.

## Credits

### Frameworks and libraries
- [Lit][link_lit]
- [Tailwindcss][link_tailwind]
- [Vite][link_vite]
- [Cypress][link_cypress] for testing components and simple e2e.

[link_mathiasbosman_be]:http://mathiasbosman.be
[link_lit]:https://lit.dev/
[link_tailwind]:https://tailwindcss.com/
[link_github_new_release]:https://github.com/mathiasbosman/mathiasbosman.github.io/releases/new
[link_cypress]:https://cypress.io
[link_vite]:http://vitejs.dev
