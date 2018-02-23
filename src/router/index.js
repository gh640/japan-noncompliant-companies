import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';

Vue.use(Router);

export default new Router({
  routes: [
    // インデックスビュー
    {
      path: '/',
      name: 'Index',
      component: Index,
      props: true,
    },
    // 詳細ビュー
  ],
});
