import Vue from 'vue'
import Router from 'vue-router'
import PopularPage from '../pages/popular-page/PopularPage.vue'
import BookPage from '../pages/book-page/BookPage.vue'
import FavoritePage from '../pages/favorite-page/FavoritePage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PopularPage',
      component: PopularPage
    },
    {
      path: '/book',
      name: 'BookPage',
      component: BookPage
    },
    {
      path: '/favorite',
      name: 'FavoritePage',
      component: FavoritePage
    }
  ]
})
