import Vue from 'vue'
import Vuex from 'vuex'
import products from './products'
import categories from './categories'
import cart from './cart'

Vue.use(Vuex)
Vue.config.devtools = true

export default () =>
  new Vuex.Store({
    modules: {
      products,
      categories,
      cart,
    },
  })
