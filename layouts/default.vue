<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <!-- Header -->
      <navigation-bar />
    </q-header>

    <q-page-container>
      <slot class="pt-[25px]" />
    </q-page-container>

    <q-footer elevated>
      <!-- <Footer /> -->
    </q-footer>
  </q-layout>
</template>
