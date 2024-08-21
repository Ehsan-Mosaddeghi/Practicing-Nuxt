<template>
  <nav class="py-5 bg-zinc-700 border-b fixed w-full z-10">
    <ul class="flex justify-around items-center">
      <div class="hidden sm:inline-block">
        <NuxtLink to="/" class="text-white font-bold decoration-transparent"
          >Nuxt Practice</NuxtLink
        >
      </div>

      <div class="flex justify-evenly space-x-4">
        <li v-for="link in links" :key="link.id">
          <NuxtLink
            :to="link.to"
            class="py-2 px-4 text-xs sm:text-sm md:text-xl text-white rounded items-center hover:bg-gray-600 transition duration-400"
          >
            {{ link.name }}
          </NuxtLink>
        </li>
      </div>

      <div class="hidden sm:inline-block">
        <ClientOnly>
          <ColorModeSelector />
        </ClientOnly>
      </div>
    </ul>
  </nav>

  <div class="fixed flex justify-end w-full top-20 right-4 sm:hidden">
    <ClientOnly>
      <ColorModeSelector />
    </ClientOnly>
  </div>
</template>

<script setup>
const links = useState("links", () => [
  { name: "Home", to: "/", id: 1 },
  { name: "Shop", to: "/shop", id: 2 },
  { name: "About me", to: "/about", id: 3 },
  { name: "Todo", to: "/todo", id: 4 },
]);
</script>

<style scoped>
.router-link-active {
  text-decoration-style: double;
  text-decoration-line: overline;
}
</style>
