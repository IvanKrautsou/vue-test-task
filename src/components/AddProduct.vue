<template>
  <div class="add-product">
    name: <input type="text" id="new-product-name" placeholder="Введите имя товара" >
    <select name = "price">
      <option value="">Choose price</option>
      <option value="111111">test111</option>
      <option value="222222">test222</option>
      <option value="333333">test333</option>
    </select>
    size: <input type="text" id="new-product-size" placeholder="Введите имя товара" >
    img: <input type="text" id="new-product-img" placeholder="Введите имя товара" >
    <p>Choose sex</p>
    <p><input name="sex" type="radio" value="men"> men</p>
    <p><input name="sex" type="radio" value="women" checked> women</p>
    <p><input name="sex" type="radio" value="children"> children</p>
    <input type="submit" id="new-product-button" value="Отправить">
  </div>
</template>

<script>
  export default {
    name: "AddProduct"
  }
</script>

<style scoped>

</style>