<template>
    <div class="text-red-500 font-semibold">Oops! That was a fake ad. Stay alert</div>
  <br>
    <p class="font-secondary text-black">Scammers often use fake offers, countdowns, and flashy buttons to trick people into clicking. Always think before you click—real deals don’t pressure you with urgency. Stay alert and try again!"</p>

    <div class="modal-action">
      <form method="dialog">
        <BaseButton :click="null">See why</BaseButton>
      </form>
    </div>
</template>

<script setup>

import BaseButton  from '@/components/UI/BaseButton.vue';

</script>