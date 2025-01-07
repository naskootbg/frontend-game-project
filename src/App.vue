<script setup>
import AppNavigation from './components/AppNavigation.vue';
import AppFooter from './components/AppFooter.vue';

</script>

<template>
  <header>
    <AppNavigation />
  </header>
  <RouterView />
  <footer>
    <AppFooter />
  </footer>
</template>
