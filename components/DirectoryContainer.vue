<template>
  <div class="flex w-full flex-wrap justify-between">
    <CategoryItem
      v-for="{ id, title, imageUrl } in categories"
      :id="id"
      :title="title"
      :imageUrl="imageUrl"
      :key="id"
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

const {} = toRefs(props);
</script>
