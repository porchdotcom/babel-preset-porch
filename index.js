const webpackPreset = require('./webpack');
const nodePreset = require('./node');
const defaultPreset = require('./default');

module.exports = function () {
    switch (process.env.BABEL_ENV) {
    case 'webpack':
        return webpackPreset;
    case 'node':
        return nodePreset;
    default:
        return defaultPreset;
    }
};
