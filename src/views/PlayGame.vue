<script setup>
import { ref, computed } from 'vue';
import { GetAllCreatures } from '@/api/getCreatures';
import Enemies from '../components/Enemies.vue';
import { useRoute } from 'vue-router';
import { GetCharacter } from '@/api/getCharacters';
import Player from '@/components/Player.vue';

const route = useRoute();
const qid = route.query.id;

const isLoading = ref(true);
const allCreatures = ref([]);

const currentChar = ref({});

const playedEnemies = ref(0);

const randNum = ref();

const creatureAttack = ref();

const alive = computed(() => {
  return currentChar.value.health > 0;
})

async function StartPlay() {
  allCreatures.value = await GetAllCreatures();
  currentChar.value = await GetCharacter(qid);
  isLoading.value = false;
  randNum.value = Math.floor(Math.random() * (allCreatures.value.length + 1));
  creatureAttack.value = allCreatures.value[randNum.value].attack;

}
StartPlay();




function ImHit() {
  creatureAttack.value = allCreatures.value[randNum.value].attack;

  var attackIt = creatureAttack.value;
  var charArmor = currentChar.value.armor;
  var charHealth = currentChar.value.health;
  charArmor -= attackIt;
  if (charArmor < 0) {
    charHealth -= attackIt;
    charArmor = 0;
  }
  currentChar.value.armor = charArmor;
  currentChar.value.health = charHealth;
  playedEnemies.value += 1;
  randNum.value = Math.floor(Math.random() * allCreatures.value.length);

}

</script>

<template>
  <div v-if="qid">
    <h1>Play Game {{ creatureAttack }}</h1>
    <Player v-if="!isLoading && alive" :key="currentChar.id" :id="currentChar.id" :armor="currentChar.armor"
      :name="currentChar.name" :health="currentChar.health" :attack="currentChar.attack"
      :skills="currentChar.specialSkills" :image="currentChar.image" @onHit="ImHit" />
    <a v-else-if="!isLoading" href="./">
      <h1>Game Over. Start again.</h1>
    </a>

    <progress v-else-if="isLoading" />


    <Enemies v-if="alive" :key="allCreatures[randNum].id" :id="allCreatures[randNum].id"
      :armor="allCreatures[randNum].defense" :health="allCreatures[randNum].health"
      :attack="allCreatures[randNum].attack" :name="allCreatures[randNum].name" />
  </div>
  <button v-if="playedEnemies >= 9">Level Up</button>
</template>

<style scoped>
.warning {
  padding: .5rem;
  font-weight: bold;
  font-size: 1rem;
  border: 1px solid red;
  background-color: orange;
  margin-top: 5px;
  border-radius: 20%;
}
</style>