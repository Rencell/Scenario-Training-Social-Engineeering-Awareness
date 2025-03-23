<template>

    <div class="flex gap-4 mb-6">
        <p
            class="bg-primary-light text-secondary flex h-8 w-8 items-center justify-center rounded-full p-2 text-lg font-medium">
            {{ props.index }}
        </p>
        <div class="font-secondary text-sm text-gray-800">
            {{ props.example }}
        </div>
    </div>
    <div class="w-full bg-white-color rounded-lg flex justify-center mb-6">
        <div :class="[imageActive ? 'w-2xl' : 'w-96']" class=" bg-red-200 transition-all">
            <img @click.stop="imageActive = !imageActive"  class="w-full cursor-zoom-in"
                :src="props.image" alt="" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const imageActive = ref(false)

const props = defineProps({
    index: Number,
    example: String,
    image: String
});
</script>

<style scoped>
img {
    transition: transform .6s;

}

img.active {
    transform: scale(1.5);
}



</style>