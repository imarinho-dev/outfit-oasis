<template>
  <div
    class="category-container group m-[0_7.5px_15px] flex min-w-[30%] flex-auto items-center justify-center overflow-hidden border border-solid border-black first:mr-[7.5px] last:ml-[7.5px] hover:cursor-pointer"
    :class="`${id <= 3 ? 'h-[240px]' : 'h-[380px]'}`"
  >
    <div
      class="background-image h-full w-full bg-cover bg-center ease-[cubic-bezier(0.25,0.45,0.45,0.95)] group-hover:scale-110 group-hover:duration-500"
      :style="{ backgroundImage: `url(${imageUrl})` }"
    ></div>
    <div
      class="category-body-container absolute flex h-[90px] flex-col items-center justify-center border border-solid border-black bg-white p-[0_25px] opacity-70 group-hover:opacity-90"
    >
      <h2 className="font-bold m-[0_6x_0] text-2xl text-[#4a4a4a]  uppercase">
        {{ title }}
      </h2>
      <p className="text-base font-light">Shop Now</p>
    </div>
  </div>
</template>
<script setup>
const props = defineProps();

const { id, title, imageUrl } = toRefs(props);
</script>
