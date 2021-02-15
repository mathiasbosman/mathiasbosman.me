# Mathias Bosman - CV
![Maven build](https://github.com/mathiasbosman/cv/workflows/Maven%20build/badge.svg)

Simple HTML website with a bit of Github automatisation magic containing my personal resume
on [mathiasbosman.be](http://mathiasbosman.be).

## Building

The website uses some a Spring Boot backend and React.js frontend.

To install just run

```bash
mvn clean install
```

This will build both back- and frontend after which you can start the application and visit the
website at http://localhost:8081 (mind the port here)

## Local development

### Spring Boot

For local development it is required to adjust the [local properties file][application_local] for
Spring Boot. The application uses OAuth2 for authorization which (sadly) cannot be disabled via a
simple property.

### React.js

Developping the frontend is as simple as running

```bash
npm start
```

in the "webapp" folder while the backend application is running.

## Publishing

//todo: finishe this

The workflow also takes care of creating the sitemap and adding a verification file for Google.

### Google site verification

One of the methods to verify your website with Google is the presence of a certain html file in the
root folder of the website. The name of the file is the actual verification
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


[publish_workflow]:.github/workflows/publish.yml

[application_local]:cv-app/src/main/resources/application-local.yml