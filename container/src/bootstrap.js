import {mount as productsMount} from 'products/ProductsIndex'
import {mount as cartMount} from 'cart/CartShow'
 
console.log('container')


const element = document.querySelector('#my-products')
const cartElement = document.querySelector('#my-cart')
productsMount(element)
cartMount(cartElement)
 