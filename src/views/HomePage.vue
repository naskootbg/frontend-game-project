<script setup>
import { ref, onMounted } from 'vue';
import { GetAllCharacters } from '@/api/getCharacters';
import Characters from '../components/Characters.vue';


const isLoading = ref(true);

const allCharacters = ref([]);

async function AllCharacters() {
    allCharacters.value = await GetAllCharacters();
    isLoading.value = false;
}
AllCharacters();
</script>
<template>
    <progress v-if="isLoading"></progress>

    <Characters v-else-if="allCharacters.length" :characters="allCharacters" />
</template>