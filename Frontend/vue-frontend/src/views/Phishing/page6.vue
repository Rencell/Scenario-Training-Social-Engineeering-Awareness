<template>
  <div class="flex h-full w-full flex-col rounded-xl bg-[#F6F6F6] text-white pointer-events-auto">
    <div class="bg-primary rounded-tr--xl flex w-full items-center justify-between rounded-tl-xl p-3 px-8">
      <div class="flex gap-2">
        <button class="hover:bg-primary-light rounded-md hover:text-secondary p-2" @click="setCurrentPage(5)">
          <i class="bi bi-arrow-return-left"></i> Previous
        </button>
        <button class="hover:bg-primary-light rounded-md hover:text-secondary p-2" onclick="my_modal_1.showModal()">
          <i class="bi bi-info-circle-fill"></i> Instruction
        </button>
      </div>

      <div class=" flex items-center gap-2">
        <!-- <div class="hover:bg-primary-light p-2 rounded-md hover:text-secondary">&lt; Leave Scenario</div> -->
        <div v-if="isReveal" class="hover:bg-primary-light p-2 rounded-md hover:text-secondary">Try again</div>
        <div v-if="!isReveal">
          <button :disabled="!emailStore.hasScam" :class="!emailStore.hasScam ? 'bg-gray-300' : 'bg-white cursor-pointer'" onclick="my_modal_2.showModal()" class="text-primary rounded-md p-1 px-5">
            Submit
          </button>
        </div>
        <div v-else>
          <button @click="setCurrentPage(7)" class="text-primary rounded-md p-1 px-5 bg-white cursor-pointer">
            Next
          </button>

        </div>
      </div>
    </div>

    <div class="motion-preset-slide-right flex items-center gap-4 p-8 text-black">
      <div class="bg-primary w-fit rounded p-4"></div>
      There are two email phishing among the emails, your task is to find it
    </div>

    <div class="motion-preset-slide-right flex justify-center px-8">
      <div class="flex h-[400px] w-7xl rounded-md hover:text-secondary border-[0.5px] border-gray-200 shadow-md">
        <div class="flex w-2xl flex-col text-[1vw] text-black">
          <div class="text-primary flex items-center justify-center gap-8 border-b-[0.5px] border-gray-300 py-2">
            <div @click="setInboxScam(0)" class="cursor-pointer">INBOX ({{ get_true_emails.length }})</div>
            <div @click="setInboxScam(1)" class="cursor-pointer">SCAMBOX ({{ get_phishing_emails.length }})</div>
          </div>

          <div class="overflow-y-auto">
            <div v-if="inbox_scam == 1">
              <emailList v-for="(email, index) in get_phishing_emails" :key="index" v-bind="email" :RevealAnswer="isReveal" />
            </div>
            <div v-else>
              <emailList v-for="(email, index) in get_true_emails" :key="index" v-bind="email" :RevealAnswer="isReveal"/>
            </div>

          </div>
        </div>
        <div class="flex h-full w-full flex-col">
          
            <div
              class="text-sm flex items-center justify-end gap-2 bg-gray-300 p-2 text-black cursor-pointer hover:text-primary"
              >
              <div v-if="!isReveal">
                <div v-if="inbox_scam == 0 " @click="emailStore.isPhishing(emailStore.currentEmail)">
                  This is Phishing scam
                  <i class="bi bi-exclamation-circle-fill text-base text-red-500"></i>
                </div>
                <div
                  v-else
                  @click="emailStore.isNotPhishing(emailStore.currentEmail)">
                  Revert
                  <i class="bi bi-backspace-fill"></i>
                </div>
              </div>
            </div>
          

          <div v-if="emailStore.currentEmail != 999" class="grow overflow-y-auto bg-white-color">
            <emailContent></emailContent>
          </div>
        </div>
      </div>
    </div>
    <instructionModal></instructionModal>
    <dialog id="my_modal_2" class="modal text-gray-700">
      <div class="modal-box w-72">
        <h3 class="text-lg font-bold">Hello!</h3>
        <p class="py-4">Do you want to submit?</p>
        <div class="modal-action">
          <form method="dialog">
            <button class="btn me-3 bg-green-500 text-white" onclick="my_modal_3.showModal()">Yeah</button>
            <button class="btn bg-red-500  text-white">Nah</button>
          </form>
        </div>
      </div>
    </dialog>

    <dialog id="my_modal_3" class="modal text-gray-700">
      <div class="modal-box w-96">
        <h3 class="text-lg font-bold">Aww</h3>
        <p class="py-4">Among 5 emails, you've identified {{emailStore.isEqualPhishing}} over {{emailStore.listPhishing()}} phishing scam. Congratulations!</p>
        <div class="modal-action">
          <form method="dialog">
            <button class="btn bg-primary text-white" @click="isReveal = true">Close</button>
          </form>
        </div>
      </div>
    </dialog>

  </div>

</template>

<script setup>
import { computed, ref } from "vue";
import emailList from "@/components/page6/email-list.vue";
import emailContent from "@/components/page6/email-content.vue";
import instructionModal from "@/components/page6/instruction-modal.vue";
import { useComponentStore } from '@/store/phishingPages.js';
import { useEmail } from '@/store/phishingPages';

//state management
const ComponentStore = useComponentStore();
const emailStore = useEmail();

const setCurrentPage = (index) => {
  ComponentStore.setPage(index);
};

//email data filter
const email_datas = ref(emailStore.getListEmails());
const get_true_emails = computed(() => email_datas.value.filter(email => email.isScam));
const get_phishing_emails = computed(() => email_datas.value.filter(email => !email.isScam));

//togle buttons
const inbox_scam = ref(0)
const setInboxScam = (value) => {
  emailStore.setEmail(999);
  inbox_scam.value = value
}


const isReveal = ref(false);
</script>

<style scoped></style>
