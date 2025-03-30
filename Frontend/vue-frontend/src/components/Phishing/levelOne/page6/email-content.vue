<template>
  <div class="h-full p-4">
    <div class="flex gap-4 pb-2">
      <div
        class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-lg text-white"
      >
        J
      </div>

      <div class="flex w-full items-center justify-between">
        <div class="flex flex-col justify-center">
          <div class="flex text-sm font-medium text-gray-800">
            <p class="font-secondary" >
              {{emailContent.name}}
            </p>
            <p
              class="font-secondary text-gray-400"
              
            >
              &emsp;&lt;{{emailContent.email}}&gt;
            </p>
          </div>

          <p class="text-xs text-gray-500">to me</p>
        </div>
        <p class="text-xs text-gray-500">{{emailContent.date}}</p>
      </div>
    </div>
    <div class="bg-white h-fit w-full">
      
      <component v-if="emailContent.emailPhishing" :is="emailComponents[emailContent.emailPhishing]"></component>
      
      <div class="text-black p-7" v-if="!emailContent.emailPhishing">
        <div class="mb-5 font-semibold">Greetings Person,</div>
        {{ emailContent.body }} <a class="w-full text-blue-500 underline" :href="emailContent.link">Link</a>
        <div class="mt-5">Regards</div>
        <div class="mt-5">---</div>
        <div class="mt-5">Michael Tompson CEO</div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useEmail } from '@/store/Phishing/phishingLevelOne';
import { emailData } from '@/composables/Phishing/levelOne/pageSix/emails';
import { computed} from 'vue';
import  googleDrive  from '@/components/Phishing/levelOne/page6/Emails/googleDrive.vue'
import  gcashSite  from '@/components/Phishing/levelOne/page6/Emails/GcashSite.vue'
import  metroBank  from '@/components/Phishing/levelOne/page6/Emails/metroBank.vue'
import  grabSite  from '@/components/Phishing/levelOne/page6/Emails/GrabSite.vue'



const emailComponents = {
  googleDrive,
  gcashSite,
  metroBank,
  grabSite
}

const email = useEmail()
const emailContent = computed(()=>{ return emailData[email.currentEmail] })



</script>
