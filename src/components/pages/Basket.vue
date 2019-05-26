<template>
  <div>
    <h1> basket </h1>
    <input type="submit" value="Оформитить заказ">
    <div style="color: red; font-size: 19px; display: inline-block; padding-left: 10px">dzrgzdgzrgzdrgdzg</div>

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