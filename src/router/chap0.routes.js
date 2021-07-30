import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Home from '@/views/chap0/Home.vue';
export default {
  // home
  path: '',
  component: DefaultLayout,
  children: [{ path: '', component: Home, name: 'Home' }],
};
