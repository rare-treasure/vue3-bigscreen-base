import { upperFirst, camelCase } from "lodash-es";
import { App } from "vue";
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import VAxios from 'v-axios';
import axios from '@/api/request';

// 自动注册组件
export function autoRegister(components: __WebpackModuleApi.RequireContext, app: App) {
  components.keys().forEach((fileName) => {
    const config = components(fileName);
    try {
      const componentName = upperFirst(camelCase(config.default.name));

      console.log(componentName)

      if (componentName) {
        app.component(componentName, config.default || config);
      } else {
        app.component(config.default || config);
      }
    } catch (e) {
      console.error(e);
    }
  });
}

export default {
  install(app: App) {
    // 自动引入部分组件（不是以文件夹形式存在的）
    const requireFileComponent = require.context(
      // 其组件目录的相对路径
      "@/components",
      // 是否查询其子目录
      false,
      // 匹配基础组件文件名的正则表达式
      /.vue$/
    );

    const requireFolderComponent = require.context("@/components/", true, /\/.*?\/.*?tsx?$/);

    autoRegister(requireFolderComponent, app);
    autoRegister(requireFileComponent, app);

    app
      .use(ElementPlus)
      .use(VAxios, axios);
  },
};

