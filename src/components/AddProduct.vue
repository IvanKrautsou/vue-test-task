<template>
  <div>
    <Control type="text" :placeholder="'Введите имя товара'" v-model="product.name">Имя товара: </Control>
    <Control type="text" :placeholder="'Ввёл размер товара'" v-model="product.size">Размерчик: </Control>
    <Control type="select" :selectOptions="selectOptions" v-model="product.price">Цена товара: </Control>
    <Control type="radio" :radioOptions="radioOptions" radioName="chooseSex" v-model="product.sex" >Принадлежность: </Control>

    <input type="submit" id="new-product-button" value="Добавить товар" @click="addProduct" :disabled="product.sex.length === 0">
    <div style="color: red; font-size: 19px; display: inline-block; padding-left: 10px">{{warning}}</div>
  </div>
</template>

<script>
  import Control from '../components/core/Control.vue'

  export default {
    name: "AddProduct",
    components: {
      Control
    },
    data() {
      return {
        radioOptions: ['men', 'women', 'children'],
        selectOptions: [{
            value: '1111',
            text: '1w1w1w1w1'
          }, {
            value: '2222',
            text: '2e2e2e2e2'
          }, {
            value: '3333',
            text: '3d3d3d3'
          }, {
            value: '4444',
            text: '4fr4f4f4f'
          }
        ],
        names: '',
        product: getNewProduct(),
        warning: '',
      }
    },
    methods: {
      addProduct() {
        console.log(this.product);
        if(this.product.name.length < 3 || this.product.name.length > 10) {
          this.warning = 'Имя товара должно содержать от 3 до 10 символов';
        } else {
          this.product.id = Math.floor(Math.random() * 1000);
          this.$emit('add-product', this.product);
          this.product = getNewProduct();
        }
      },
      qwer(x) {
        alert(x)
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