// This file isn't transplanted, so must use CommonJS and ES5

// Register babel to transpile befor our tests run
require('babel-register')();

// Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {};
