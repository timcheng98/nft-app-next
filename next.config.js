const withImages = require('next-images')

const withTM = require('next-transpile-modules')([
  'antd-mobile',
]);

module.exports = withTM(withImages({
  eslint: {
    ignoreDuringBuilds: true
  },
  basePath: '/src',
  extends: ["airbnb-base"],
  // useFileSystemPublicRoutes: false,
  // productionBrowserSourceMaps: true,
  // 你项目中其他的 Next.js 配置
}));
