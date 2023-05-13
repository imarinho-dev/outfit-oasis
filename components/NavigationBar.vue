<template>
  <q-toolbar
    reveal
    class="navigation flex h-[70px] justify-between bg-white uppercase text-gray-600"
    ><q-toolbar-title shrink class="logo-container p-0">
      <NuxtLink class="font-raleway text-xl font-semibold tracking-wider" to="/"
        >outfit oasis</NuxtLink
      >
    </q-toolbar-title>
    <div class="nav-links-container flex w-1/2 items-center justify-end">
      <NuxtLink class="nav-link px-[15px]" to="/about">About</NuxtLink>
      <NuxtLink class="nav-link px-[15px]" to="/signin">sign-in</NuxtLink>
    </div>
  </q-toolbar>
</template>
