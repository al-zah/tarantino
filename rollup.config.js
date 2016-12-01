var commonjs = require('rollup-plugin-commonjs');

module.exports = {
    entry: './lib/browser.js',
    format: 'umd',
    dest: 'build/tarantino.js',
    moduleId: 'tarantino',
    moduleName: 'tarantino',
    plugins: [
        commonjs(),
    ],
};
