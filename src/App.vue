<script setup>
import { ref, onMounted, computed } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import ProductCard from './components/Product/Card.vue'
import Sidebar from './components/Sidebar.vue'

const loading = ref(true)
const products = ref([])
const errorMessage = ref('')

const cart = ref([])
const favorite = ref({})
const filter = ref('')

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

function pushToFavorite(product) {
  favorite.value = product
}

function assignFilter(category) {
  filter.value = category
}


const productsByCategory = computed(() => {
  if (filter.value === '') {
    return products.value
  } else {
    return products.value.filter((product) => product.category === filter.value)
  }
}) 

</script>

<template>
  <div class="min-h-screen ">

    <Navbar />
    <Header />
    <main class="max-w-screen-lg m-auto">
      <div class="flex justify-between">
        <div>CART: {{ cart }}</div>
        <div>Favoris: {{ favorite.title }}</div>
      </div>
      <div>

        <div v-if="errorMessage" class="bg-red-500 text-center m-4 rounded-md shadow-lg text-white px-2 py-1"> {{
          errorMessage }}</div>

        <div v-if="loading">LOADING....</div>
        <div v-else>

          <div class="grid grid-cols-4 gap-4">


            <Sidebar @filterCategory="assignFilter" />

            <div class="col-span-3 grid grid-cols-3 gap-2">
              <ProductCard v-for="item in productsByCategory" :key="item.id" :product="item" @addToCart="pushToCart"
                :favoriteId="favorite.id" @addToFavorite="pushToFavorite" />
            </div>

          </div>


        </div>


      </div>

    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
