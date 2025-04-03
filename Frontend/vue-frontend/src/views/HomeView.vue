<script setup>
import { RouterView, RouterLink } from 'vue-router';


RouterView
</script>

<template>
  <main class="flex items-center flex-col h-dvh">
    <div class="w-lg relative flex justify-center">
      <img src="/Images/Category_Background/construction.png" alt="">

      <!-- Horizontally center the text -->
      <p class="font-semibold absolute top-20 text-2xl">
        Site under construction
      </p>
    </div>

    <RouterLink :to="{ name: 'category' }" class="bg-primary rounded-md p-4 text-white font-semibold inline"> Over here
    </RouterLink>

  </main>
</template>
