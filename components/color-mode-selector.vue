<template>
  <div>
    <UIcon
      :name="setIcon"
      @click="toggleColorMode"
      class="hover:bg-green-500 text-xl text-white transition duration-300 hover:cursor-pointer"
    ></UIcon>
  </div>
</template>

<script setup>
const colorMode = useColorMode();

const modes = ["light", "dark"];
const nextModeIcon = {
  light: "i-heroicons-light-bulb",
  dark: "i-heroicons-moon",
};

const nextMode = computed(() => {
  return modes[(modes.indexOf(colorMode.preference) + 1) % modes.length];
});

const setIcon = computed(() => nextModeIcon[nextMode.value]);

const toggleColorMode = () => {
  colorMode.preference = nextMode.value;
};
</script>

<style></style>
