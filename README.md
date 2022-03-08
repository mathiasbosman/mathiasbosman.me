# Mathias Bosman - online resume

## About

A simple website with a bit of GitHub magic containing my personal resume
on [mathiasbosman.be][link_mathiasbosman_be].

## Deployment

Steps to deploy:

- make sure the master branch contains a deployable state
- `npm run` either `prePatch`, `minorRelease` or `preRelease`
- make sure the FTP secrets used in [publish.yml](.github/workflows/publish.yml) are present
- create a new release [via GitHub][link_github_new_release]

This will trigger the GitHub workflow that builds the project and publishes it to the given FTP
server.

## Credits

### Frameworks and libraries

- [React.js][link_react_js]
- GitHub's [Primer.style][link_primer_style] React components.

### GitHub actions
[<img alt="Deployed with FTP Deploy Action" src="https://img.shields.io/badge/Deployed With-FTP DEPLOY ACTION-%3CCOLOR%3E?style=for-the-badge&color=0077b6">](https://github.com/SamKirkland/FTP-Deploy-Action)

A huge shout-out to [SamKirkland][link_sam_kirkland] for [his GitHub action][link_github_action] to
transfer files using FTP(S).


[link_mathiasbosman_be]:http://mathiasbosman.be

[link_react_js]:https://reactjs.org/

[link_primer_style]:https://primer.style/

[link_sam_kirkland]:https://github.com/SamKirkland

[link_github_action]:hhttps://github.com/SamKirkland/FTP-Deploy-Action

[link_github_new_release]:https://github.com/mathiasbosman/mathiasbosman.github.io/releases/new