<template>
     <dialog ref="modal" id="my_modal_1" class="modal text-gray-700">
      <div class="modal-box">
        <h3 class="text-lg font-bold">📢 Instruction!</h3>
        <p class="py-4">Review these 5 email inboxes and identify the 2 phishing scam. Once identified, click "This is
          Phishing Scam" to move them to Scambox and click submit once done.</p>
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