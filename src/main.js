// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import path from 'path';
import Vue from 'vue';
import App from './App';
import router from './router';

import data from '../data/company_list_20170201_to_20180131.tsv';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: {
    companies: data,
  },
});
