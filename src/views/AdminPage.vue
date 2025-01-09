<script setup>
import { ref } from 'vue';
import { GetAllCreatures } from '@/api/getCreatures';
import Enemies from '../components/Enemies.vue';
const isLoading = ref(true);
const creatures = ref([]);
async function allCreatures() {
    creatures.value = await GetAllCreatures();
    isLoading.value = false;
}
allCreatures();

</script>
<template>
    <h1>Edit creatures</h1>
    <div v-if="isLoading">
        <h1>Loading Data...</h1>
    </div>
    <Enemies v-for="creature in creatures" :key="creature.id" :id="creature.id" :armor="creature.defense"
        :health="creature.health" :attack="creature.attack" :name="creature.name" />

</template>