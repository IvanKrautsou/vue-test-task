<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Footer,
    Header,
  }
}

</script>


<style src="./styles/main.scss" lang="scss"></style>