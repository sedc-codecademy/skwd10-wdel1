# skwd10-wdel1\

# Lecture documentation & useful links ✨

Download link for installing node.js can be found [here](https://nodejs.org/en/download/)
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
- touch - This command creates a file(ex. touch index.js will create a file index.js in the current folder)

## Importing and exporting modules in node.js
### Importing modules
Documentation [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
*Always add the extensions at the end of the name of the file when importing them
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
*You can check all the installed packages and dependencies in the package.json file

## package.json scripts
An npm script is a convenient way to bundle common shell commands like a set of built-in and custom scripts for your project. They are typically terminal commands or a string of terminal commands that help automate repetitive tasks.\
In short, NPM scripts are terminal commands that perform a set of actions.\
In a project, scripts are stored in a section of the package.json file, which means they are shared amongst everyone using the codebase, ensuring that everyone is using the same command with similar flags.\

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
