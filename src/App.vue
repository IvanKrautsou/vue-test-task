<template>
  <div id="app">
    <Header :selectedProducts="selectedProducts"/>
    <ProductsFilter @filter="filter"/>
    <Goods :sexesList="sexesList" @add-product-to-chart="addProductToChart" :newProducts="newProducts"/>
    <AddProduct @add-product="addProduct"/>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import ProductsFilter from './components/ProductsFilter.vue'
import Goods from './components/Goods.vue'
import AddProduct from './components/AddProduct.vue'



export default {
  name: 'app',
  components: {
    Footer,
    Header,
    ProductsFilter,
    Goods,
    AddProduct
  },
  data() {
    return {
      sexesList: [],
      selectedProducts: [],
      newProducts: []
    }
  },
  methods: {
    filter(sexes) {
      this.sexesList = sexes;
    },
    addProductToChart(selectedProducts) {
      this.selectedProducts = selectedProducts;
    },
    addProduct(product) {
      this.newProducts.push(product)
    }
  },

}
</script>


<style src="./styles/main.scss" lang="scss"></style>