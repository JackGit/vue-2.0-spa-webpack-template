import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'components/pages/Home.vue'
import ShoppingCart from 'components/pages/ShoppingCart.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: Home
    /*
    component: resolve => {
      require.ensure(['components/post/PostList.vue'], () => {
        resolve(require('components/post/PostList.vue'));
      }, 'post-list');
    }
    */
  }, {
    path: '/shopping',
    name: 'shopping',
    component: ShoppingCart
  }]
})
