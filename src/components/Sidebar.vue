<template>
  <aside class=" col-span-1">

    <ul class="space-y-4">
      <li v-for="cat in categories" :key="cat">
        <button class="bg-gray-300 px-2 py-1" @click="emit('filterCategory',cat)">{{ cat }}</button>
      </li>
    </ul>
  </aside>
</template>

<script setup>

import { onMounted, ref } from 'vue'

const categories = ref([])

async function fetchCategories() {
  const res = await fetch('https://fakestoreapi.com/products/categories')
  categories.value = await res.json()
}

onMounted(async() => {
  fetchCategories()
})

const emit = defineEmits({
  filterCategory: (category) => category
})

</script>
