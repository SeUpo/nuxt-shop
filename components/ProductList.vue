<template>
  <v-col>
    <v-container
      class="my-4 custom-align"
    >
      <v-layout
        v-if="sortedProducts.length"
        row
        wrap
      >
        <v-flex
          v-for="(product, key) in sortedProducts"
          :key="key"
          sm6
          lg4
          xl3
        >
          <ProductCard
            :product-data="product"
            @addToCart="addToCart"
            @incrementQuantity="incrementQuantity"
            @decrementQuantity="decrementQuantity"
          />
        </v-flex>
      </v-layout>
      <v-layout v-else>
        <v-col>
          <h1>Список товаров пуст</h1>
          <v-btn
              @click="refreshProductList"
          >
          Обновить список
          </v-btn>
        </v-col>
      </v-layout >
    </v-container>
  </v-col>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'ProductList',
  components: {
    ProductCard: () => import('@/components/ProductCard'),
  },
  computed: {
    ...mapGetters({
      products: 'products',
      sortedProducts: 'sortedProducts',
      sortedOptions: 'sortedOptions',
    }),
  },
  mounted() {
    if(!this.sortedProducts.length){this.fetchProducts()}
  },
  methods: {
    ...mapActions({
      fetchProducts: 'fetchProducts',
    }),
    ...mapMutations({
      addToCart: 'addToCart',
      incrementQuantity: 'incrementQuantity',
      decrementQuantity: 'decrementQuantity',
      setSortedProducts: 'setSortedProducts',
    }),
    refreshProductList(){
      this.setSortedProducts(this.products)
    }
  },
}
</script>
