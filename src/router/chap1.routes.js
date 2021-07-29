import ErrorNotFound from '@/components/ErrorNotFound';

export default {
  path: '/chap1',
  component: () => import('@/layouts/DefaultLayout.vue'),
  children: [
    // default
    { path: '', redirect: '/calculator' },
    { path: 'calculator', component: () => import('@/views/chap1/Calculator.vue'), name: 'chap1Home' },
    { path: 'product-card', component: () => import('@/views/chap1/ProductCardPage.vue'), name: 'chap1ProductCard' },
    {
      path: '*',
      component: ErrorNotFound,
    },
  ],
};
