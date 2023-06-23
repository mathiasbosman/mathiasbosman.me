# Mathias Bosman - online resume

## About

A simple website with a bit of GitHub magic containing my personal resume
on [mathiasbosman.be][link_mathiasbosman_be].

## Development
1. make sure the dev branch contains the latest state
2. create a feature branch from the dev branch
3. make your changes and create a pull request into the dev branch

### Testing
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
npm run local
npm run cy:run:e2e
```

## Deployment
Steps to deploy:

1. once you want to publish merge the dev branch into the master branch
2. create a new release [via GitHub][link_github_new_release]
This will trigger [the GitHub workflow](.github/workflows/publish.yml) that builds the project and publishes it to the GitHub pages.  
The version of the GitHub release will be used.
3. Heroku will automatically stage the master branch
4. Heroku will run `npm start` and start an express server.  
The config can be found in [server.js](server/server.js)
5. Check the deployed staging site and deploy the production app manually on Heroku from the master branch

## Credits

### Frameworks and libraries
- [React.js][link_react_js]
- [Vite][link_vite]
- GitHub's [Primer.style][link_primer_style] React components.
- [Cypress][link_cypress] for testing components and simple e2e.

[link_mathiasbosman_be]:http://mathiasbosman.be
[link_react_js]:https://reactjs.org/
[link_primer_style]:https://primer.style/
[link_github_new_release]:https://github.com/mathiasbosman/mathiasbosman.github.io/releases/new
[link_cypress]:https://cypress.io
[link_vite]:http://vitejs.dev