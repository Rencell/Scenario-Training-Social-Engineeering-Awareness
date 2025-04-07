<template>
    <div class="flex h-full w-full flex-col rounded bg-[#F6F6F6] text-black">
        <div class="motion-preset-focus flex justify-center pt-10" :key="currentScene.id">


            <div class="relative flex w-2xl flex-col items-center gap-4 pt-10">
                

                <div class="rounded-md bg-primary p-2 w-full">
                    <div class="w-full h-60">
                        <img class="w-full h-full object-cover" :class="[currentScene.imageorientation]"
                             :src="currentScene.Image" alt="" />
                    </div>
                </div>


            </div>
        </div>

        <div class="motion-preset-focus flex justify-center">
            <div class="flex w-2xl flex-col gap-2 pt-6">
                {{ currentScene.dialogue }}
            </div>
        </div>

        <div>
            <div class="flex justify-end gap-2 pe-10 pt-10 text-white">
                <BaseButton :click="previous">
                    PREVIOUS
                </BaseButton>
                <BaseButton :click="next">
                    NEXT
                </BaseButton>
            </div>
        </div>
    </div>
</template>

<script setup>
//store
import { usePhishingTwo } from "@/store/Phishing/phishingLevelTwo/componentPage";
import BaseButton from "@/components/UI/BaseButton.vue";
import { computed, ref } from "vue";
const phishingTwo = usePhishingTwo();

const scene = ref("scene1")

const data = [
    { id: "scene1", Image: "Images/Phishing/phishingTwo/Scenario/1/man-outside.png", dialogue: "lorem1", next: "scene2", previous: null, imageorientation: "object-top"},
    { id: "scene2", Image: "Images/Phishing/phishingTwo/Scenario/1/laptop-focus.png", dialogue: "lorem2", next: "scene3", previous: "scene1", imageorientation: "object-center" },
    { id: "scene3", Image: "Images/Phishing/phishingTwo/Scenario/1/man-home-searching.png", dialogue: "lorem3", next: null, previous: "scene2", imageorientation: "object-center" },
]


const currentScene = computed(() => {
    return data.find(sceneObj => sceneObj.id === scene.value);
})

const next = () => {
    if(currentScene.value.next == null) { 
        phishingTwo.nextPage();
        return;
    }
    scene.value = currentScene.value.next
}
const previous = () => {
    if(currentScene.value.previous === null) { 
        phishingTwo.previousPage(); 
        return;
    }
    scene.value = currentScene.value.previous

}
</script>

<style scoped></style>