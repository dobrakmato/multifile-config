var fs = require('fs');
var path = require('path');

/**
 * Loads all configuration files from specified directory (or default 'config'
 * directory if no argument is specified) and returns merged configuration
 * files as single object.
 *
 * @type {String} directory - directory path to directory with configuration files
 *
 * @return {object} all configuration files merged to single object
 */
var loadConfig = function (directory) {
    var config = {};

    fs.readdirSync(directory).forEach(function (file) {
        var partialConfig = require(path.join(directory, file));

        // When transpiling files using Babel.js the exported object has a name 'default' so
        // we check if returned object is esModule and has export with name 'default' and then
        // use this export instead of object returned by require().
        if (partialConfig.hasOwnProperty('default') && partialConfig.hasOwnProperty('__esModule')) {
            partialConfig = partialConfig.default;
        }

        config = Object.assign(config, partialConfig);
    });

    return config;
};

module.exports = exports = loadConfig;