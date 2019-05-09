<template>
  <div>
    <slot></slot>
    <select @input="$emit('input', $event.target.value)" :value="value">
      <option v-for="item in options" :value="item.value">{{item.text}}</option>
    </select>
  </div>
  
</template>

<script>
  export default {
    name: "Select",
    props: {
      options: Array,
      value: String
    }
  }
</script>

<style scoped>

</style>