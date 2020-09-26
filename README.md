# ShortenedUrl Prerequisites

* Download and Install Docker / Docker Composer [Windows](https://hub.docker.com/editions/community/docker-ce-desktop-windows) [MacOS](https://hub.docker.com/editions/community/docker-ce-desktop-mac)

## ShortLink Server UI and DB
This repo contains the source code for the shortlink server and source code along with the compiled version of the shortlinkUI

## Setup
Install docker / docker composer

Clone / Download this repo

Open CMD or Terminal window

Change Directory to cloned / downloaded repo you should notice a docker-compose.yml file in this dir (`ls`(Mac) or `dir`(Windows) to view files folders.

run `docker-compose build` allow command to complete, may take some time depending on Internet connection.

run `docker-compose up` once previous command finishes.

## View UI
To launch frontend ui, open browser of choice and enter following address `http://localhost:4200`

## Build
Open CMD or Terminal window

Change Directory to `angularshortlink` inside cloned / downloaded repo

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

There are a total of 10 Unit Tests. Some I have added but most were auto generated tests.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Potential Enhancements
1. Stored url to DB. (Implemented)
2. Duplicate long links will be retrieved from DB. (Implemented)
3. Mobile Friendly (Implemented)
3. Provide Login and register functionality so end user can view stored links anywhere.(Not Implemented)
4. Admin and User Panels so users can change their name and password. Admins can delete / add users. (Not Implemented)

## Limitations
* App needs to run on Ports 4200(UI), 5000(Server) and 27017(DB) before app will work correctly.
* Only certain urls will be accepted by UI as I used a simple regex statement on UI.

## Known Issues
* Only certain urls will be accepted by UI as I used simple regex statement on FE.
* Flash Messages don't always clear nicely.
* User can input incorrect URLs and only the server will reject them.
* Viewing details of one item opens all itmes in view.

## Further help

App Usage Doc available [here](https://docs.google.com/document/d/1pSdtS-nAzei7vvHbSjhKG97F5Sc2tL49qcL7SqXqjnY/edit?usp=sharing).
