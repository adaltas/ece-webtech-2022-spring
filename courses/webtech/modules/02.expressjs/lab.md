
# Lab

We are going to create our first Node.js project with [Express](https://expressjs.com/).

We want to ensure our project adheres to community good practices. This includes:

- using a Version Control System (VCS) such as Git
- writing a `README.md` file to communicate our project goal, API, usage, and status
- generating and maintaining a complete package.json description file
- communicating comprehensive and useful commits in Git
- maintaining a `CHANGELOG.md` file
- writing tests to back up our development process
- directory layout (eg: `bin`, `lib`, `test`)
- ...

Once we get all this setup, our new web application will start an HTTP web server with Express. It exposes some static routes such as the homepage as well as dynamic routes to print retrieved information of a channel, or an error message if the channel does not exist. The route shall match a pattern like `/channel/{channel_id}`.

## 1. README

Update the `README.md` file to briefly present the project, we are building a Chat application. We must adjust the introduction to our audience. For example, we could present what the application will do, why we do it and the technologies we anticipate use.

The `README.md` file must also contain basic instructions on how to run the project.

## 2. Initialize the project repository

A Node.js project was initialized in the previous lab. You can start from there and do the following:

- There shall be no dependencies yet declared except `nodemon`.
- Rename the project in `package.json` to `chat-back-end` and improve its description.
- Move all the `.js` files to the `./lib` folder.
- A `script` entry defines the `start` and `develop` commands. Update it to reference the `./lib/index.js`:
  ```json
  {
    ...
    "scripts": {
      "start": "node ./lib/index.js",
      "develop": "./node_modules/.bin/nodemon ./lib/index.js"
    },
    ...
  }
  ```

## 3. Mock the application

A skeleton application is provided in the **corrections** repository specific to your group. Clone it and check out the necessary Git tag.

The application is created with a hardcoded in-memory dataset. Import the `./lib/index.js` file into your project and make the necessary adjustments including removing unused JavaScript files.

## 4. Activate Express

Uncomment the Express code and make sure to add the dependency in the `package.json` file with `npm install` or `yarn add`.

## 5. Implementation

Implement the 3 routes already in place to display the homepage, the list of channels, and the details of a channel.

## 6. Refactoring

Create a new file in `./lib/db.js` and import the `db` object into it. Export 2 functions:

* `list`: return all the channels
* `get`: retrieve a channel by `id`

Update the Express routes to use the new `db` module.
