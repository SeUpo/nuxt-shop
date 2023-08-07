import { getCategories } from '@/services/categories.service'

const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  },
  setCategoryError(state, error) {
    state.categoryError = error
  },
}

const actions = {
  async fetchCategories({ commit }) {
    try {
      const categories = await getCategories()
      commit('setCategories', categories)
    } catch (err) {
      commit('setCategoryError', err)
    }
  },
}

const getters = {
  categories: ({ categories }) => categories,
  categoryError: ({ categoryError }) => categoryError,
}

const state = () => ({
  categories: [],
  categoryError: null,
})

export default {
  mutations,
  getters,
  actions,
  state,
}
