const withImages = require('next-images')

const withTM = require('next-transpile-modules')([
  'antd-mobile',
]);

module.exports = withTM(withImages({
  extends: ["airbnb-base"]
  // 你项目中其他的 Next.js 配置
}));
