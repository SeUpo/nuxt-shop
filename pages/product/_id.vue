<template>
  <v-main>
    <v-container>
      <v-row
        class="d-flex justify-space-around"
        no-gutters
      >
        <v-col
          cols="12"
          sm="4"
          lg="4"
        >
          <v-img
            max-width="400px"
            :src="product?.imageUrl"
            :alt="product?.title"
          ></v-img>
        </v-col>
        <v-col
          cols="12"
          xs="1"
          sm="5"
          md="4"
          lg="3"
          xl="2"
        >
          <v-sheet class="ma-2 pa-2 d-flex justify-center">
            <v-sheet width="230px">
              <v-card-text class="d-flex justify-space-between">
                <v-sheet>{{ product?.title }}</v-sheet>
                <v-sheet>{{ product?.price }}$</v-sheet>
              </v-card-text>
              <AddToCart :product-data="product" />
            </v-sheet>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    AddToCart: () => import('@/components/AddToCart'),
  },
  computed: {
    ...mapGetters({
      product: 'product',
    }),
  },
  mounted() {
    this.fetchProduct(this.$route.params.id)
  },
  methods: {
    ...mapActions({
      fetchProduct: 'fetchProduct',
    }),
  },
}
</script>
