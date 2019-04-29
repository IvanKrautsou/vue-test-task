<template>
  <div
      class="goods__product product product_main-page"
      :class="{ product_selected: product.selected }"
      @click="$emit('add-product-to-chart')"
  >
    <div class="product__size">{{product.size}}</div>
    <div class="product__name">{{product.name}}</div>
    <div class="product__price">{{product.price}}</div>
    <div class="product__img">
      <img :src="product.img">
    </div>
  </div>
</template>

<script>
  export default {
    name: "Product",
    props: {
      product: Object,
    },
  }
</script>

<style scoped lang="scss">
  @import "../styles/variables.scss";
  @import "../styles/functions.scss";

  .product {
    width: $productWidth;
    height: 378px;
    background-color: #f5f6f7;
    cursor: pointer;
    border-radius: 4px;
    vertical-align: top;
    font-size: 18px;
    text-transform: uppercase;
    position: relative;

    &_selected {
      outline: 6px #aa9b77 solid;
    }

    &_main-page {
      @media (max-width: containerWidth($productsCount: 1) - 1) {
        width: calc(100% - #{$productMobMargin * 2});
      }
    }

    &__size {
      position: absolute;
      top: 30px;
      left: 24px;
      font-size: 16px;

      &::after {
        content: "";
        position: absolute;
        height: 8px;
        width: 12px;
        margin: 5px;
        background-image: url(../static/fa-angle-down.png);
      }
    }

    &__name {
      position: absolute;
      bottom: 28px;
      left: 24px;
      font-size: 18px;
      color: #aa9b77;
    }

    &__price {
      position: absolute;
      bottom: 26px;
      right: 33px;
      font-size: 22px;
    }

    &__img {
      text-align: center;
      line-height: 378px;

      img {
        vertical-align: middle;
      }
    }
  }
</style>