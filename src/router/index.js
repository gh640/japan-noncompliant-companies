import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import Detail from '@/components/Detail';

Vue.use(Router);

export default new Router({
  routes: [
    // インデックスビュー
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    // 詳細ビュー
    {
      path: '/company/:id',
      name: 'Detail',
      component: Detail,
      props: true,
    },
  ],
});
