<template>
  <v-col
    sm="12"
    md="4"
    lg="3"
    xl="4"
  >
    <v-container
      class="custom-align"
    >
      <v-card
        min-width="260px"
        width="520px"
      >
        <v-card-title>
          <h2>Фильтры</h2>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-select
              v-model="selectedCategory"
              item-text="title"
              item-value="name"
              :items="categories"
              density="comfortable"
              label="Категория"
              outlined
              auto
              @change="SortProducts"
            ></v-select>
            <v-select
              v-model="selectedSort"
              :items="sortingOptions"
              label="Сортировать"
              outlined
              @change="SortProducts"
            ></v-select>
            <v-range-slider
              v-model="sliderValue"
              color="teal"
              single-line
              step="5"
              thumb-label="always"
              thumb-color="indigo-darken-2"
              thumb-size="10"
              ticks
              tick-size="2"
              track-color="blue-grey"
              prepend-icon="mdi-currency-rub"
              @change="SortProducts"
            ></v-range-slider>
            <v-btn
              @click="setDefault"
            >Сбросить фильтры
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </v-col>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'SideBar',
  data() {
    return {
      selectedCategory: 'all',
      sliderValue: [0, 100],
      filteredProducts: [],
      selectedSort: 'Сортировать',
      sortingOptions: [
        { text: 'По имени', value: 'name' },
        { text: 'По цене', value: 'price' },
      ],
    };
  },
  computed: {
    ...mapGetters({
      categories: 'categories',
      products: 'products'
    }),
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    ...mapActions({
      fetchCategories: 'fetchCategories',
    }),
    ...mapMutations({
      setSortedProducts: 'setSortedProducts',
    }),
    SortProducts(){
      this.filteredProducts = []
      if(this.selectedCategory !== "all") {
        this.products.forEach((product) => {
          if (product.category === this.selectedCategory) {
            this.filteredProducts.push(product)
          }
        })
      } else {
        this.filteredProducts = []
        this.filteredProducts.push(...this.products)
      }
      this.filteredProducts = this.filteredProducts.filter(product => {
        return product.price >= this.sliderValue[0] && product.price <= this.sliderValue[1];
      });

      if(this.selectedSort === "price") {
        this.filteredProducts = this.filteredProducts.sort(
          function(a, b) {
              return a.price - b.price;
          }
        )
      }
      this.setSortedProducts(this.filteredProducts)
    },
    setDefault() {
      this.selectedCategory = "all"
      this.sliderValue = [0, 100]
      this.selectedSort = "Сортировать"
      this.filteredProducts = [...this.products]
      this.setSortedProducts(this.filteredProducts)
    },
  },
}
</script>
