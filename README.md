# Mathias Bosman - online resume

## About

A simple website with a bit of GitHub magic containing my personal resume
on [mathiasbosman.be][link_mathiasbosman_be].

## Development
1. make sure the dev branch contains the latest state
2. create a feature branch from the dev branch
3. make your changes and create a pull request into the dev branch

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
- GitHub's [Primer.style][link_primer_style] React components.

[link_mathiasbosman_be]:http://mathiasbosman.be
[link_react_js]:https://reactjs.org/
[link_primer_style]:https://primer.style/
[link_github_new_release]:https://github.com/mathiasbosman/mathiasbosman.github.io/releases/new