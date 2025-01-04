<script setup>
import { ref } from 'vue';
import { GetAllCreatures } from '@/api/getCreatures';
import Enemies from '../components/Enemies.vue';


const isLoading = ref(true);
const allCreatures = ref([]);
const allCharacters = ref([]);

async function AllEnemies() {
    allCreatures.value = await GetAllCreatures();
    isLoading.value = false;
}
AllEnemies();
</script>
<template>
<h1>Play Game</h1>
<progress v-if="isLoading" />
<Enemies v-else-if="allCreatures.length" :enemies="allCreatures" />
</template>