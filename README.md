# ShortenedUrl Prerequisites

* Local MongoDB installed and running. Download from [Download MongoDB](https://www.mongodb.com/try/download/community)   then [Install MongoDB](https://docs.mongodb.com/manual/administration/install-community/)
* NodeJS Download / Install [Node.JS](https://nodejs.org/en/) 
* Angular CLI (Depends on NodeJS) [Angular CLI](https://github.com/angular/angular-cli)

## ShortLink Server
This angular app depends on Shortlink server in order to return the auto-generated shortened url.

## Install Angular CLI
Angular CLI can be installed using Node.JS.

After downloading and installing the downloaded package, Angular CLI can now be installed with the following command
npm install -g @angular/cli

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

In addition please run ShortLink Server and MongoDB in parallel 

[ShortLink Server](https://github.com/athanri/ShortenedURL_Server)

Instructions can be found on how to run the ShortLink Server in README.md file on the link above

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

There are a total of 10 Unit Tests. Some I have added but most were auto generated tests.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

To view NodeJS documentation
[NodeJS Documentation](https://nodejs.org/en/docs/)

MongoDB - [MongoDB Documentation](https://docs.mongodb.com/manual/introduction/)
