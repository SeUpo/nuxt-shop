<template>
  <v-card
    max-width="260px"
    class="mb-6"
  >
    <n-link class="product-card-content" :to="'/product/' + productData._id">
      <v-img
        max-width="260px"
        max-height="235px"
        :src="productData.imageUrl"
        :alt="productData.title"
      ></v-img>
      <v-card-text class="d-flex justify-space-between">
        <v-sheet>{{ productData.title }}</v-sheet>
        <v-sheet>{{ productData.price }}$</v-sheet>
      </v-card-text>
    </n-link>
    <AddToCart
      :product-data="productData"
    />
  </v-card>
</template>

<script>
export default {
  name: 'ProductCard',
  components: {
    AddToCart: () => import('@/components/AddToCart'),
  },
  props: {
    productData: {
      required: true,
      type: Object,
      default() {
          return {}
      }
    }
  },
}
</script>
