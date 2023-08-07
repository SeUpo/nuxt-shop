<template>
  <v-form
    ref="entryForm"
    class="pt-4 d-flex align-stretch"
    @submit.prevent="searchByName"
  >
    <v-text-field
      v-model="searchValue"
      class="pt-2"
      color="teal"
    ></v-text-field>
    <v-btn
      type="submit"
      icon
    >
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-form>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'SearchProducts',
  data(){
    return {
      searchValue:'',
      filteredProducts: [],
    }
  },
  computed: {
    ...mapGetters({
      products: 'products',
    }),
  },
  methods:{
    ...mapMutations({
      setSortedProducts: 'setSortedProducts',
    }),
    searchByName() {
      const obj = this.products;
      this.filteredProducts = [];
      this.searchValue = this.searchValue.toLowerCase().trim()
      const searchRequest = this.searchValue;
      for (const key in obj) {
        const el = obj[key]
        if (el.title.toLowerCase().includes(searchRequest) !== false)
        this.filteredProducts.push(el);
      }
      this.setSortedProducts(this.filteredProducts)
      if (this.$nuxt.$route.path !== '/'){
        this.$router.push('/')
      }
      this.searchValue = ''
    },
  }

}
</script>
