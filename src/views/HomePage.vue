<script setup>
import { ref } from 'vue';
import { GetAllCharacters } from '@/api/getCharacters';
import Characters from '../components/Characters.vue';


const isLoading = ref(true);
const allCreatures = ref([]);
const allCharacters = ref([]);

async function AllCharacters() {
    allCreatures.value = await GetAllCharacters();
    isLoading.value = false;
}
AllCharacters();
</script>
<template>
<h1>Home</h1>
<progress v-if="isLoading" />
<Characters v-else-if="allCreatures.length" :enemies="allCreatures" />
</template>