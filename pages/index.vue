<template>
  <q-layout> <DirectoryContainer :categories="categories" /> </q-layout>
</template>

<script setup>
const { categories } = useCategories();
</script>
