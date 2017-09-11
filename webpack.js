const log = require('debug')('porch:babel-preset-porch');

const development = process.env.NODE_ENV === 'development';

log('babel-preset-porch/webpack');
const preset = {
    presets: [
        ['es2015', { modules: false }],
        'react'
    ],
    plugins: [
        'transform-class-properties',
        'transform-object-rest-spread',
        'transform-object-assign'
    ]
};

if (development) {
    preset.plugins.push(
        'react-hot-loader/babel',
        'transform-react-jsx-source',
        'transform-react-jsx-self'
    );
}

module.exports = preset;
