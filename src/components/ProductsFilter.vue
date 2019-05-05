<template>
  <div class="filter">
    <div class="filter__controls" @click="qwer">
      <Checkbox v-model="showMen">MEN</Checkbox>
      <Checkbox :value="showWomen" @input="showWomen = $event">WOMEN</Checkbox>
      <Checkbox v-model="showChildren">CHILDREN</Checkbox>
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
  import Checkbox from '../components/FilterCheckbox.vue'

  export default {
    name: "ProductsFilter",
    components: {
      Checkbox,
    },
    data() {
      return {
        showMen: true,
        showWomen: true,
        showChildren: true
      }
    },
    methods: {
      qwer() {
        console.log(this.sexesList);
        console.log(this.showMen)
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

  .checkbox {
    $blockName: &;

    display: inline-block;
    position: relative;
    padding-left: 35px;
    padding-right: 40px;
    cursor: pointer;
    font-size: 18px;
    user-select: none;

    @media (max-width: 900px) {
      display: block;
      margin-bottom: 10px;
      padding-right: 0;
    }

    input {
      opacity: 0;
      height: 0;
      width: 0;
      display: inline-block;
    }

    &__checkmark {
      position: absolute;
      top: -2px;
      left: 0;
      height: 24px;
      width: 25px;
      background: url(../static/noSelected.png);

      &::after {
        content: "";
        position: absolute;
        display: none;
        height: 24px;
        width: 25px;
        background: url(../static/selected.png);

        @at-root #{$blockName} input:checked ~ & {
          display: block;
        }
      }
    }
  }

</style>