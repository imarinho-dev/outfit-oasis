<template>
  <div>{{ about.title }}</div>
  <div>{{ about.imageUrl }}</div>
</template>
<script setup lang="ts">
const about: Category = {
  id: 2,
  title: "Iran",
  imageUrl: "terere",
};
</script>
