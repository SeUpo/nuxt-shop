<template>
  <v-card
    max-width="260px"
    class="mb-6"
  >
    <n-link class="product-card-content" :to="'/product/' + productData._id">
      <v-sheet
        v-show="!isLoaded"
          max-width="260px"
          max-height="235px"
      >
        <v-skeleton-loader
          class="mx-auto"
          type="image"
        ></v-skeleton-loader>
      </v-sheet>
      <v-img
        v-show="onImgLoad"
        @load="onImgLoad"
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
  data() {
    return {
      isLoaded: false,
    }
  },
  methods: {
    onImgLoad() {
      this.isLoaded = true
    },
  },
}
</script>