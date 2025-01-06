<script setup>
import { ref, watch } from 'vue';

const props = defineProps({

  id: Number,
  attack: Number,
  resistance: Number,
  name: String,

})


const levelUp = false;




</script>

<template>

  <ul>
    <h3>The enemy is {{ name }}</h3>
    <li>Attack: <span>{{ attack }}</span></li>
    <li>Resistance: <span>{{ resistance }}</span></li>

  </ul>
  <slot></slot>


</template>

<style scoped>
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
