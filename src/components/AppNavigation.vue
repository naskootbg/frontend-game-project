<script setup>
const links = [
    { name: 'home', label: 'HOME' },
    { name: 'login', label: 'LOGIN' },
    { name: 'join', label: 'JOIN' },
];

</script>

<template>
    <nav>
        <h1>💫 My Game Project</h1>
        <ul>
            <li v-for="link in links" :key="link.name">
                <router-link v-slot="{ isActive }" :to="{ name: link.name }">
                    <button type="button" :class="[isActive ? 'primary' : 'primary outline']">
                        {{ link.label }}
                    </button>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    max-width: calc(1200px + 2 * 0.5rem);
    margin: auto;
    padding: 0.25rem 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

h1 {
    font-size: 1rem;
    text-transform: uppercase;
}

ul {
    display: flex;
    gap: 1rem;
}
</style>
