<template>
  <div class="filter">
    <div class="filter__controls">
      <label class="filter__checkbox checkbox">
        <input id="filter-checkbox-men" type="checkbox" checked="checked" value="men" v-model="sexesList">
        <span class="checkbox__checkmark"></span>
        MEN
      </label>

      <label class="filter__checkbox checkbox">
        <input id="filter-checkbox-women" type="checkbox" checked="checked" value="women" v-model="sexesList">
        <span class="checkbox__checkmark"></span>
        WOMEN
      </label>

      <label class="filter__checkbox checkbox">
        <input id="filter-checkbox-children" type="checkbox" checked="checked" value="children" v-model="sexesList">
        <span class="checkbox__checkmark"></span>
        CHILDREN
      </label>
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
  export default {
    name: "ProductsFilter",
    data() {
      return {
        sexesList: ["women", "men", "children"]
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