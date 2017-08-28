multifile-config ![build status](https://api.travis-ci.org/dobrakmato/multifile-config.svg?branch=master)
===

## Installation
	$ npm install multifile-config --save

## What does it do
Reads multiple javascript files from specified directory and merges their exports into one object.

So you can easily have folder structure with multiple configs for different
parts (http, templating engine, etc...) like:

    src/
        config/
            http.js
            json.js
            templating.js
            redis.js
            mysql.js
        controllers/
        views/
        app.js

Then you can read all configuration files with simple:

```javascript
var config = loadConfig(path.join(__dirname, 'config'));
```

It has zero dependencies and it's really small.