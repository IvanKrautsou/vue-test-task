<template>
  <div id="app">
    <Header :selectedProducts="selectedProducts"/>
    <ProductsFilter @filter="sexesList = $event"/>
    <Goods
        :products="filteredProducts"
        @add-product-to-chart="addProductToChart"
    />
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
// import products from './products.js'
import Vue from 'vue'
import axios from 'axios'

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
      products: [],
      sexesList: [],
    }
  },
  mounted: function () {
    axios.get('/api/products.json')
      .then((response) => this.products = response.data)
      .catch(console.log)
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


<style src="./styles/main.scss" lang="scss"></style>