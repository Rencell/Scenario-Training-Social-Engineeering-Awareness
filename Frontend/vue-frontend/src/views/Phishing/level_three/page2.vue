<template>
  <div
    class="bg-white-color h-full w-full flex justify-center overflow-auto rounded-xl"
  >
    <div class="w-4xl bg-white p-10 h-fit">
      <div class="pb-10">
        <p class="text-3xl text-black font-bold pb-2">Social Media Phishing</p>
        <p class="text-gray-400 font-secondary">Despite all the benifits of social media, hackers take advantage over it</p>
      </div>
      <!-- Appeal to Curiosity -->
      <descriptionList :heading="'Appeal to curiosity'" :subheading="'lorem2'">
        <template v-slot:image>
          <img src="/Images/Phishing/Page3/document.svg" alt="">
        </template>
        <template v-slot:description>
          hello
        </template>
        <template v-slot:examples>
        </template>
        <template v-slot:signs>
        </template>
      </descriptionList>
      <!-- 2. Fake accounts -->
      <descriptionList :heading="'Fake Account Impersonation'" :subheading="'lorem2'">
        <template v-slot:image>
          <img src="/Images/Phishing/Page3/document.svg" alt="">
        </template>
        <template v-slot:description>
          hello
        </template>
        <template v-slot:examples>
        </template>
        <template v-slot:signs>
        </template>
      </descriptionList>
      <!-- 3. Malicious Links -->
      <descriptionList :heading="'Malicious Links in Posts and Comments'" :subheading="'lorem2'">
        <template v-slot:image>
          <img src="/Images/Phishing/Page3/document.svg" alt="">
        </template>
        <template v-slot:description>
          hello
        </template>
        <template v-slot:examples>
        </template>
        <template v-slot:signs>
        </template>
      </descriptionList>
      <!-- 4. Comments Control -->
      <descriptionList :heading="'Comments Control'" :subheading="'lorem2'">
        <template v-slot:image>
          <img src="/Images/Phishing/Page3/document.svg" alt="">
        </template>
        <template v-slot:description>
          hello
        </template>
        <template v-slot:examples>
        </template>
        <template v-slot:signs>
        </template>
      </descriptionList>
      <!-- 5. Information Stealing -->
      <descriptionList :heading="'Quizzes and Surveys'" :subheading="'lorem2'">
        <template v-slot:image>
          <img src="/Images/Phishing/Page3/document.svg" alt="">
        </template>
        <template v-slot:description>
          hello
        </template>
        <template v-slot:examples>
        </template>
        <template v-slot:signs>
        </template>
      </descriptionList>

      <div class="flex justify-end pt-3">
        <BaseButton :click="componentPage.nextPage">Next</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePhishingThree } from '@/store/Phishing/phishingLevelThree/componentPage';
import BaseButton from '@/components/UI/BaseButton.vue';
import descriptionList from '@/components/Phishing/levelThree/page2/description-list.vue';
const componentPage = usePhishingThree();
</script>