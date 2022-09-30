# skwd10-wdel1

# Lecture documentation & useful links ✨

Download link for installing node.js can be found [here](https://nodejs.org/en/download/)\
Instructions for downloading and installing node.js [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
)

## Main node.js and npm commands
- npm install - Installs a package in the package.json file in the local node_modules folder.
- npm uninstall - Removes a package from the package.json file and removes the module from the local node_modules folder.
- npm update - Updates the specified package. If no package is specified then it updates all the packages in the specified location.
- npm update -g - This command will apply the update action to each globally installed package.
- npm init - Creates a package.json file in our directory. It basically asks some questions and finally creates a package.json file in the current project directory.
- node -v - Prints the version of node you are currently using
- npm start - Runs a command that is defined in the start property in the scripts. If not defined it will run the node server.js command.
- npm build - This command is used to build a package.
- npm help - This command searches npm help documentation for a specified topic. It is used whenever the user needs help to get some reference.
- touch - This command creates a file(ex. touch index.js will create a file index.js in the current folder).

## Importing and exporting modules in node.js
### Importing modules
Documentation [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)\
*Always add the extensions at the end of the name of the file when importing them.
### Exporting modules
Documentation [link](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export)

## Nodemon
Nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected. Nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node. 
### Installation
-Through cloning with git or by using npm (the recommended way):
npm install -g nodemon or using yarn: yarn global add nodemon
And nodemon will be installed globally to your system path.

-You can also install nodemon as a development dependency:
npm install --save-dev nodemon # or using yarn: yarn add nodemon -D

With a local installation, nodemon will not be available in your system path or you can't use it directly from the command line.\Instead, the local installation of nodemon can be run by calling it from within an npm script (such as npm start) or using npx nodemon.
*nodemon wraps your application, so you can pass all the arguments you would normally pass to your app.\

To use nodemon, replace the word node on the command line when executing your script: 
```
nodemon [your node app]
```

## Dependencies vs DevDependencies
"dependencies": Packages required by your application in production.\
"devDependencies": Packages that are only needed for local development and testing.\
*You can check all the installed packages and dependencies in the package.json file.

## package.json scripts
An npm script is a convenient way to bundle common shell commands like a set of built-in and custom scripts for your project. They are typically terminal commands or a string of terminal commands that help automate repetitive tasks.\
In short, NPM scripts are terminal commands that perform a set of actions.\
In a project, scripts are stored in a section of the package.json file, which means they are shared amongst everyone using the codebase, ensuring that everyone is using the same command with similar flags.

To define an NPM script, set its name and write the script under the ‘scripts’ property of your package.json file:
```
"scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
```
To execute your Script, use the ‘npm run <NAME-OF-YOUR-SCRIPT>’ command. Some predefined aliases convert to npm run, like npm test or npm start, you can use them interchangeably. 

## Installing the JetBrains mono font

Follow the instructions on https://www.jetbrains.com/lp/mono/\
Go to Preferences/Settings → Editor → Font and change the following properties:\
"editor.fontFamily": "JetBrains Mono"\
"editor.fontLigatures": true (to use the fancy ligatures :) )

## MongoDb
Register on the following [website](https://www.mongodb.com/)\
Documentation on creating a mongoDb cluster can be found [here](https://www.mongodb.com/basics/clusters/mongodb-cluster-setup)

## Middlewares
Express.js is a routing and Middleware framework for handling the different routing of the webpage and it works between the request and response cycle. Middleware gets executed after the server receives the request and before the controller actions send the response. It has the access to the request object, responses object, and next, it can process the request before the server send a response. An Express-based application is a series of middleware function calls.\
**Middleware Chaining:** Middleware can be chained from one to another, Hence creating a chain of functions that are executed in order. The last function sends the response back to the browser. So, before sending the response back to the browser the different middleware process the request.\
**Advantages of using middleware:**
- Middleware can process request objects multiple times before the server works for that request.
- Middleware can be used to add logging and authentication functionality.
- Middleware improves client-side rendering performance.
- Middleware is used for setting some specific HTTP headers.
- Middleware helps for Optimization and better performance.\

![Middleware flow](https://www.tutorialspoint.com/expressjs/images/middleware_desc.jpg)

## Useful links for middlewares
Useful [link](https://www.turing.com/kb/building-middleware-for-node-js) for middlewares.\
Another useful [link](http://expressjs.com/en/guide/writing-middleware.html) for middlewares.

## Authentication and authorization with JWT Tokens
When building a web application, authentication is one of the important aspects, and we usually implement authentication using JWT tokens (You can learn more about JWT [here](https://www.geeksforgeeks.org/?p=545169\
We create an **access token** and store it in the local storage or session or cookie. But there is a more secure way to implement this using Refresh Tokens.

**Refresh Token:** It is a unique token that is used to obtain additional access tokens. This allows you to have short-lived access tokens without having to collect credentials every time one expires.

Since access tokens aren’t valid for an extended period because of security reasons, a refresh token helps to re-authenticate a user without login credentials. This Refresh token is never exposed to the client-side Javascript, even if our access token gets compromised it’ll be expired in a very short duration. So, we will be sending two tokens instead of one, an access token and a refresh token. The access token will contain all the user information and will be stored in Javascript runtime, but the refresh token will be stored securely in an HTTP-only cookie. 

![Simple refresh token flow](https://i.ytimg.com/vi/yadjfgDBSiM/maxresdefault.jpg)

## Useful links for access and refresh tokens
[npmjs documentation](https://www.npmjs.com/package/jsonwebtoken)\
[jwt official documentation](https://jwt.io/introduction)\
[Access and refresh tokens simply explained](https://www.loginradius.com/blog/identity/refresh-tokens-jwt-interaction/)\
[Extra link for JS Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#practical_closures)

## Angular
Angular is an open-source, JavaScript framework and platform supported and developed by Google, that is used to build enterprise Single-page Web Applications (or SPAs).\
Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.\
As a framework, Angular has clear advantages while also providing a standard structure for developers to work with. It enables users to create large applications in a maintainable manner.\
Angular is an opinionated framework which means that it specifies a certain style and certain rules that developers need to follow and adhere to while developing apps with Angular.\
[Angular official documantation](https://angular.io/)

As a development platform, Angular includes:
- A component-based framework for building scalable web applications
- A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more
- A suite of developer tools to help you develop, build, test, and update your code
- With Angular, you're taking advantage of a platform that can scale from single-developer projects to enterprise-level applications.

Angular is designed to make updating as straightforward as possible, so take advantage of the latest developments with a minimum of effort. Best of all, the Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators.

To start working with Angular you need to install Angular CLI.

The Angular CLI is the fastest, straightforward, and recommended way to develop Angular applications. The Angular CLI makes a number of tasks trouble-free. Here are some examples:
- ng build	Compiles an Angular app into an output directory.
- ng serve	Builds and serves your application, rebuilding on file changes.
- ng generate	Generates or modifies files based on a schematic.
- ng test	Runs unit tests on a given project.
- ng e2e	Builds and serves an Angular application, then runs end-to-end tests.

*Please note that it is very important to install Angular CLI globally, which means that you will be able to use it in any Angular project and there is no need for re-installation in each Angular project.\
*Additionally, if you use Visual Studio Code as a code editor, you may install the Angular language service extesnion, as it is very handy and helpful when developing Angular applications.
