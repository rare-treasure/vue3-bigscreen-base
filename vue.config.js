// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const publicPath = './';

module.exports = {
  publicPath, // 根据你的实际情况更改这里
  productionSourceMap: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/assets/scss/_base.scss";
        `
      }
    }
  },
  pages: {
    index: {
      entry: 'src/main.ts',
      title: '大屏示例',
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear();
    svgRule
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, './src/assets/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      });

    const fileRule = config.module.rule('file');

    fileRule.uses.clear();
    fileRule
      .test(/\.svg$/)
      .exclude.add(path.resolve(__dirname, './src/assets/svg'))
      .end()
      .use('file-loader')
      .loader('file-loader');
  },
  transpileDependencies: ['element-plus/src', 'element-plus/packages'],
};
