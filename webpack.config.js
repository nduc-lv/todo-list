const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        file: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    }
}