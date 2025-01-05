<script setup>
import { ref, watch } from 'vue';

const props = defineProps({

  id: Number,
  attack: Number,
  armor: Number,
  health: Number,
  name: String,

})


const levelUp = false;




</script>

<template>

  <div class="details">
    <h3>Total enemy is {{ name }}</h3>
    <ul>

      <li>Attack: <span>{{ attack }}</span></li>
      <li>Deffence: <span>{{ armor }}</span></li>
      <li>Health: <span>{{ health }}</span></li>


    </ul>
    <slot></slot>
  </div>

</template>

<style scoped>
ul {
  margin-top: 2rem;
  flex: 1;
  position: relative;
}
</style>
