
# Lab

We are going to create our first Node.js project with Express.js.

We want to ensure our project adheres to community good practices. This include:
- using a Version Control System (VCS) such as Git
- writing a README to communicate on our project goal, API, usage and status
- generating and maintaining a complete package.json description file
- communicating comprehensive and usefull commits in Git
- maintaining a changelog file
- writing tests to backup our development process
- directory layout (eg: `bin`, `lib`, `test`)
- ...

Once we get all this setup, our new web application will start an HTTP web server with Express.js. It exposes some static routes such as the homepage as well as dynamic routes to print information relative to a given channel, or an error message if the channel does not exist. The route shall match a pattern like `/channel/{channel_id}`.

## 1. README

Update the readme to briefly present the project, we are building a Chat application. We must adjust the introduction to our audience. For example, we could present what the application will do, why we do it and the technologies we anticipate to use.

The README must also contain basic instructions on how to run the project.

## 2. Initialize the project repository

A Node.js project was initialized in the previous lab. You can start from there.

There shall be no dependencies yet declared. Rename the project to `webtech-back-end`. A script entry exist to define the `start` command. Update it to reference the `./lib/index.js`.

```json
{
  ...
  "scripts": {
    "start": "node ./lib/index.js"
  },
  ...
}
```

## 3. Mock the application

A squeleton application is provided in the **corrections** repository specific to your group. The application is created with an hardcode in-memory dataset. Import the file into your project and make the necessary adjustments.

## 4. Activate Express

Uncomment the express code and make sure to add the dependency in the `package.json` file with `npm install` or `yarn add`.

## 5. Implementation

Implement the 3 routes already in place to display the homepage, the list of channels and the details of a channel.

## 6. Refactoring

Create a new file in `./lib/db.js` and import the `db` object into it. Export 2 functions:

* `list`: return all the channels
* `get`: retrieve a channel by id

Update the express routes to use the new `db` module.
