<script setup>
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import ProductCard from './components/Product/Card.vue'

const loading = ref(true)
const products = ref([])
const errorMessage = ref('')

const cart = ref([])

async function fetchProducts() {
  
  try {
    const productsRawData = await fetch('https://fakestoreapi.com/products')
    const productsJson = await productsRawData.json()
    products.value = productsJson
  } catch (error) {
    errorMessage.value = "Une erreur est survenue lors du chargement de la page "
    console.error(error)
  } finally {
    loading.value = false
  }

}
onMounted(async () => {
  setTimeout(() => {
    fetchProducts()
  }, 30);
})

function pushToCart(product) {
  cart.value.push(product)
}

</script>

<template>
  <div class="min-h-screen">

    <Navbar />
    <main class="">
      <Header />
      <pre>CART : {{ cart }}</pre>
      <div>

        <div v-if="errorMessage" class="bg-red-500 text-center m-4 rounded-md shadow-lg text-white px-2 py-1"> {{
          errorMessage }}</div>

        <div v-if="loading">LOADING....</div>
        <div v-else>



          <!-- <pre v-if="products.length > 0">{{ products[0] }}</pre> -->


          <div class="grid grid-cols-3 gap-4">


            <ProductCard v-for="item in products" :key="item.id" :product="item" @addToCart="pushToCart" />

          </div>


        </div>


      </div>

    </main>
    <Footer />
  </div>
</template>

<style scoped>

</style>
