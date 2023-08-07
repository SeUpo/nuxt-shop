<template>
  <v-app>
    <v-main>
      <v-row>
        <SideBar />
        <ProductList />
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'Home',
  components: {
    SideBar: () => import('@/components/SideBar'),
    ProductList: () => import('@/components/ProductList'),
  },
}
</script>
