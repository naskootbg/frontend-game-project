<script setup>

const props = defineProps({

  id: Number,
  attack: Number,
  resistance: Number,
  health: Number,
  armor: Number,
  name: String,

})


const levelUp = false;




</script>

<template>

  <ul>
    <h3>Name: {{ name }}</h3>
    <li>Attack: <span>{{ attack }}</span></li>
    <li v-if="resistance">Resistance: <span>{{ resistance }}</span></li>
    <li v-if="armor">Armor: <span>{{ armor }}</span></li>
    <li v-if="health">Health: <span>{{ health }}</span></li>
    <li v-if="health"><button class="primary">EDIT <span>{{ id }} (not supported)</span></button> </li>
  </ul>


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
