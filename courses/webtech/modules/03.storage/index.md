---
duration: 3 hours
---

# Databases, storage, and unit testing

* RDBMS (basis for SQL): MySQL, PostgreSQL, Hive, Oracle
* NoSQL:
  * Filesystems: posix and object storage
  * Documents store: MongoDB, ElasticSearch
  * Key/value and sorted key/value stores: LevelDB
  * Column families: HBase, Cassandra
  * Graph DBs: JanusGraph (ex-TitanDB), Neo4J

## LevelDB

* In-memory key-value store embedded in Node.js
* Open-source
* Embeddable, C, and JS versions
* Originally written by Google
* [GaiHub page](https://github.com/google/leveldb)

## Why LevelDB for our project?

* It’s blazing fast
* In memory & backed by the file system
* Keys are ordered: suitable for time series such as messages and metrics
* Data compression with [Snappy](https://en.wikipedia.org/wiki/Snappy_(compression))
* Embedded in the applications, nothing else to set up and manage

## Some limitations

* Not a SQL database
* Only a single process at a time

## Let’s setup

* Dependencies installation
  ```shell
  npm install --save level
  ```

## Use the DB

To open

```javascript
const level = require('level')
const db = level('./path/to/db')
```

## Use the DB

To write

```javascript
db.put(key, value, (err) => {
  if(err) {...}
})
```

To read

```javascript
db.get(key, (err, value) => {
  if(err) {...}
})
```

## Write keys

* One by one? Too heavy!
* Use streaming:

```javascript
// Write
import WriteStream from 'level-ws'
const ws = WriteStream(db);

ws.on('error', function (err) {
  console.log('Oh my!', err)
})
ws.on('close', function () {
  console.log('Stream closed')
})
ws.write({ key: 'occupation', value: 'Clown' })
ws.end()
```

## Read keys

* One by one? Too heavy!
* Use streaming:

```javascript
// Read
const rs = db.createReadStream()
  .on('data', function (data) {
    console.log(data.key, '=', data.value)
  })
  .on('error', function (err) {
    console.log('Oh my!', err)
  })
  .on('close', function () {
    console.log('Stream closed')
  })
  .on('end', function () {
    console.log('Stream ended')
  })
```

## Unit test

* Test a piece of code that can be logically isolated in a system
* At its core, it is just a function that is scheduled by the testing library
* Functions can be grouped together, filtered, and skipped

## Assertion

* Function must succeed to pass or throw an error to fail
* An assertion library is handy to check valid information
