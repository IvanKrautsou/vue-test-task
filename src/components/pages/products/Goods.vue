<template>
  <div class="goods">
    <div class="goods__container">
      <Product
          v-for="item in products"
          :product="item"
          @add-product-to-chart="$emit('add-product-to-chart', item.id)"
      />
    </div>
  </div>
</template>

<script>
  import Product from '../../Product.vue'

  export default {
    name: "Goods",
    components: {
      Product,
    },
    props: {
      products: Array
    },
  }
</script>

<style scoped lang="scss">
  @import "../../../styles/variables.scss";
  @import "../../../styles/functions.scss";

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