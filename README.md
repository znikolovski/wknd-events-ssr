# WKND Events SPA Editor Project

This is the code companion for a tutorial that walks through the process of setting up an AEM project to leverage the Single Page App or SPA Editor feature.

## Modules

The main parts of the template are:

* react-app: a webpack project for the React application. The App is built and deployed to AEM in the form of a client library via the ui.apps module. see the README beneath the react-app for more details.
* core: Java bundle containing all core functionality like OSGi services, listeners or schedulers, as well as component-related Java code such as servlets or request filters.
* ui.apps: contains the /apps (and /etc) parts of the project, ie JS&CSS clientlibs, components, templates, runmode specific configs as well as Hobbes-tests
* ui.content: contains sample content using the components from the ui.apps

## How to build

To build all the modules run in the project root directory the following command with Maven 3:

    mvn clean install

If you have a running AEM instance you can build and package the whole project and deploy into AEM with  

    mvn clean install -PautoInstallPackage
    
Or to deploy it to a publish instance, run

    mvn clean install -PautoInstallPackagePublish
    
Or alternatively

    mvn clean install -PautoInstallPackage -Daem.port=4503

Or to deploy only the bundle to the author, run

    mvn clean install -PautoInstallBundle

## Enabling Server Side Rendering (SSR)

A SPA can be rendered in two ways:

 - Client-side which is where th SPA code is loaded in the browser as a compiled JS or
 - Server-side where a separate server renders the HTML and hands it off to AEM to render

Adobe's recommendation for SPA Editor applications is that the SSR scenario is done via an I/O Runtime action. The example in this project demonstrates the following:

 - Build an SSR Runtime (OpenWhisk) action
 - Add the SPA dist package to the action
 - Create an action package
 - Deploy the action in Runtime

To support this a new Maven profile called `serverSideRender` is introduced. This profile encapsulates properties and maven execution that will package and deploy the Runtime action and also setup properties within the AEM project to specify the URL of the action.

Managing the action process relies heavily on the aio-cli tool. You can find the documentation about the aio-cli tool in [this GitHub repo](https://github.com/adobe/aio-cli).

### Running OpenWhisk locally

 1. docker pull openwhisk/action-nodejs-v10:latest
 2. docker pull adobeapiplatform/adobe-action-nodejs-v10:3.0.21
 3. cd aem-guides/wknd/events/react-server
 4. create .env file with the following
```
# Specify your secrets here
# This file should not be committed to source control
## please provide your Adobe I/O Runtime credentials
# AIO_RUNTIME_AUTH=
# AIO_RUNTIME_NAMESPACE=
```
 5. aio app run --local
 6. that command will create a .env.app.save file. Copy it’s content in .env
 7. cd ..
 8. mvn clean install -PautoInstallPackage -P serverSideRender
 9. navigate to [WKND Home](http://localhost:4502/content/wknd-events/react)

## Testing

There are three levels of testing contained in the project:

* unit test in core: this show-cases classic unit testing of the code contained in the bundle. To test, execute:

    mvn clean test

* server-side integration tests: this allows to run unit-like tests in the AEM-environment, ie on the AEM server. To test, execute:

    mvn clean verify -PintegrationTests

* client-side Hobbes.js tests: JavaScript-based browser-side tests that verify browser-side behavior. To test:

    in the browser, open the page in 'Developer mode', open the left panel and switch to the 'Tests' tab and find the generated 'MyName Tests' and run them.


## Maven settings

The project comes with the auto-public repository configured. To setup the repository in your Maven settings, refer to:

    http://helpx.adobe.com/experience-manager/kb/SetUpTheAdobeMavenRepository.html
