<script setup>
import { ref } from 'vue';


const props = defineProps({
  characters: {
    required: true,
    type: Array,
  }
})

const playedEnemies = ref([]);
const theEnemy = ref({});
const levelUp = false;
function play(id) {
  return "/play?id=" + id;
}

</script>

<template>
  <div class="item">

    <div class="details">

      <ul v-for="char in characters">
        <h2>{{ char.name }}</h2>
        <p>{{ char.about }}</p>
        <a :href=play(char.id)><img :src=char.image /></a>

        <li>Attack: <span>{{ char.attack }}</span></li>
        <li>Deffence: <span>{{ char.armor }}</span></li>
        <li>Health: <span>{{ char.health }}</span></li>
        <h3>Skills</h3>
        <li> <span>{{ char.specialSkills[0].name }}
            - Attack {{ char.specialSkills[0].attack }},
            Health restore {{ char.specialSkills[0].health }}
          </span></li>
        <li> <span>{{ char.specialSkills[1].name }}
            - Attack {{ char.specialSkills[1].attack }},
            Health restore {{ char.specialSkills[1].health }}
          </span></li>
        <li> <span>{{ char.specialSkills[2].name }}
            - Attack {{ char.specialSkills[2].attack }},
            Health restore {{ char.specialSkills[2].health }}
          </span></li>
        <a class="pickhero" :href=play(char.id)><span> Play with {{ char.name }} </span></a>
      </ul>
      <slot></slot>
    </div>
  </div>
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

img {

  transition: transform 5s;
  width: auto;
  height: 200px;
  margin: 0 auto;
  border-radius: 15%;
  box-shadow: 10px 0 5px rgb(41, 124, 150), -10px 0 5px rgb(41, 124, 150);
}

img:hover {
  box-shadow: none;
  -ms-transform: scale(1.5);
  /* IE 9 */
  -webkit-transform: scale(1.5);
  /* Safari 3-8 */
  transform: scale(1.5);
}

.pickhero {
  padding: 0.3rem;
  font-weight: bold;
  font-size: 1rem;
  border: 1px solid rgb(0, 162, 255);
  background-color: rgb(24, 202, 18);
  border-radius: 20%;
}

.details {
  display: grid;
  grid-template-columns: auto auto;
  background-color: dodgerblue;
  padding: 10px;
  font-size: .8rem;
}
</style>
