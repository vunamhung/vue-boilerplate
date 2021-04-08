import Vue from 'vue';
import Router from 'vue-router';
import { flatten } from 'ramda';

Vue.use(Router);

const routes = import.meta.globEager('./pages/**/route.js');

const router = new Router({
  mode: 'history',
  routes: flatten(Object.keys(routes).map((item) => routes[item].default)),
});

export default router;
