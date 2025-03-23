<template>
  <div class="w-full h-full bg-[#F6F6F6] flex flex-col text-black rounded-xl">


    <div class="flex justify-between ps-20 pe-20 pt-10">
      <div class="text-3xl font-secondary font-extrabold">Learn to spot Phishing Tactics</div>

      <div class="flex gap-2">
        <button class="bg-primary p-1 w-24 text-white rounded text-center" @click="setCurrentPage(2)">
          Previous
        </button>
        <button class="bg-primary p-1 w-24 text-white rounded text-center" @click="setCurrentPage(4)">
          Next
        </button>
      </div>
    </div>
    <br /><br />
    <div class="px-20 pb-20 overflow-y-scroll">
      <descriptionList :heading="'Sense of Urgency'" :subheading="'You have 24 hours or your account will be locked'">

        <template v-slot:image>
          <img class="w-fit" src="/Images/Phishing/Page3/timer.svg" alt="" />
        </template>
        <template v-slot:examples>
          <descriptionExamples :index="1"
            :example="'Password expiration is popular; typically, it has a link that will give you a prompt to click the link to update your password.'"
            :image="'Images/Phishing/Page3/Examples/SenseUrgency/phishing-attack-email-example.png'">

          </descriptionExamples>
          <descriptionExamples :index="2"
            :example="'Sometimes a scam actor uses a fake limited offer so the victim becomes excited with a reward that may lead to an impulse click.'"
            :image="'Images/Phishing/Page3/Examples/SenseUrgency/RewardScam.jpeg'">
          </descriptionExamples>
        </template>

        <template v-slot:signs>
          <ul class="list-disc text-sm text-gray-700">
            <li>Urgent words such as "Now", "Hurry", "This last for minutes", "Immediately".</li>
            <li>Usage of password change or bank because it will put pressure on the victim.</li>
          </ul>
        </template>

      </descriptionList>

      <descriptionList :heading="'Good-to-be-true Rewards'" :subheading="`Congrats! You’re rich! (Or maybe not...)`">
        <template v-slot:image>
          <img class="w-fit" src="/Images/Phishing/Page3/fireworks.svg" alt="" />
        </template>


      </descriptionList>
      <descriptionList :heading="'Poor spelling and grammar'" :subheading="'Yuo lucky winner! Act fast bfore expire!'">
        <template v-slot:image>
          <img class="w-fit" src="/Images/Phishing/Page3/newspaper.svg" alt="" />
        </template>
      </descriptionList>
      <descriptionList :heading="'Common greetings'" :subheading="'Did you just call me Sir, and not in my name?!'">
        <template v-slot:image>
          <img class="w-fit" src="/Images/Phishing/Page3/professional.svg" alt="" />
        </template>
      </descriptionList>
      <descriptionList :heading="'Different Link'" :subheading="'facebook.help.com seems legit to me hmm...'">
        <template v-slot:image>
          <img class="w-fit" src="/Images/Phishing/Page3/link.svg" alt="" />
        </template>

      </descriptionList>
      <descriptionList :heading="'Unusual Request'" :subheading="'world'">
        <template v-slot:image>
          <img class="w-fit" src="/Images/Phishing/Page3/key.svg" alt="" />
        </template>
      </descriptionList>
      <descriptionList :heading="'Suspicious Attachment'" :subheading="'world'">
        <template v-slot:image>
          <img class="w-fit" src="/Images/Phishing/Page3/document.svg" alt="" />
        </template>
      </descriptionList>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import descriptionList from "@/components/page3/description-list.vue";
import descriptionExamples from "@/components/page3/description-examples.vue";
//store
import { useComponentStore } from '@/store/phishingPages.js';

const ComponentStore = useComponentStore();

const setCurrentPage = (index) => {
  ComponentStore.setPage(index);
};


</script>

<style scoped></style>
