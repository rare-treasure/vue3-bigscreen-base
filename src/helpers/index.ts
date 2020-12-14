import { App } from 'vue';
import { uniqueId } from 'lodash-es';
import $echarts from 'echarts';

import './svg-icon';

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    uniqueId: typeof uniqueId;
    $echarts: typeof $echarts;
    log: typeof console.log;
  }
}

export default {
  install(app: App) {
    app.config.globalProperties.$echarts = $echarts;
    app.config.globalProperties.log = console.log;
    app.config.globalProperties.uniqueId = uniqueId;
  }
}
