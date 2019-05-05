<template>
  <label class="filter__checkbox checkbox">
    <input type="checkbox"
           @input="$emit('input', $event.target.checked)"
           :checked="value">
    <span class="checkbox__checkmark"></span>
    <slot></slot>
  </label>
</template>

<script>
  export default {
    name: "Checkbox",
    props: {
      title: String,
      value: Boolean
    },
  }
</script>

<style scoped lang="scss">

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