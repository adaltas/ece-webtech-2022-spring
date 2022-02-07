
# Lab: First Node.js & Git project

## Objectives

1. Start a project
2. Create a simple Node.js script 
3. Create a simple HTTP server
4. Integrate Nodemon
5. Create a basic application with multiple routes
6. Publish your project to GitHub / GitLab

## Notes

This work is a part of the continuous assessment of this course. It will be the basis for your final project. Your final grade will be calculated based on the final project’s result and your Git’s history.

## Before starting

1. Install an **IDE or a text editor**, for example, [Atom](https://atom.io/) or [VS Code](https://code.visualstudio.com/).
2. Install **Git**, use for installation:
  - Windows: https://gitforwindows.org/
  - Linux: https://git-scm.com/download/linux
  - macOS: https://git-scm.com/download/mac   
3. Install **Node.js** by referring the [prerequisites](../00.prerequisite/index.md#nodejs-installation).
4. Open a command-line interface:
  - macOS or Linux: use **Terminal**
  - Windows: use **Git Bash** (should be installed when installing Git). **Note!** Don't use default *CMD.exe*, because it has different commands from a command line of the Linux OS, which is used in most IT environments.

## Part 1. Start a project

### 1. Choose working directory

Using **CLI bash commands** in your terminal (Terminal or Git Bash) navigate to the directory where you will store your project folder.

[Learn basic CLI bash commands](https://www.educative.io/blog/bash-shell-command-cheat-sheet)

Example:

```bash 
cd ~/path/to/your-root-project-directory
```

### 2. Create a project folder

Choose a name for your project (for example, `my-project`) and create a directory:

```bash
mkdir my-project
```

> **Note!** Don't put spaces (` `) ether in folder names or file names. Otherwise, you will have to use escape characters when navigating to them. Use the "kebab-case" naming convention by separating words with dashes (`-`).

Then navigate to this directory:

```bash
cd my-project
```

### 3. Initialize a [Git repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)

```bash
git init
```

### 4. Initialize a Node.js package

Initialize a Node.js package running this command:

```bash
npm init -y
```

This will create an initial `package.json` file with the package description. Later, you can manually modify the content respecting the [JSON format](https://en.wikipedia.org/wiki/JSON). For example, these values:
  - `author`
  - `description`

### 5. Commit changes

Commit changes to Git repository:

```bash
git add .
git commit -m "initial"
```

## Part 2. Create a simple Node.js script 

### 1. Start working with a text editor

Now, we start using a text editor or IDE (Atom, VS Code, WebStorm, or up to your choice). 

Open a project folder in your editor. You also can use bash commands for opening it. Being under the root of the project directory, run one of the commands:

```bash
# For Atom
atom .

# For VS Code
code .
```

### 2. Create a script

Create a file `index.js` with the following content:

```js
console.log("Hello Node.js!")
```

Run the Node.js script in the terminal:

```bash
node index.js
```

It will print the message `Hello Node.js!`.

### 3. Define an NPM script

Add the script `start` to the `package.json` file like this:

```json
{
  ...
  "scripts": {
    "start": "node index.js"
  },
  ...
}
```

Run the NPM script with the command:

```bash
npm run start
# or
npm start
```

It will do the same as in step 2.

## Part 3. Create an HTTP server

### 1. Create an HTTP server

Modify the `index.js` file with the following content

```javascript
// Import a module
const http = require('http')

// Declare an http server
http.createServer(function (req, res) {

  // Write a response header
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Write a response content
  res.end('Hello World\n');

// Start the server
}).listen(8080)
```

Read and understand each line in this code using the [`http` Node.js official module documentation](https://nodejs.org/api/http.html). 

### 2. Run HTTP server

Run the command:

```
npm start
```

It will start a web server accessible on http://localhost:8080:
- open it in a browser
- or `curl localhost:8080` in a terminal to get the home page content

### 3. Define callback function

Rewrite the code to define a callback function

```javascript
const serverHandle = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}

const server = http.createServer(serverHandle);
server.listen(8080)
```

Don't forget to restart a server. To terminate a blocking process in the terminal use the combination of keys `Ctrl + C`. The start it again with `npm start`.

### 4. Sending back HTML

Change the content type & response content:

```javascript
// Define a string constant concatenating strings
const content = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>ECE AST</title>' +
'    </head>' + 
'    <body>' +
'       <p>Hello World!</p>' +
'    </body>' +
'</html>'

const serverHandle = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(content);
  res.end();
}
```

### 5. Get the current path 

Enrich the previous code with the following: 

```javascript 
...
// Import Node url module
const url = require('url')

const serverHandle = function (req, res) {
  // Retrieve and print the current path
  const path = url.parse(req.url).pathname;
  console.log(path);

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(content);
  res.end();
}
```

Access to your local website by different URLs like `localhost:8080` and `localhost:8080/my/path` and see what is printed in the terminal.

### 6. Get query parameters

Enrich the previous code with the following:

```javascript 
const url = require('url')
const qs = require('querystring')

const serverHandle = function (req, res) {
  // Retrieve and print the queryParams
  const queryParams = qs.parse(url.parse(req.url).query);
  console.log(queryParams);

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(content);
  res.end();
}
```

Access your local website by different URLs like `localhost:8080/?name=John&email=john@email.com`, and see what is printed in the terminal.

### 7. Basic routing example

Enrich the previous code with the following:

```javascript 
const url = require('url')
const qs = require('querystring')

const serverHandle = function (req, res) {
  const route = url.parse(req.url)
  const path = route.pathname 
  const params = qs.parse(route.query)

  res.writeHead(200, {'Content-Type': 'text/plain'});

  if (path === '/hello' && 'name' in params) {
    res.write('Hello ' + params['name'])
  } else {
    res.write('Hello anonymous')
  }
  
  res.end();
}
```

Access to your local website by different URLs like `localhost:8080/hello?name=John`.

### 8. Organize the source code in a module

Create `handles.js` and `index.js` files and reorganize the previous code like:

```javascript
// ./handles.js
// Necessary imports
module.exports = {
  serverHandle: function (req, res) {
    // ...
  } 
}
```

```javascript 
// ./index.js
const http = require('http')
const handles = require('./handles')
const server = http.createServer(handles.serverHandle);
server.listen(8080)
```

## Part 4. Integrate Nodemon

Tired of restarting your webserver after every modification of the source code? Let's fix it!

### 1. Install Nodemon

Run: 

```shell
npm i --save nodemon
# or
yarn add nodemon
# then
./node_modules/.bin/nodemon index.js
```

Now, it will restart the web server on saving the source files. There is no need to restart it manually to apply modifications of code. Just refresh the page in a browser.

### 2. Define an NPM script in `package.json`

Enrich your `scripts` in `package.json` with:

```json
"scripts": {
  ...
  "develop": "./node_modules/.bin/nodemon index.js"
}
```

And then always run when developing:

```shell
npm run develop
```

## Part 5. Create a basic application with multiple routes

Create an application with 3 routes:

1. `/` explains how `/hello` works (containing the links)
2. `/hello` takes a `name` query parameter and:
  - random names reply `hello [name]`
  - your own name replies with a short intro of yourself
3. Any other path replies a 404 code with a not found message

## Part 6. Publish your project to GitHub / GitLab

### 1. Document your project

Add a `README.md` file with a title, an introduction, running/usage instructions, and your name.

### 2. Push it to GitHub / GitLab

Commit your changes, create a **PRIVATE** repository on GitHub (or GitLab), and push it.
