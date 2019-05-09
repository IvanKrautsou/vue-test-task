<template>
  <div>
    <slot></slot><input type="text" :value="value" :placeholder="placeholder" @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
  export default {
    name: "InputText",
    props: {
      placeholder: String,
      value: String
    },
  }
</script>

<style scoped>

</style>