var mocha = require("mocha");
var describe = mocha.describe;
var it = mocha.it;
var expect = require('chai').expect;

var loadConfig = require('../index');
var path = require("path");

describe('function loadConfig()', function () {

    var config = loadConfig(path.join(__dirname, 'config'));

    it('should contain variable from file1', function () {
        expect(config).property('file1');
        expect(config.file1.variable).to.equal(10);
    });

    it('should contain variable from file2', function () {
        expect(config).property('file2');
        expect(config.file2.variable).to.equal('test');
    });

});