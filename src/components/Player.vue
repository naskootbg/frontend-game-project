<script setup>
import { ref, watch } from 'vue';


const props = defineProps({

  id: Number,
  attack: Number,
  armor: Number,
  health: Number,
  name: String,
  image: String,
  skills: [],
})

const emits = defineEmits(['onHit', 'onKill', 'levelUp', 'useSkill'])

function onCharHit() {
  emits('onHit');
}


</script>


<template>

  <ul>
    <h2>{{ name }}</h2>

    <img :src=image />
    <li>Attack: <span>{{ attack }}</span></li>
    <li>Deffence: <span>{{ armor }}</span></li>
    <li>Health: <span>{{ health }}</span></li>
    <button @click="onCharHit">Prepare for Attack</button>
  </ul>
  <ul v-for="skill in skills">
    <li>{{ skill.name }}</li>

  </ul>

</template>