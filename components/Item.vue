<template>
  <div
    class="border-2 border-gray-600 rounded-md w-40 md:w-60 lg:w-72 h-52 sm:h-60 md:h-80 flex flex-col items-center gap-4 sm:even:translate-y-20"
  >
    <UIcon
      name="i-heroicons-shopping-bag"
      class="text-2xl md:text-5xl lg:text-7xl mt-2 bg-green-300"
    />
    <h1 class="sm:text-xl md:text-2xl lg:text-4xl">Item's name</h1>
    <p class="md:text-2xl lg:text-2xl">about the Item:</p>
    <div class="flex space-x-2">
      <h2 class="md:text-2xl lg:text-2xl">price:</h2>
      <h2 class="md:text-2xl lg:text-2xl">356$</h2>
    </div>
    <UButton
      icon="i-heroicons-shopping-cart-16-solid"
      class="sm:p-1 text-xs sm:text-lg text-gray-700"
      >Add</UButton
    >
  </div>
</template>

<script setup></script>

<style></style>
