<template>
  <div class="filter">
    <div class="filter__controls">
      <Control type="checkbox" v-model="showMen">MEN</Control>
      <Control type="checkbox" :value="showWomen" @input="showWomen = $event">WOMEN</Control>
      <Control type="checkbox" v-model="showChildren">CHILDREN</Control>
    </div>

    <div class="filter__button" @click="$emit('filter', sexesList)">
      SEE CHOSEN PRODUCTS
    </div>

    <div>
      {{sexesList}}
    </div>
  </div>
</template>

<script>
  import Control from '../../core/Control.vue'


  export default {
    name: "ProductsFilter",
    components: {
      Control
    },
    data() {
      return {
        checkboxOptions: [ "men", "women", "children"],
        showMen: true,
        showWomen: true,
        showChildren: true
      }
    },
    computed: {
      sexesList() {
        let list = [];
        if (this.showMen) list.push('men');
        if (this.showWomen) list.push('women');
        if (this.showChildren) list.push('children');
        return list;
      }
    },
    watch: {
      sexesList: {
        handler(val) {
          this.$emit('filter', val);
        },
        immediate: true
      },
    },
  }
</script>

<style scoped lang="scss">

  .filter {
    background-color: #f5f6f7;
    padding: 60px 96px 64px 96px;

    @media (max-width: 900px) {
      padding: 40px 96px 31px 96px;
    }

    @media (max-width: 540px) {
      padding: 32px 24px 20px 24px;
    }

    &__controls {
      display: inline-block;
    }

    &__button {
      display: inline-block;
      background-color: #aa9b77;
      font-size: 14px;
      cursor: pointer;
      padding: 18px 10px;
      float: right;
      margin-top: -14px;
      border-radius: 4px;
      color: white;

      @media (max-width: 900px) {
        margin-top: 12px;
      }

      @media (max-width: 350px) {
        max-width: 99px;
        margin-top: 5px;
      }
    }
  }

</style>