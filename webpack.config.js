const path = require('path');
console.log(path);

module.exports = {
  entry: './scripts/test.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
