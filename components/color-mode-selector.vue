<template>
  <div class="flex items-center relative">
    <transition>
      <p class="text-green-500 absolute right-6 w-20" v-if="description">
        {{ nextMode }} mode
      </p>
    </transition>

    <UIcon
      :name="setIcon"
      @click="toggleColorMode"
      @mouseenter="description = true"
      @mouseleave="description = false"
      class="hover:bg-green-500 text-xl text-white transition duration-300 hover:cursor-pointer"
    ></UIcon>
  </div>
</template>

<script setup>
const colorMode = useColorMode();

const modes = ["light", "dark"];
const nextModeIcon = {
  light: "i-heroicons-sun",
  dark: "i-heroicons-moon",
};

const nextMode = computed(() => {
  return modes[(modes.indexOf(colorMode.preference) + 1) % modes.length];
});

const setIcon = computed(() => nextModeIcon[nextMode.value]);

const toggleColorMode = () => {
  colorMode.preference = nextMode.value;
};

const description = useState("des", () => false);
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.4s;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
