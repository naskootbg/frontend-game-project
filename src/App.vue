<script setup>
import { ref, onBeforeMount } from 'vue';
import AppNavigation from './components/AppNavigation.vue';
import AppNavigationLogged from './components/AppNavigationLoged.vue';
import AppFooter from './components/AppFooter.vue';
import { useUserStore } from './stores/useUserStore';

const switchMenu = ref(false);

const userStore = useUserStore();

onBeforeMount(async () => {
  await userStore.reAuthUser();
  switchMenu.value = userStore.isUserLogged;
});
</script>

<template>
  <header>
    <AppNavigation v-if="!switchMenu" />
    <AppNavigationLogged v-else />
  </header>
  <RouterView />
  <footer>
    <AppFooter />
  </footer>
</template>
