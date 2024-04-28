<template>
  <div class="h-screen">
    <Menu />
    <slot />
  </div>
</template>

<script setup>
useHead({
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap",
      crossorigin: "",
    },
  ],
});
</script>

<style>
body {
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

body {
  @apply bg-gray-400 dark:bg-gray-900 text-gray-700 dark:text-gray-300;
}
</style>
