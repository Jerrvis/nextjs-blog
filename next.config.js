/** @type {import('next').NextConfig} */
const withLess = require("next-with-less")

const nextConfig = withLess({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    }); // 针对 SVG 的处理规则

    return config;
  },
  reactStrictMode: false,
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: {
        "@primary-color": "#f74a49",
        "@border-radius-base": ".5em"
      }
    }
  }
})

module.exports = nextConfig
