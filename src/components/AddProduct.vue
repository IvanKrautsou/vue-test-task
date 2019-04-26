<template>
  <div class="add-product">
    name: <input type="text" id="new-product-name" placeholder="Введите имя товара" v-model="product.name">
    <select name = "price" v-model="product.price">
      <option value="">Choose price</option>
      <option value="111111">test111</option>
      <option value="222222">test222</option>
      <option value="333333">test333</option>
    </select>
    size: <input type="text" id="new-product-size" placeholder="Введите имя товара" v-model="product.size" >
    img: <input type="text" id="new-product-img" placeholder="товара" >
    <p>Choose sex</p>
    <p><input name="sex" type="radio" value="men" v-model="product.sex"> men</p>
    <p><input name="sex" type="radio" value="women" checked v-model="product.sex"> women</p>
    <p><input name="sex" type="radio" value="children" v-model="product.sex"> children</p>
    <input type="submit" id="new-product-button" value="Отправить" @click="addProduct">
  </div>
</template>

<script>
  export default {
    name: "AddProduct",
    data() {
      return {
        product: getNewProduct(),
      }
    },
    methods: {
      addProduct() {
        this.$emit('add-product', this.product);
        this.product = getNewProduct()
      }
    }
  }

  const getNewProduct = () => ({
    size: '',
    name: '',
    sex: 'women',
    price: ''
  })
</script>

<style scoped>

</style>