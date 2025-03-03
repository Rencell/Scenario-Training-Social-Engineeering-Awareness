<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- <header>
    

    <div class="wrapper">

      <nav>
        <RouterLink :to="{ name: 'home' }">Home</RouterLink>
        <RouterLink :to="{ name: 'about' }">About</RouterLink>
        <RouterLink :to="{ name: 'category' }">Category</RouterLink>
      </nav>
    </div>
  </header> -->

  <RouterView /> 
</template>

<style scoped>

</style>
