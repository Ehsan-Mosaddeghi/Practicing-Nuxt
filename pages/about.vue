<template>
  <section
    class="h-full flex flex-col justify-center items-center gap-16 lg:gap-10"
  >
    <div class="mx-4 space-y-4">
      <h1 class="text-2xl sm:text-3xl md:text-4xl">My name is Ehsan</h1>
      <p class="text-base sm:text-lg">
        I'm 19, and I love playing games, reading books, watching some movies in
        my free times
      </p>
      <h2 class="text-base sm:text-lg">If you wanna know more about me</h2>
      <h2 class="flex items-center gap-1 sm:text-lg">
        <UIcon name="i-heroicons-arrow-down-solid" />
        My social media account
        <UIcon name="i-heroicons-arrow-down-solid" />
      </h2>
      <div>
        <SocialMediaIcons />
      </div>
    </div>

    <div class="mx-4">
      <div class="flex justify-center">
        <img src="/bg-about.png" alt="" class="w-48 md:w-60 contrast-150" />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style></style>
