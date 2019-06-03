<template>
  <div>
    <Control type="text" :placeholder="'Введите имя товара'" v-model="product.name">Имя товара: </Control>
    <Control type="text" :placeholder="'Ввёл размер товара'" v-model="product.size">Размер: </Control>
    <Control type="select" :selectOptions="selectOptions" v-model="product.price">Цена товара: </Control>
    <Control type="radio" :radioOptions="radioOptions" radioName="chooseSex" v-model="product.sex" >Пол: </Control>

    <input type="submit" id="new-product-button" value="Добавить товар" @click="addProduct" :disabled="product.sex.length === 0">
    <div style="color: red; font-size: 19px; display: inline-block; padding-left: 10px">{{warning}}</div>
  </div>
</template>

<script>
  import Control from '../../core/Control.vue'

  export default {
    name: "AddProduct",
    components: {
      Control
    },
    data() {
      return {
        radioOptions: ['men', 'women', 'children'],
        selectOptions: [{
            value: '100',
            text: '133'
          }, {
            value: '200',
            text: '233'
          }, {
            value: '300',
            text: '333'
          }, {
            value: '400',
            text: '444'
          }
        ],
        names: '',
        product: getNewProduct(),
        warning: '',
      }
    },
    methods: {
      addProduct() {
        if(this.product.name.length < 3 || this.product.name.length > 10) {
          this.warning = 'Имя товара должно содержать от 3 до 10 символов';
        } else {
          this.product.id = Math.floor(Math.random() * 1000);
          this.$emit('add-product', this.product);
          this.product = getNewProduct();
        }
      }
    }
  }

  const getNewProduct = () => ({
    size: '',
    name: '',
    sex: '',
    price: '',
  })
</script>

<style scoped>

</style>