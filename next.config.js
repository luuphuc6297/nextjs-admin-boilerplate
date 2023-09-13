/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
    '@fullcalendar/common',
    '@fullcalendar/react',
    '@fullcalendar/daygrid',
    '@fullcalendar/list',
    '@fullcalendar/timegrid'
])

module.exports = withTM({
    trailingSlash: true,
    reactStrictMode: false,
    experimental: {
        esmExternals: false
    },
    basePath: '',
    webpack: config => {
        config.resolve.alias = {
            ...config.resolve.alias,
            apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision')
        }

        return config
    }
});
