# Mathias Bosman - CV
![Build](https://github.com/mathiasbosman/cv/workflows/Build%20NPM/badge.svg)

Simple HTML website with a bit of Github automatisation magic containing my personal resume
on [mathiasbosman.be](http://mathiasbosman.be).

## Building

The website uses some packages to build the css and js files after which minimising them.

To install just run

```bash
npm install
```

To run the build simply run:

```bash
npm run build
```

If you want to compile the SCSS or minify the JS manually you can check out the individual scripts
that are run by the build script in the [package.json](package.json) file.

## Publishing

Whenever a release is published on [Github](https://github.com/mathiasbosman/cv) the code will be
placed on the FTP server via a [Github workflow][publish_workflow].

The code gets compiled and minified after which the development modules are cleaned up to avoid
unnecessary FTP uploads. Technical files such as the git files and npm files are also ignored.

The workflow also takes care of creating the sitemap and adding a verification file for Google.

### Google site verification

One of the methods to verify your website with Google is the presence of a certain html file in the
root folder of the website. This is an HTML file. The name of the file is the actual verification
code. For example: `someCool404Code.html`. The content should reference this file:

```text
google-site-verification: someCool404Code.html
```

The only requirement for this to work is for the actual code (without the `html` extension) to be
present in a Github secret named `GOOGLE_VERIFICATION_CODE`.
The [publish workflow][publish_workflow] will take care of creating and populating the file.

```yaml
name: Create google verification
env:
    GOOGLE_CODE: ${{ secrets.GOOGLE_VERIFICATION_CODE }}
run: |
    echo "google-site-verification: $GOOGLE_CODE.html" > "$GOOGLE_CODE".html
```

### Sitemap generation

Because the sitemap contains a "latest update" date it is generated automatically when published. To
do this we use the Github action [generate-sitemap](https://github.com/cicirello/generate-sitemap).
Check the repo for more information about the setup.

### FTP credentials

The credentials used for the FTP upload are stored in Github secrets:

```yaml
with:
    server: ${{ secrets.FTP_HOST }}
    username: ${{ secrets.FTP_USERNAME }}
    password: ${{ secrets.FTP_PASSWORD }}
    protocol: ${{ secrets.FTP_PROTOCOL }}
    server-dir: ${{ secrets.FTP_SERVER_DIR }}
```

The workflow uses the Github
action [FTP-Deploy-Action](https://github.com/SamKirkland/FTP-Deploy-Action). Check the repo for
more information on how to set it up.

[publish_workflow]:.github/workflows/publish.yml