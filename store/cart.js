import {set} from 'vue'
const mutations = {
  addToCart(state, product) {
    state.cartItems.push(product)
    product.quantity = 1
  },
  incrementQuantity(state, index) {
    const itemIndex = state.cartItems.findIndex((item) => item._id === index)
    const updatedItem = { ...state.cartItems[itemIndex] }
    updatedItem.quantity++
    set(state.cartItems, itemIndex, updatedItem)
  },
  decrementQuantity(state, index) {
    const itemIndex = state.cartItems.findIndex((item) => item._id === index)
    const updatedItem = { ...state.cartItems[itemIndex] }
    updatedItem.quantity--

    if (updatedItem.quantity <= 0) {
      state.cartItems.splice(itemIndex, 1)
    } else {
      set(state.cartItems, itemIndex, updatedItem)
    }
  },
  deleteItem(state, index) {
    state.cartItems.splice(
      state.cartItems.findIndex((item) => item._id === index),
      1
    )
  },
}

const getters = {
  cartItems: ({ cartItems }) => cartItems,
  total: ({ cartItems }) => cartItems.length,
  sum: ({ cartItems }) =>
    cartItems
      .map((item) => item.price * item.quantity)
      .reduce((sum, current) => sum + current, 0),
}

const state = () => ({
  cartItems: [],
})

export default {
  mutations,
  getters,
  state,
}
