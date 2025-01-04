<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  enemies:{
    required: true,
    type: Array,
  }
})

const playedEnemies = ref([]);
const theEnemy = ref({});
const levelUp=false;

function pickEnemy(creatures){
  const random = Math.floor(Math.random() * creatures.length);
  playedEnemies.value.push(random);
  theEnemy.value = creatures[random];
}
 

watch(() => props.enemies, (newVal) => {
  pickEnemy(newVal);
}, {
  immediate: true,
});
</script>

<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>Total enemies left: {{ playedEnemies.length }}</h3>
      <ul>
        
        <li>Name: <span>{{ theEnemy.name }}</span></li>
        <li>Attack: <span>{{ theEnemy.attack }}</span></li>
        <li>Deffence: <span>{{ theEnemy.defense }}</span></li>
        <li>Health: <span>{{ theEnemy.health }}</span></li>
        <button @click="pickEnemy(enemies)" class="warning">Attack</button>
        <button v-if="playedEnemies.length > 9">Level Up</button>
      </ul>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
ul {
  margin-top: 2rem;
  flex: 1;
  position: relative;
}

.warning{
padding: .5rem;
font-weight: bold;
font-size: 1rem;
border: 1px solid red;
background-color: orange;
margin-top: 5px;
border-radius: 20%;
}


</style>
