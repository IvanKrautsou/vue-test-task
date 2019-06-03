<template>
  <div>
    <h1> basket </h1>
    <input type="submit" value="Оформитить заказ">
    <Goods/>
  </div>
</template>

<script>
  import Goods from '../pages/products/Goods.vue'

  export default {
    name: "Basket",
    components: {
      Goods
    }
  }
</script>

<style scoped>

</style>