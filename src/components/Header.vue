<template>
  <div class="header">
    <div class="header__head">
      <img class="header__foot" src="../static/foot.png" alt="code"/>
      <div class="header__links">
        <a href="/page.html">Home</a>
        <a href="/page.html">Products</a>
        <div class="header__shopping-cart" @click="showProducts">
          <img class="header__foot" src="../static/shopping-cart.png" alt="code"/>
          <div class="header__product-counter">{{countOfProducts}}</div>
        </div>
      </div>

    </div>

    <div class="header__text">
      <div class="header__title">Our clothing , your comfort</div>
      <div class="header__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </div>

    <div class="header__arrow"></div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    props: ['selectedProducts'],
    methods: {
      showProducts() {
        console.log(this.selectedProducts);
      },
    },
    computed: {
      countOfProducts () {
        return this.selectedProducts.length || '';
      }
    },
  }
</script>

<style scoped lang="scss">

  @import "../styles/variables.scss";

  .header {
    $overlayColor: rgba(0, 0, 0, 0.3);

    padding: 40px 67px 0 64px;
    background: linear-gradient($overlayColor, $overlayColor), url(../static/phone.png);
    background-color: #437aae;
    color: white;
    background-position: center;
    background-size: cover;
    min-height: 790px;
    position: relative;

    @media (max-width: $widthMobEnd) {
      padding: 20px 15px 0 15px;
      min-height: 555px;
    }

    &__foot {
      display: inline-block;
    }

    &__links {
      display: inline-block;
      text-align: right;
      float: right;
      font-size: 18px;

      a {
        color: white;
        text-decoration: none;
        margin-right: 58px;

        @media (max-width: $widthMobEnd) {
          margin-right: 20px;
        }
      }
    }

    &__shopping-cart {
      display: inline-block;
    }

    &__product-counter {
      float: left;
      margin-top: 10px;
    }

    &__text {
      text-align: center;
      margin-top: 220px;

      @media (max-width: $widthMobEnd) {
        margin-top: 100px;
      }
    }

    &__title {
      font-size: 60px;
      margin-bottom: 18px;

      @media (max-width: $widthMobEnd) {
        font-size: 46px;
      }
    }

    &__description {
      font-size: 20px;
      display: inline-block;
      max-width: 520px;

      @media (max-width: $widthMobEnd) {
        font-size: 18px;
      }
    }

    &__arrow {
      $arrowWidth: 34px;

      width: $arrowWidth;
      height: 22px;
      background-image: url(../static/arrow.png);
      cursor: pointer;
      position: absolute;
      left: calc(50% - #{$arrowWidth/2});
      bottom: 47px;
    }
  }

</style>