<template>
  <div :class="isPhish ? 'bg-red-200' : '' "  class="grow flex justify-between border-t-[0.5px] border-gray-300 p-5 cursor-pointer" @click="setEmail(props.id)">
    
    <div class="flex items-center gap-5">
      
      <div :class="[randomColorClass]" class="h-fit rounded-md p-2 py-1 text-white w-8 text-center">{{props.name.charAt(0).toUpperCase()}}</div>
      <div>
        
        <h1 class="font-medium">{{props.name}} <div v-if="isPhish" class="badge badge-error text-xs p-1 text-white">Phishing</div></h1> 
        <h1>{{props.subject}}</h1>
      </div>
    </div>

    <div class="place-content-end text-xs">{{props.date}}</div>
  </div>
</template>

<script setup>
import { useEmail } from '@/store/Phishing/phishingLevelOne';
import { computed, ref } from 'vue';
const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'];
const random_number_by_colors = Math.floor(Math.random() * colors.length)
const randomColorClass = ref(colors[random_number_by_colors]);

const email = useEmail()

const setEmail = (value) => {
  email.setEmail(value)
}

const props = defineProps({
    RevealAnswer : Boolean,
    id:  Number,
    name: String,
    subject: String,
    body: String,
    date: String,
    isPhishing: Boolean
});

const isPhish = computed (() => {
  if(props.RevealAnswer == true){
    if(props.isPhishing == true){
      return true;
    }
  }
  return false;
})
</script>