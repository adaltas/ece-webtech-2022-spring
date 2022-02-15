
# Lab

We will learn how to write unit tests, build REST API and a storage layer.

## Objectives

1. Part 1: test coverage for every entity
2. Part 2: persistent storage

## Before starting 🚀

You are expected to continue working on your project having completed all the tasks from the previous lab work. Don't recreate your project!

The necessary source code examples for the current lab work are provided in the **corrections repository** specific to your group. Do the following:

1. Clone the corrections repository or pull the latests updates to your computer.
2. Checkout **the appropriate Git tag** (contains `*-labN`) of the current lab work. Don't edit the files in this repository, it will be overwritten in the next module.
3. Review and understand the modifications. The application does not necessarily work correctly, it may contain commented code blocks or missing parts.
4. Manually transfer the **modifications** since the previous lab corrections.

**Note!** In case you didn't finish the previous lab work, before starting the new one you must:

1. Checkout the previous lab corrections using the appropriate Git tag (contains `*-labN-corrections`).
2. Review and understand the modifications in all the commits up to this tag.
3. Manually transfer the modifications to your project adjusting them if necessary.
4. Complete the lab work making sure you application is working correctly.

## Database model

The database model is made of 3 entities:
- `users`
- `channels`
- `messages`

The relationships are as follow:

- `channels` have 0 or more `messages`
- `channels` have 1 or more `users`
- `messages` have a single author (user)

Assuming that JS objects have sorted keys, this is a representation of the key-value storage:

```json
{
  "user:3002": {
    "username": "geoffrey",
    "password": "rki903ir09io"
  },
  "user:3920": {
    "username": "david",
    "password": "32u0fjioer"
  },
  "channel:1902": {
    "name": "Channel 1",
    "users": [
      3920, 3002
    ]
  },
  "channel:9302": {
    "name": "Channel 2",
    "users": [
      3920, 3002
    ]
  },
  "message:1902:123456789907": {
    "author": "3920",
    "content": "ping"
  },
  "message:1902:123456790000": {
    "author": "3002",
    "content": "pong"
  }
}
```

## Part 1: test coverage for every entity

The storage is currently using an in-memory `store` object located inside the `./lib/db` module. It is not persistent. A new process will create a new database.

To get started, you are provided with examples of how to create a [CRUD operation](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) on the `channels` entity.

Only the tests for the `channels` entity are implemented, and we only test channel's creation and listing.

You must implement the `users` and `messages` tests. Since the `users` tests are very similar to `channels`, start with them. Once they run, continue with the `messages` tests. You shall remove the occurrences of `.skip` inside the test folder and make sure the tests are passing by enriching the `./lib/db.js` and `./lib/app.js` modules. **It is better to start with the easiest tests.**

This exercise involves understanding [Mocha](https://mochajs.org/) and its `describe` and `it` functions. In a nutshell, `it` takes the function which is the test you are writing, and `describe` groups your tests.

## Part 2: persistent storage

We will use [LevelDB](https://github.com/google/leveldb) as our storage engine. It is a sorted key-value store. Keys and values are strings or Buffers.

For example, the `channels['1']` property of `store` could be stored with the key `channels:1` inside LevelDB. The value remains the same, but since it is an object literal, it must be [serialized](https://en.wikipedia.org/wiki/Serialization). While not being the most efficient format, JSON is a suitable format. It is easy to use in JavaScript, readable by humans, and smaller compared to XML.

> Note! In production, binary formats such as [Protocol Buffer](https://en.wikipedia.org/wiki/Protocol_Buffers) and [Apache Avro](https://en.wikipedia.org/wiki/Apache_Avro) are better.

We must now re-implement all our tests to reflect our LevelDB implementation. You will notice by going to the [LevelDB documentation](https://www.npmjs.com/package/level) that the API to manipulate keys is pretty simple. We can `put`, `get`, `delete` and `scan` keys. We provide examples as commented code in `./lib/db.js`. The code of the tests remains unchanged.

We have provided commented code to show you how. To get started, do the following operations:

- in `./lib/db.js`, comment lines 5-17, uncomment lines 3-4
- in `./lib/db.js`, comment line 24, uncomment line 25
- in `./lib/db.js`, comment lines 29-33, uncomment lines 34-48
- in `./lib/db.js`, comment line 66, uncomment line 67

It will make `channels` persistent, and all the `channels` tests will pass.
