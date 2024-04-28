<template>
  <section class="flex justify-center items-center">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-10 gap-y-10 xl:h-80 mt-40"
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
  },
});
</script>

<style></style>
