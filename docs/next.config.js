'use strict'

const path = require('path')

const ROOT_PATH = path.resolve(__dirname, '..')

module.exports = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',

  webpack: (config) => {
    // Add monorepo sibling packages to includes
    config.module.rules[0].include.push(path.join(ROOT_PATH, 'color/src'))
    config.module.rules[0].include.push(path.join(ROOT_PATH, 'icons/src'))
    config.module.rules[0].include.push(path.join(ROOT_PATH, 'logos/src'))
    config.module.rules[0].include.push(path.join(ROOT_PATH, 'ui/src'))

    // Aliases
    config.resolve.alias = {
      ...config.resolve.alias,

      '@sanity/color': path.resolve(ROOT_PATH, 'color/src'),
      '@sanity/icons': path.resolve(ROOT_PATH, 'icons/src'),
      '@sanity/logos': path.join(ROOT_PATH, 'logos/src'),
      '@sanity/ui': path.resolve(ROOT_PATH, 'ui/src'),

      react: require.resolve('react'),
      'react-dom': require.resolve('react-dom'),
      'styled-components': require.resolve('styled-components'),
    }

    return config
  },
}
