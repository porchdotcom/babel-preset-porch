const log = require('debug')('porch:babel-preset-porch');

const development = process.env.NODE_ENV === 'development';

log('babel-preset-porch/node');
const preset = {
    presets: [
        ['env', {
            targets: {
                node: 'current'
            }
        }],
        'react'
    ],
    plugins: [
        'dynamic-import-node',
        'transform-es2015-destructuring',
        'transform-es2015-parameters',
        'transform-class-properties',
        'transform-es2015-classes',
        'transform-object-rest-spread',
        'transform-object-assign'
    ]
};

if (development) {
    preset.plugins.push(
        'transform-react-jsx-source',
        'transform-react-jsx-self'
    );
}

module.exports = preset;
