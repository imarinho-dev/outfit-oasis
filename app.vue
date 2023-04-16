<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <navigation-bar />
    </q-header>

    <q-page-container>
      <NuxtPage class="pt-[25px]" />
    </q-page-container>

    <q-footer elevated>
      <!-- <Footer /> -->
    </q-footer>
  </q-layout>
</template>
<script setup lang="ts">
import "~/assets/css/main.css";
</script>
