multifile-config
===

[![Build Status](https://travis-ci.org/dobrakmato/multifile-config.svg?branch=master)](https://travis-ci.org/dobrakmato/multifile-config) [![codecov](https://codecov.io/gh/dobrakmato/multifile-config/branch/master/graph/badge.svg)](https://codecov.io/gh/dobrakmato/multifile-config) [![Code Climate](https://codeclimate.com/github/dobrakmato/multifile-config/badges/gpa.svg)](https://codeclimate.com/github/codeclimate/codeclimate) [![dependencies Status](https://david-dm.org/dobrakmato/multifile-config/status.svg)](https://david-dm.org/dobrakmato/multifile-config) [![devDependencies Status](https://david-dm.org/dobrakmato/multifile-config/dev-status.svg)](https://david-dm.org/dobrakmato/multifile-config?type=dev)

## Installation
	$ npm install multifile-config --save

## What does it do
Reads multiple javascript files from specified config directory and merges their exports into one object.

You can require all your configuration with one-liner:

```javascript
import loadConfig from 'multifile-config';

var config = loadConfig(path.join(__dirname, 'config'));
```

While having your configuration split to multiple files for different parts of you application (http, templating
engine, etc...) to avoid one long unreadable 900-lines long configuration file:

    src/
        config/
           http.js
            json.js
            templating.js
            redis.js
            mysql.js
        controllers/
            ...
        views/
            ...
        app.js

It's simple, small and has zero dependencies.