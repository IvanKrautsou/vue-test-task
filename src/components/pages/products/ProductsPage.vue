<template>
  <div>
    <ProductsFilter @filter="sexesList = $event"/>
    <Goods
        :products="filteredProducts"
        @add-product-to-chart="addProductToChart"
    />
    <AddProduct @add-product="addProduct"/>
  </div>
</template>

<script>
  import ProductsFilter from './ProductsFilter.vue'
  import Goods from './Goods.vue'
  import AddProduct from './AddProduct.vue'
  import Vue from 'vue'
  import getProducts from  '../../../httpGetProducts.js'

  export default {
    name: "ProductsPage",
    components: {
      ProductsFilter,
      Goods,
      AddProduct
    },
    data() {
      return {
        products: [],
        sexesList: [],
      }
    },
    mounted() {

      getProducts('/api/products.json').then(result => this.products = result.data)

      // axios.get('/api/products.json')
      //   .then((response) => this.products = response.data)
      //   .catch(console.log)
    },
    computed: {
      filteredProducts() {
        return this.products.filter((product) => this.sexesList.includes(product.sex) )
      },
      selectedProducts() {
        return this.products.filter(product => product.selected);
      }
    },
    methods: {
      addProductToChart(productId) {
        const product = this.products.find(product => product.id === productId);
        Vue.set(product, 'selected', !product.selected)
      },
      addProduct(product) {
        this.products.push(product);
        console.log(this.products);

      }
    }
  }
</script>

<style scoped>

</style>