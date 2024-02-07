import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3Toasity from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import { initFlowbite } from 'flowbite';


router.afterEach(() => {
  initFlowbite();
});


const app = createApp(App)

app.use(Vue3Toasity, {
  autoClose: 2000,
  style: {
      opacity: '1',
      userSelect: 'initial',
  },
})

app.use(router)

app.mount('#app')
