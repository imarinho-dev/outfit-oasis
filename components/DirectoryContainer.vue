<template>
  <div class="flex w-full flex-wrap justify-between">
    <CategoryItem
      v-for="(category, index) in categories"
      :category="category"
      :key="category.id"
      :class="`${index <= categories.length - 3 ? 'h-[240px]' : 'h-[380px]'}`"
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
