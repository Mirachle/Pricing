import Vue from 'vue';
import Router from 'vue-router';
import Pricing from '@/components/Pricing';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pricing',
      component: Pricing,
    },
  ],
});
