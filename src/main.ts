import { createApp } from 'vue';
import 'normalize.css'
import { ElButton, ElForm, ElFormItem, ElInput } from 'element-plus';

import App from './App.vue';
import router from './router';
import store from './store';

import './icons' // icon

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput
]

const app = createApp(App)

components.forEach(component => {
  app.use(component)
})

app.use(store).use(router).mount('#app');
