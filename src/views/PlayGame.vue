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
const upgrade = ref(false);

const playedEnemies = ref(10);
const totalKilledEnemies = ref(0);
const allCreatures = ref([]);
const currentCreature = ref();
const currentCreatureHealth = ref();
const currentCreatureArmor = ref();
const creatureAttack = ref();
const creatureResistance = ref();
const creatureDie = ref(false);

const currentChar = ref({});
var currentCharArmor;
const alive = computed(() => {
  return currentChar.value.health > 0;
})

function loadCreatures(alcreatureLength) {
  currentCreature.value = alcreatureLength[Math.floor(Math.random() * alcreatureLength.length)];
  currentCreatureHealth.value = currentCreature.value.health;
  currentCreatureArmor.value = currentCreature.value.defense;
  creatureResistance.value = currentCreatureHealth.value + currentCreatureArmor.value;
  creatureDie.value = false;
}

async function StartPlay() {
  allCreatures.value = await GetAllCreatures();
  currentChar.value = await GetCharacter(qid);
  currentCharArmor = currentChar.value.armor;
  isLoading.value = false;
  loadCreatures(allCreatures.value);
}
StartPlay();


function fight() {


  creatureAttack.value = currentCreature.value.attack;

  let creatureAttacking = creatureAttack.value;

  let charArmor = currentChar.value.armor;
  let charHealth = currentChar.value.health;
  let charAttack = currentChar.value.attack;
  console.log(creatureResistance.value);

  if (creatureResistance.value - charAttack <= 0) {
    creatureDie.value = true;
    loadCreatures(allCreatures.value);
    playedEnemies.value -= 1;
    totalKilledEnemies.value += 1;
  }
  else {
    creatureResistance.value -= charAttack;
  }



  charArmor -= creatureAttacking;
  if (charArmor < 0) {
    charHealth -= creatureAttacking;
    charArmor = 0;
  }
  currentChar.value.armor = charArmor;
  currentChar.value.health = charHealth;





  if (playedEnemies.value == 0) {
    upgrade.value = true;
  }


}


function levelUpChar() {
  upgrade.value = false;
  playedEnemies.value = 10;
  currentChar.value.armor = currentCharArmor;
}
</script>

<template>
  <h1>Best of luck {{ currentChar.name }}</h1>
  <h2>Kills to level up: {{ playedEnemies }} | Total creatures killed {{ totalKilledEnemies }}</h2>
  <div class="container" v-if="qid">

    <Player v-if="!isLoading && alive" :key="currentChar.id" :id="currentChar.id" :armor="currentChar.armor"
      :name="currentChar.name" :health="currentChar.health" :attack="currentChar.attack"
      :skills="currentChar.specialSkills" :image="currentChar.image" :readyToLevelUp="upgrade" @onHit="fight"
      @levelUp="levelUpChar" />
    <a v-else-if="!isLoading" href="./">
      <h1>Game Over. Start again.</h1>

    </a>

    <progress v-else-if="isLoading" />


    <Enemies v-if="alive" :key="currentCreature.id" :id="currentCreature.id" :resistance="creatureResistance"
      :attack="currentCreature.attack" :name="currentCreature.name" />
  </div>
</template>

<style scoped>
.container {

  display: grid;
  grid-template-columns: auto auto auto;
  background-color: dodgerblue;
  padding: 10px;

}



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