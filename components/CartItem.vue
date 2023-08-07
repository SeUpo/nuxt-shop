<template>
  <v-card
    width="-webkit-fill-available"
    class="mb-2 d-flex justify-space-between"
  >
    <v-card class="ma-2 pa-2">
      <div class="text-h6 mb-1">
        {{cartItemData.title}}
      </div>
      <div class="text-caption">
        Цена:{{cartItemData.price}}
      </div>
      <div class="text-caption">
        Количество:{{cartItemData.quantity}}
      </div>
    </v-card>
    <v-card-actions>
      <v-btn
        outlined
        class="ma-2 pa-6"
        color="red"
        @click="deleteItem"
      >
        Удалить
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    cartItemData: {
      required: true,
      type: Object,
      default() {
          return {}
      }
    },
  },
  methods: {
    deleteItem(){
        this.$emit('deleteItem', this.cartItemData._id);
    }
  }
}
</script>
