<template>
    <h1 class="pb-5 m-0">{{ msg }}</h1>
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

    <div class="text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio eos consequuntur ipsam dignissimos soluta eveniet officiis pariatur, vero veniam, rem sit, neque perferendis ut voluptatibus facere a exercitationem nisi odit ea excepturi, dolor recusandae voluptas deleniti molestiae, accusantium repellat vel corrupti? Illum harum, saepe a eum officia natus neque ipsa enim sint voluptatibus praesentium adipisci sunt in eaque facere ab, incidunt sapiente expedita modi voluptas reiciendis perspiciatis odio ducimus eveniet! Ipsa, harum?
    </div>

</template>


<script setup>
    import { ref } from 'vue';
    defineProps({
        msg: String
    })
    const count = ref(0)
</script>


<style scoped>
    a {
        @apply text-green-500 hover:bg-green-100 hover:text-green-700 hover:underline
    }
    button {
        @apply m-2 p-2 bg-transparent outline-transparent cursor-pointer
    }
    code {
        @apply bg-gray-200 rounded p-1 px-2 mx-2 border-gray-300 border-2
    }
    .text {
        @apply prose py-4 mx-auto
    }

</style>
