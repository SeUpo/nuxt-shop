import { getProducts, getProduct } from '@/services/products.service'

const mutations = {
  setProduct(state, product) {
    state.product = product
  },
  setProducts(state, products) {
    state.products = products
    state.sortedProducts = products
  },
  setSortedProducts(state, sortedProducts) {
    state.sortedProducts = sortedProducts
  },
  setProductError(state, error) {
    state.productError = error
  },
}

const actions = {
  async fetchProduct({ commit }, id) {
    try {
      const product = await getProduct(id)
      commit('setProduct', product)
    } catch (err) {
      commit('setProductError', err)
    }
  },
  async fetchProducts({ commit }) {
    try {
      const products = await getProducts()
      commit('setProducts', products)
    } catch (err) {
      commit('setProductError', err)
    }
  },
}

const getters = {
  product: ({ product }) => product,
  products: ({ products }) => products,
  sortedProducts: ({ sortedProducts }) => sortedProducts,
  ProductError: ({ ProductError }) => ProductError,
}

const state = () => ({
  product: {},
  products: [],
  productError: null,
  sortedProducts: [],
})

export default {
  mutations,
  getters,
  actions,
  state,
}
