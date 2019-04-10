<template>
  <div id="app">
    <Header/>
    <ProductsFilter/>
    <Goods/>
    <AddProduct/>
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
  }
}
</script>


<style src="./styles/main.scss" lang="scss"></style>