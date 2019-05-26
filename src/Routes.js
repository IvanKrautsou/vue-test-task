import Basket from './components/pages/Basket.vue'
import ProductsPage from './components/pages/products/ProductsPage.vue'
import ProductInfo from './components/pages/ProductInfo.vue'

export default [
  {path: '/basket', component: Basket},
  {path: '/', component: ProductsPage},
  {path: '/product/:id', name: 'product', component: ProductInfo}

];