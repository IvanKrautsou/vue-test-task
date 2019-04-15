<template>
  <div class="goods">
    <div class="goods__container">
      <Product :product="product"/>
      <Product :product="product2"/>
      <Product :product="product"/>
      <Product :product="product"/>
      <Product :product="product"/>

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
    data() {
      return {
        product: {
          name: 'T-shirt',
          price: '5,00€',
          size: 'size',
          img: '/products/T-shirt.png',
          sex: 'men',
        },
        product2: {
          name: 'Pants FORCLAZ',
          price: '30,00€',
          size: 'size',
          img: '/products/Pants.png',
          sex: 'children',
        }
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