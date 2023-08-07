<template>
  <v-container>
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="8"
      >
        <div
          v-if="total"
          class="d-flex align-center flex-column"
        >
          <div>Корзина: {{ total }}</div>
          <CartItem
            v-for="(item, index) in cartItems"
            :key="index"
            :cart-item-data="item"
            @deleteItem="deleteItem"
          />
        </div>
        <div
          v-else
          class="d-flex align-center flex-column"
        >
          <h2>Корзина пуста</h2>
        </div>
      </v-col>
      <v-col
        cols="12"
        sm="4"
      >
        <v-sheet class="ma-2 pa-2">
          <v-card class="ma-2 pa-2 d-flex justify-space-between">
            <p class="pt-2">Сумма: {{ sum }}</p>
            <v-btn
              color="teal"
            >Купить</v-btn>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'UserCart',
  components: {
    CartItem: () => import('@/components/CartItem'),
  },
  computed: {
    ...mapGetters({
      cartItems: 'cartItems',
      total: 'total',
      sum: 'sum',
    }),
  },
  methods: {
    ...mapMutations({
      deleteItem: 'deleteItem',
    }),
  },
}
</script>
