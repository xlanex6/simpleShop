<template>
  <div class="border-2 p-2 relative">
    <button class="text-3xl absolute top-2 hover:text-yellow-500 right-4" @click="emit('addToFavorite',product)" :class="favoriteId === product.id ? 'text-yellow-500' : 'text-gray-400'"
    >✭</button>

    <img :src="product.image" alt="" class="max-h-[250px] m-auto min-h-[250px] object-contain">

    <h3 class="text-cyan-600 text-2xl font-medium line-clamp-2">{{ product.title }}</h3>

    <div class="text-cyan-500">{{ product.category }}</div>

    <p class="line-clamp-4">{{ product.description }}</p>
    <div class="flex justify-between h-16">
      <p class="text-center flex-1 grid place-content-center">{{ product.price }}</p>
      <AddToCart @click="emit('addToCart', product)"/>
     </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import AddToCart from './AddToCart.vue';

defineProps({
  product: {
    type: Object,
    required:true
  },
  favoriteId: {
    type: Number,
    required: false
  }
})

const emit = defineEmits({
  addToCart: (product) => product,
  addToFavorite: (product) => product
})

</script>
