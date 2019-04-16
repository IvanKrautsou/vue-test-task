<template>
  <div class="goods">
    <div v-on:click="say('hi')" class="goods__container">
      <Product v-for="item in products" :product="item"/>
    </div>
  </div>
</template>

<script>
  import Product from '../components/Product.vue'

  export default {
    name: "Goods",
    components: {
      Product,
    },
    methods: {
      say: function (message) {
        alert(message)
      }
    },
    data() {
      return {
        products: [{
          name: 'T-shirt',
          price: '5,00€',
          size: 'size',
          img: '/products/T-shirt.png',
          sex: 'men',
        }, {
          name: 'Pants FORCLAZ',
          price: '30,00€',
          size: 'size',
          img: '/products/Pants.png',
          sex: 'children',
        }, {
          name: 'Pants FORCLAZ',
          price: '60,00€',
          size: '10litri',
          img: '/products/backpack.png',
          sex: 'men',
        }, {
          name: 'T-shirt',
          price: '5,00€',
          size: 'size',
          img: '/products/T-shirt.png',
          sex: 'women',
        }, {
          name: 'Pants FORCLAZ',
          price: '60,00€',
          size: '10litri',
          img: '/products/backpack.png',
          sex: 'children',
        }]
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../styles/variables.scss";
  @import "../styles/functions.scss";

  .goods {
    padding: 30px 0;

    &__container {
      font-size: 0;
      margin: auto;
      max-width: containerWidth($productsCount: 3);

      @media (max-width: containerWidth($productsCount: 3) - 1) {
        max-width: containerWidth($productsCount: 2);
      }

      @media (max-width: containerWidth($productsCount: 2) - 1) {
        max-width: containerWidth($productsCount: 1);
      }
    }

    &__product {
      display: inline-block;
      margin: $productMargin;

      @media (max-width: containerWidth($productsCount: 1) - 1) {
        margin: $productMobMargin;
      }
    }
  }

</style>