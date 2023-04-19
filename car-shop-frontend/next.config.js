/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['arbstorage.mncdn.com','cdn.webrazzi.com', 'shiftdelete.net','i.hbrcdn.com'],
  },
  env: {
    JWT_ISSUER: "cemre",
    JWT_AUDIENCE: "you",
    TOKEN_SECRET: 'token',
    EMAIL: ""
   },
  
}
const webpack = require('webpack');

module.exports = {
  
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {

        config.plugins.push(new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }))
        
        // Important: return the modified config
        return config;
    }
}
module.exports = nextConfig
