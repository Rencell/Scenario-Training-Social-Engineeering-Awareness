<template>

    <div class="p-4 ps-7 shadow-xl bg-white relative w-96 ms-5">
        <div
            :class="[props.color]"
            class="w-10 h-10 text-white text-lg font-bold rounded-md absolute -left-5 top-1/2 -translate-y-1/2 flex justify-center items-center">
            {{number}}
        </div>
        <div class="text-sm">
            <slot></slot>
        </div>
    </div>

</template>

<script setup>

const props = defineProps({
    color : String,
    number: String
})  

</script>