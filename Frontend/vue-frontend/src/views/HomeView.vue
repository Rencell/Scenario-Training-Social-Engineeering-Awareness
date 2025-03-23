<script setup>
import { RouterView, RouterLink } from 'vue-router';


RouterView
</script>

<template>
  <main>
    <RouterLink :to="{ name: 'phishing' }"> Hello</RouterLink>
    
  </main>
</template>
