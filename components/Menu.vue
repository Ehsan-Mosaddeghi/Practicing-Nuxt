<template>
  <nav class="py-5 bg-black border-b">
    <ul class="flex justify-around items-center">
      <div class="hidden sm:inline-block">
        <NuxtLink to="/">ICON</NuxtLink>
      </div>

      <div class="flex justify-evenly w-3/5">
        <li v-for="link in links" :key="link.id">
          <NuxtLink
            :to="link.to"
            class="py-2 px-4 text-xs sm:text-sm md:text-xl rounded items-center hover:bg-gray-600 transition duration-400"
          >
            {{ link.name }}
          </NuxtLink>
        </li>
      </div>
    </ul>
  </nav>
</template>

<script setup>
const links = useState("links", () => [
  { name: "Home", to: "/", id: 1 },
  { name: "Shop", to: "/shop", id: 2 },
  { name: "Home", to: "/", id: 3 },
  { name: "Home", to: "/", id: 4 },
]);
</script>

<style scoped>
.router-link-active {
  @apply overline  decoration-double;
}
</style>
