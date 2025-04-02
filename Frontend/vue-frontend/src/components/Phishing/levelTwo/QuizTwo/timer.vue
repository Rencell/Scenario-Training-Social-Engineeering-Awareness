<template>
    <div class="w-full mx-auto text-center">
      <div class="mb-4 text-lg font-semibold">Time Remaining: {{ formattedTime }}</div>
      <progress class="progress progress-primary w-full" :value="progress" max="100"></progress>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted , watch} from 'vue';
  
  const props = defineProps({
    duration: { type: Number, default: 5 },
    timerout: Function
  });
  
  const timeLeft = ref(props.duration);
  const progress = ref(100);
  let interval;
  
  const formattedTime = ref(`${timeLeft.value.toFixed(1)}s`);
  
  const startTimer = () => {
    interval = setInterval(() => {
      if (timeLeft.value > 0) {
        timeLeft.value -= 0.1;
        progress.value = (timeLeft.value / props.duration) * 100;
        formattedTime.value = `${timeLeft.value.toFixed(1)}s`;
      } else {
        clearInterval(interval);
        formattedTime.value = "0.0s";
      }
    }, 100);
  };

watch(timeLeft, () => {
    if(timeLeft.value <= 0){
        props.timerout();
    }
})

onMounted(startTimer);
</script>