<template>
  <div class="flex w-full flex-wrap justify-between">
    <CategoryItem
      v-for="category in categories"
      :category="category"
      :key="category.id"
    />
  </div>
</template>
<script setup>
const props = defineProps({
  categories: {
    id: Number,
    title: String,
    imageUrl: String,
  },
});

const { categories } = toRefs(props);
</script>
