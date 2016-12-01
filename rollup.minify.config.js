var uglify = require('rollup-plugin-uglify');
var config = require('./rollup.config');

config.plugins.push(uglify());
config.dest = 'build/tarantino.min.js';

module.exports = config;
