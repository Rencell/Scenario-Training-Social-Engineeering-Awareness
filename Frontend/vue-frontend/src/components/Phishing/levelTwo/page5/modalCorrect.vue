<template>
  <div class="text-green-500 font-semibold">I knew you'd get it right!</div>
  <br>
  <p class="font-secondary text-black">Closing a pop-up ads is smart. Scammers often use fake offers, countdowns, and flashy buttons to trick people
    into clicking. Always think before you click—real deals don’t pressure you with urgency. Stay alert and try again!"
  </p>

  <div class="modal-action">
    <form method="dialog">
      <BaseButton :click="null">NEXT</BaseButton>
    </form>
  </div>
</template>

<script setup>

import BaseButton from '@/components/UI/BaseButton.vue';

</script>