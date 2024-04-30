<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.shop-enter-active,
.shop-leave-active {
  transition: all 0.4s;
}
.shop-enter-from,
.shop-leave-to {
  opacity: 0;
  transform: translateY(-3rem);
}
</style>
