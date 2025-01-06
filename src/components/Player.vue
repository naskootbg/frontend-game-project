<script setup>
import { ref, watch } from 'vue';


const props = defineProps({

  id: Number,
  attack: Number,
  armor: Number,
  health: Number,
  name: String,
  image: String,
  readyToLevelUp: false,
  skills: [],
})

const emits = defineEmits(['onHit', 'levelUp', 'useSkill'])

function onCharHit() {
  emits('onHit');
}

function upLevel() {
  emits('levelUp');
}
</script>


<template>

  <ul>
    <h2>{{ name }}</h2>

    <img :src=image />
    <li>Attack: <span>{{ attack }}</span></li>
    <li>Deffence: <span>{{ armor }}</span></li>
    <li>Health: <span>{{ health }}</span></li>


  </ul>
  <ul v-if="skills" v-for="skill in skills">
    <li>{{ skill.name }}</li>

  </ul>
  <div class="myBtns">
    <div>
      <button v-if="!readyToLevelUp" @click="onCharHit">Attack</button>
      <button v-if="readyToLevelUp" @click="upLevel">Level Up</button>
    </div>
  </div>
</template>
<style scoped>
.myBtns {
  position: relative;
}

.myBtns div {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

button {
  padding: 1rem;
}

ul {
  border: 2px solid rgb(98, 110, 95);
  border-radius: 0.5em;
  padding: 10px;
  list-style-type: none;
  place-items: center;
  padding: 10px;
  margin: 3px;
}
</style>