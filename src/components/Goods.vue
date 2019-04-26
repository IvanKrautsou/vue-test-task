<template>
  <div class="goods">
    <div class="goods__container">
      <Product
          v-for="item in filteredProducts"
          :product="item"
          @add-product-to-chart="addProductInChart(item)"
          :selectedProducts="selectedProducts"/>
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
    props: {
      sexesList: Array,
      newProducts: Array
    },
    data() {
      return {
        selectedProducts: [],
        products,
      }
    },
    methods: {
      addProductInChart: function (product) {
        if (this.selectedProducts.indexOf(product) > -1) {
          this.selectedProducts.splice(this.selectedProducts.indexOf(product), 1)
        } else {
          this.selectedProducts.push(product);
        }
        this.$emit('add-product-to-chart', this.selectedProducts);
      }
    },
    computed: {
      filteredProducts: function () {
        return [...this.products, ...this.newProducts].filter((product) => this.sexesList.includes(product.sex));
      }
    }
  }

  const products = [{
    name: 'T-shirt',
    price: 'men',
    size: 'size',
    img: '/products/T-shirt.png',
    sex: 'men',
  }, {
    name: 'Pants FORCLAZ',
    price: 'children',
    size: 'size',
    img: '/products/Pants.png',
    sex: 'children',
  }, {
    name: 'Pants FORCLAZ',
    price: 'men',
    size: '10litri',
    img: '/products/backpack.png',
    sex: 'men',
  }, {
    name: 'T-shirt',
    price: 'women',
    size: 'size',
    img: '/products/T-shirt.png',
    sex: 'women',
  }, {
    name: 'Pants FORCLAZ',
    price: 'children',
    size: '10litri',
    img: '/products/backpack.png',
    sex: 'children',
  }]
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