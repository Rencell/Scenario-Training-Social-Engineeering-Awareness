<template>
  <div class="w-full h-full bg-[#F6F6F6] flex flex-col text-black rounded-xl">


    <div class="flex justify-between ps-20 pe-20 pt-10">
      <div class="text-3xl font-secondary font-extrabold">Learn to spot Phishing Tactics</div>

      <div class="flex gap-2 text-white">
        <BaseButton :click="ComponentStore.previousPage">
          PREVIOUS
        </BaseButton>
        <BaseButton :click="ComponentStore.nextPage">
          NEXT
        </BaseButton>
      </div>
    </div>
    <br />
    <br />
    <div class="px-20 pb-20 overflow-y-scroll">

      <!-- 1 -->
      <descriptionList :heading="'Sense of Urgency'" :subheading="'You have 24 hours or your account will be locked'">
        <template v-slot:description>
          Most phishing attacks try to give sense of urgency to victim, seemingly
          time-sensitive calls to action. The aim is to make victim feel as if
          they’re missing out on an urgent offer or reward, or nervous about the
          threat of punishment.
        </template>
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
      <!-- 2 -->
      <descriptionList :heading="'Good-to-be-true Rewards'" :subheading="`Congrats! You’re rich! (Or maybe not...)`">
        <template v-slot:image>
          <img class="w-fit" src="/Images/Phishing/Page3/fireworks.svg" alt="" />
        </template>
        <template v-slot:description>
          Phishing scams entice victims with good to be true offers like large cash prizes, or amazing perks. The aim is
          to trick victims to provide personal information or to click malicious links making them believe they have won
          a huge reward that requires immediate action to claim.
        </template>
        <template v-slot:examples>
          <descriptionExamples :index="1"
            :example="'Scammers will often use fake gift cards or grand prizes claiming that the victim won the exclusive reward. This will urge the victim to click a link to claim exploiting their excitement.'"
            :image="'Images/Phishing/Page3/Examples/goodToBeTrue/example1.webp'">

          </descriptionExamples>
          <descriptionExamples :index="2"
            :example="'Sometimes scammer may claim you won a free vacation package or a free trip to a luxury destination but unfortunately, clicking a link to claim the prize, they may be asked to provide personal details leading to fraud.'"
            :image="'Images/Phishing/Page3/Examples/goodToBeTrue/example2.png'">
          </descriptionExamples>
        </template>
        <template v-slot:signs>
          <ul class="list-disc text-sm text-gray-700">
            <li>You receive a prize notification even without signing up for anything.</li>
            <li>The message pressure you to act faster or you will lose the reward.</li>
          </ul>
        </template>

      </descriptionList>
      <!-- 3 -->
      <descriptionList :heading="'Poor spelling and grammar'" :subheading="'Yuo lucky winner! Act fast bfore expire!'">
        <template v-slot:image>
          <img class="w-fit" src="/Images/Phishing/Page3/newspaper.svg" alt="" />
        </template>
        <template v-slot:description>
          Scams or any fraudulent messages often contain poor spelling, grammatical errors or unusual phrasings which is
          a result of lack of credibility. Unlike scammers, legitimate sources avoid such errors and usually maintain
          clear and professional communication.
        </template>
        <template v-slot:examples>
          <descriptionExamples :index="1"
            :example="`Scammers will often send emails or text messages with poor spelling and grammar, such as 'Your acount has been compromised! Pls verify imediately to restore access.'`"
            :image="'Images/Phishing/Page3/Examples/grammarSpelling/example1.png'">

          </descriptionExamples>
          <descriptionExamples :index="2"
            :example='`Sometimes, attackers will use a fake bank alert that says "Dear valued costumer, your acount has been suspended. Click linbk to restore acess." to steal your personal bank details.`'
            :image="'Images/Phishing/Page3/Examples/grammarSpelling/example2.png'">
          </descriptionExamples>
        </template>
        <template v-slot:signs>
          <ul class="list-disc text-sm text-gray-700">
            <li>Messages include words that are spelled wrongly and with awkward grammar.</li>
            <li>Often associated with malicious links with an attempt to steal your personal information or to commit
              fraud.</li>
          </ul>
        </template>
      </descriptionList>
      <!-- 4 -->
      <descriptionList :heading="'Common greetings'" :subheading="'Did you just call me Sir, and not in my name?!'">
        <template v-slot:image>
          <img class="w-fit" src="/Images/Phishing/Page3/professional.svg" alt="" />
        </template>
        <template v-slot:description>
          Scam messages often use generic or impersonal greetings such as "Greetings, person" or "Dear customer" to
          target broad audience. On the other hand, legitimate sources address you by your full name.
        </template>
        <template v-slot:examples>
          <descriptionExamples :index="1"
            :example='`You can often see this in emails or text messages, such as "Dear customer, your account has unusual activity."`'
            :image="'Images/Phishing/Page3/Examples/CommonGreeting/example1.png'">

          </descriptionExamples>
        </template>
        <template v-slot:signs>
          <ul class="list-disc text-sm text-gray-700">
            <li>Use common greetings like "Dear customer" or "Hello user" instead of addressing you by your name.</li>
            <li>Often paired by a sense of urgency to push you into taking immediate action.</li>
          </ul>
        </template>
      </descriptionList>
      <!-- 5 -->
      <descriptionList :heading="'Different Link'" :subheading="'facebook.help.com seems legit to me hmm...'">
        <template v-slot:image>
          <img class="w-fit" src="/Images/Phishing/Page3/link.svg" alt="" />
        </template>
        <template v-slot:description>
          Scammers will use misleading links that appear legitimate but will redirect victims to a fake website to steal
          login credentials, bank details, or to install malicious software on the victim's device. These links will
          copy trusted sources while using unusual subdomains to trick the victims.
        </template>
        <template v-slot:examples>
          <descriptionExamples :index="1"
            :example='`Scammers will often send you emails or text messages with deceptive links that appears to be legitimate such as "Dear customer, your bank account is on hold. Please visit secure-metrobank-update.com to reactivate." whereas legitimate banks do not use unofficial subdomains."`'
            :image="'Images/Phishing/Page3/Examples/differentLink/example1.png'">

          </descriptionExamples>
          <descriptionExamples :index="1"
            :example='`"Congratulations! You’ve won a P10,000 SM gift voucher. Claim it at sm-rewards-phil.com." (Real SM Website: www.smsupermalls.com )
            Sometimes, scammer will send phishing links that will redirect you to fake login pages or payment requests.`'
            :image="'Images/Phishing/Page3/Examples/differentLink/example2.png'">

          </descriptionExamples>
        </template>
        <template v-slot:signs>
          <ul class="list-disc text-sm text-gray-700">
            <li>There is a slight misspellings or extra characters like "gcash-support.net" where it should only be
              "gcash.com".</li>
            <li>Scam links may use unusual or suspicious domains such as ".xyz" or "-verify.net"</li>
            <li>Scammers may also use shortened urls like bit.ly or tinyurl to hide the real website and to trick
              victims into clicking the link.</li>
          </ul>
        </template>
      </descriptionList>
      <!-- 6 -->
      <descriptionList :heading="'Unusual Request'" :subheading="'world'">
        <template v-slot:image>
          <img class="w-fit" src="/Images/Phishing/Page3/key.svg" alt="" />
        </template>

        <template v-slot:description>
          Scam attackers will impersonate trusted people or sources to make unusual or strange requests. Sometimes it
          will ask you for urgent money transfers, sensitive information or to click unusual links like document links
          that may lead to fraudulent acts. These type of scams rely on sense of urgency or secrecy to pressure victims
          on fulfilling the requests.
        </template>
        <template v-slot:examples>
          <descriptionExamples :index="1"
            :example='`Scammers will impersonate a trusted contact and will share an email with a random document in which once clicked may lead to stealing your login credentials or install malicious software on your device.`'
            :image="'Images/Phishing/Page3/Examples/unusualRequest/example1.png'">

          </descriptionExamples>
          <descriptionExamples :index="1"
            :example='`It is mostly used in bank transactions wherein they will trick victim with the request with an attempt to steal personal information and bank details.`'
            :image="'Images/Phishing/Page3/Examples/unusualRequest/example2.png'">

          </descriptionExamples>
        </template>
        <template v-slot:signs>
          <ul class="list-disc text-sm text-gray-700">
            <li>Usually comes from an unknown sender or account.</li>
            <li>Asking for personal information, One Time Password (OTP), or bank details that legitimate sources don't
              normally request.</li>
          </ul>
        </template>
      </descriptionList>
      <!-- 7 -->
      <descriptionList :heading="'Suspicious Attachment'" :subheading="'world'">
        <template v-slot:image>
          <img class="w-fit" src="/Images/Phishing/Page3/document.svg" alt="" />
        </template>
        <template v-slot:description>
          These are attachments sent via email or text messages that may contain malicious software or viruses that is
          harmful on your device. They may be a form of music, videos, documents, or links designed to steal user's
          information or to hack the device.
        </template>
        <template v-slot:examples>
          <descriptionExamples :index="1"
            :example='`scammers may send an attached music file designed to trick victim into downloading the harmful content.`'
            :image="'Images/Phishing/Page3/Examples/SenseUrgency/phishing-attack-email-example.png'">

          </descriptionExamples>
          <descriptionExamples :index="1"
            :example='`Sometimes suspicious attachments rely on sense of urgency to trick victim to open it to install malware or to steal information.`'
            :image="'Images/Phishing/Page3/Examples/SenseUrgency/phishing-attack-email-example.png'">

          </descriptionExamples>
        </template>
        <template v-slot:signs>
          <ul class="list-disc text-sm text-gray-700">
            <li>They sometime disguise as document file such as file.docx or media file like sound.mp3</li>
            <li>May include dangerous file extensions such as .exe, .bat, .zip, or .scr.</li>
          </ul>
        </template>
      </descriptionList>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BaseButton from "@/components/UI/BaseButton.vue";
import descriptionList from "@/components/Phishing/levelOne/page3/description-list.vue";
import descriptionExamples from "@/components/Phishing/levelOne/page3/description-examples.vue";
//store
import { useComponentStore } from '@/store/Phishing/phishingLevelOne.js';

const ComponentStore = useComponentStore();


</script>

<style scoped></style>
