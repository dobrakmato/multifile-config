/**
 * Loads all configuration files from specified directory (or default 'config'
 * directory if no argument is specified) and returns merged configuration
 * files as single object.
 *
 * @type {String} directory - directory path to directory with configuration files
 *
 * @return {any} all configuration files merged to single object
 */
declare function loadConfig(directory: string): any;

export = loadConfig;
