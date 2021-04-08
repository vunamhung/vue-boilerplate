import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import './styles';

const app = new Vue({ router, render: (h) => h(App) });
app.$mount('#app');
