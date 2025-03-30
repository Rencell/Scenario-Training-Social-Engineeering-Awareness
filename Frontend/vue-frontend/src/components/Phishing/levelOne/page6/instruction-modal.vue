<template>
     <dialog ref="modal" id="my_modal_1" class="modal text-gray-700">
      <div class="modal-box">
        <h3 class="text-lg font-bold">📢 Instruction!</h3>
        <img class="rounded-xl" src="/Images/Phishing/Scenario/1/check-laptop.jpg" alt="">
        <p class="py-4">Review the 5 email inboxes from Sam's device and identify the phishing emails. Once identified, click "This is a Phishing Scam" to move them to Scambox and click submit once done.</p>
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
</template>

<script setup>
import { onMounted, ref } from 'vue';


const modal = ref(null);

onMounted(() => {
  if (modal.value) {
    modal.value.showModal(); // Open modal when the component is mounted
  }
});
</script>