<template>
  <div >
    <slot></slot>
    <template v-for="item in options" >
      <input :name="name"
             type="radio"
             :value="item"
             :id="item"
             :checked="item === value"
             @input="$emit('input', $event.target.value)">
      <label :for="item">{{item}}</label>
    </template>
  </div>
</template>

<script>
  export default {
    name: "RadioButton",
    props: {
      options: Array,
      sex: String,
      name: String,
      value: String
    }
  }
</script>

<style scoped>

</style>