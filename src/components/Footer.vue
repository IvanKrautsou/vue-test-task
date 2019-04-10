<template>
  <div>
    <div class="subfooter">
      <img class="subfooter__bird" src="../static/bird.png" alt="code"/>
      <div class="subfooter__text">“ E-commerce psd theme available ”</div>
    </div>

    <div class="footer">
      <div class="footer__left">
        <div class="footer__text">
          <p>TREKKING</p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo
          consequat.
        </div>
      </div>

      <div class="footer__right">
        <div class="footer__links">
          <a href="/page.html">credits</a> |
          <a>Privacy</a> |
          <a>about</a> |
          <a>contact</a>
        </div>
        <div class="footer__copyright">Design by gianluca cosetta</div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped lang="scss">

  @import "../styles/variables.scss";

  .footer {
    font-size: 0;
    padding: 109px 86px 116px 64px;
    background-color: #424242;

    @media (max-width: $widthMobEnd) {
      padding: 46px 30px 50px 31px;
    }

    &__left {
      vertical-align: middle;
      display: inline-block;
      width: 50%;
      font-size: 10px;
      color: rgba(255, 255, 255, 255);
      text-align: left;

      @media (max-width: $widthMobEnd) {
        width: 100%;
      }
    }

    &__text {
      line-height: 20px;
      max-width: 301px;
      text-transform: uppercase;

      p {
        font-size: 20px;
        margin: 0 0 15px;
      }
    }

    &__right {
      vertical-align: middle;
      display: inline-block;
      width: 50%;
      color: rgba(255, 255, 255, 255);
      text-align: right;

      @media (max-width: $widthMobEnd) {
        width: 100%;
        text-align: left;
        margin-top: 35px;
      }
    }

    &__links {
      margin-bottom: 10px;
      font-size: 14px;

      a {
        color: rgba(255, 255, 255, 255);
        text-transform: uppercase;
        text-decoration: none;
      }
    }

    &__copyright {
      font-size: 18px;
    }
  }

  .subfooter {
    background-color: #535253;
    padding: 24px 64px;

    @media (max-width: $widthMobEnd) {
      padding: 24px 25px;
    }

    &__bird {
      display: inline-block;
      vertical-align: middle;
      margin-right: 12px;
    }

    &__text {
      display: inline-block;
      vertical-align: middle;
      color: white;
      font-size: 16px;

      @media (max-width: $widthMobEnd) {
        font-size: 13px;
      }
    }
  }


</style>