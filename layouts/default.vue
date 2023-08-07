<template>
  <v-app dark>
    <v-app-bar
      max-width="1600"
      class="mx-auto mt-10"
      app
      rounded
      absolute
    >
      <v-toolbar-title>
        <n-link
          to="/"
          class="d-flex align-stretch"
        >
          <v-icon>mdi-store</v-icon>
          <div class="hidden-sm-and-down">
            {{ title }}
          </div>
        </n-link>
      </v-toolbar-title>
      <v-spacer />
      <SearchProducts />
      <v-badge
        :content="total"
        :value="total"
        color="teal"
        offset-x="16"
        offset-y="18"
      >
        <n-link to="/cart">
          <v-btn icon>
            <v-icon>mdi-cart-outline</v-icon>
          </v-btn>
        </n-link>
      </v-badge>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'DefaultLayout',
  components: {
    SearchProducts: () => import('@/components/SearchProducts'),
  },
  data() {
    return {
      fixed: false,
      title: 'Home',
    }
  },
  computed: {
    ...mapGetters({
      cartItems: 'cartItems',
      total: 'total',
      sum: 'sum',
    }),
  },
}
</script>
