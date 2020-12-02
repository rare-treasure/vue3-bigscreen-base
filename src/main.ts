import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import components from '@/components'
import helpers from './helpers';
import tooltip from '@/directives/tooltip';

import 'reset-css';

const app = createApp(App);
export default app;

app
  .use(router)
  .use(components)
  .use(helpers)
  .directive('tooltip', tooltip)
  .mount('#app');

app.config.performance = process.env.NODE_ENV !== 'production';
