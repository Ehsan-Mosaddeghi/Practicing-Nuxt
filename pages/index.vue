<template>
  <section
    class="flex justify-center flex-col sm:flex-row items-center gap-20 h-full"
  >
    <img src="/bg-home.png" class="contrast-150 image w-20 sm:w-40" alt="" />

    <div>
      <h1 class="text-gray-700 dark:text-gray-400 text-3xl sm:text-7xl mb-4">
        Welcome
      </h1>
      <h2 class="text-gray-700 dark:text-gray-400 text-2xl sm:text-4xl">
        Here is my Nuxt practice site
      </h2>
    </div>
  </section>
</template>

<script setup></script>

<style>
.image {
  animation: image-animation 2s ease-in-out infinite alternate;
}

@keyframes image-animation {
  0% {
    transform: translateX(-30px);
  }

  100% {
    transform: translateX(30px);
  }
}
</style>
