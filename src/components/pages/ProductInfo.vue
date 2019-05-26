<template>
  <div>
    <p>
      {{product}}{{this.$route.params.id}}
    </p>
    <Product :product="this.product"></Product>
  </div>
  
</template>

<script>
  import Product from '../Product.vue'
  import getProducts from  '../../httpGetProducts.js'


  export default {
    name: "ProductInfo",
    components: {
      Product
    },
    data () {
      return {
        product: {}
      }
    },
    mounted() {

      getProducts('/api/products.json')
        .then(result => this.product = result.data.find(product => product.id === +this.$route.params.id))

      // axios.get('/api/products.json')
      //   .then((response) => this.product = response.data.find(product => product.id === +this.$route.params.id))
      //   .catch(console.log)
    },
  }
</script>

<style scoped>

</style>
