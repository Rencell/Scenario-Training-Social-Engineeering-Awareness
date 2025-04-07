<template>
    <div class="w-xl rounded-lg shadow-xl bg-white p-6 h-fit">


        <div class="flex-center flex-col gap-4">
            <p class="text-xl font-bold">Quiz Results</p>
            <div class="w-20 h-20 flex-center rounded-full text-primary text-2xl font-bold bg-primary/20">
                4/10
            </div>
            <p class="text-sm">You correctly identified <strong>4</strong> out of <strong>10</strong> websites.</p>
        </div>

        <div class="font-secondary space-y-3 mt-3">
            <p class="font-semibold">Your Performance</p>

            <div class="text-sm p-4 bg-white-color rounded-xl">
                <p>Score: 40%</p>
                <br>
                <p>Rating: Needs Improvement</p>
                <br>
                <p>
                    You need to improve your phishing detection skills. Don't worry - with practice and by following the
                    tips
                    below, you can get better at identifying phishing attempts.
                </p>
            </div>

            <p class="font-semibold">
                Tips to Identify Phishing Attempts
            </p>

            <div>
                <ul class="list-disc list-inside text-gray-800 text-sm">
                    <li>Check the URL carefully for misspellings or unusual characters</li>
                    <li>Look for secure connections (<code>https://</code>) especially on login pages</li>
                    <li>Be wary of URLs with unusual subdomains or domain extensions</li>
                    <li>Check for poor grammar or spelling in the website content</li>
                    <li>Be suspicious of urgent requests or threats</li>
                    <li>Hover over links before clicking to see where they actually lead</li>
                </ul>
            </div>

            <div class="flex gap-4 font-secondary text-sm">
                <button @click="retryQuiz()" class="grow outline-1 outline-gray-300 rounded-md p-1 ">Retry quiz</button>
                <button @click="gotoQuiz()" class="grow outline-1 outline-gray-300 rounded-md p-1 ">Reveal
                    Results</button>
                <button @click="phishingTwo.nextPage()"
                    class="grow outline-1 outline-gray-300 rounded-md p-1 bg-primary text-white">Complete level</button>
            </div>
        </div>

    </div>
</template>

<script setup>

import { usePhishingTwo } from '@/store/Phishing/phishingLevelTwo/componentPage';

const phishingTwo = usePhishingTwo()



</script>