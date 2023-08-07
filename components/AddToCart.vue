<template>
  <v-card class="pb-2 text-center">
    <v-item-group v-if="!quantity">
      <v-btn
        variant="text"
        color="teal"
        @click="addToCart(productData)"
      >
        Добавить в корзину
      </v-btn>
    </v-item-group>
    <v-item-group v-else>
      <n-link
        :to="`/cart`"
        class="anchor-teal"
      >
        В корзине
      </n-link>
      <v-btn
        class="custom-btn"
        @click="decrementQuantity(productData._id)"
        >-</v-btn
      >
      <span
        variant="outlined"
        mx-5
        >{{ quantity }}</span
      >
      <v-btn
        class="custom-btn"
        @click="incrementQuantity(productData._id)"
        >+</v-btn
      >
    </v-item-group>
  </v-card>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'AddToCard',
  props: {
    productData: {
      required: true,
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    ...mapGetters({
      cartItems: 'cartItems',
    }),
    quantity() {
      const cartItem = this.cartItems.find(
        (item) => item._id === this.productData._id
      )
      return cartItem ? cartItem.quantity : 0
    },
  },
  methods: {
    ...mapMutations({
      addToCart: 'addToCart',
      incrementQuantity: 'incrementQuantity',
      decrementQuantity: 'decrementQuantity',
    }),
  },
}
</script>
