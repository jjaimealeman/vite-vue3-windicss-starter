<template>
    <h1>{{ msg }}</h1>
    <p>
        Recommended IDE setup: <a href="https://code.visualstudio.com/" target="_blank">VSCode</a> + <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>
    <p>
        <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> | <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
    </p>
    <button type="button" @click="count++"> ⬆️ </button>
    {{ count }}
    <button type="button" @click="count--"> ⬇️ </button>
    <p> Edit <code>components/HelloWorld.vue</code> to test hot module replacement. </p>

    <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, doloribus?</div>
</template>


<script setup>
    import { ref } from 'vue';
    defineProps({
        msg: String
    })
    const count = ref(0)
</script>


<style scoped>
    /* a {
        @apply text-green-500 hover:bg-green-100 hover:text-green-700 hover:underline
    }
    button {
        @apply m-2 p-2 active:bg-transparent outline-transparent
    }
    code {
        @apply bg-gray-200 rounded p-1 px-2 mx-2 border-gray-300 border-2
    } */

</style>
