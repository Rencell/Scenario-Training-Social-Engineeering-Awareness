<template>
    <div class="p-4 rounded-xl text-black text-center flex-center flex-col font-secondary">
        <div class="w-5 h-5 flex-center bg-primary rounded-full text-white text-xs">{{index }}</div> 
        <div class="text-sm">
            
            <slot></slot>
        </div>
    </div>
</template>


<script setup>

const props = defineProps({
  index: String
})
</script>