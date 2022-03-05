const path = require('path');

module.exports = {
    entry: './src/index.js',
    ouyput: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    resolve: {
        extensions: ['.js']
    }
}