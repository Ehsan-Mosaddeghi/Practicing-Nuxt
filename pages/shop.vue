<template>
  <section class="flex justify-center items-center h-full">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 mt-80 sm:mt-40 xl:mt-0 xl:grid-cols-4 gap-x-10 gap-y-10 xl:h-80"
    >
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  pageTransition: {
    name: "shop",
    mode: "out-in",
  },
});
</script>
