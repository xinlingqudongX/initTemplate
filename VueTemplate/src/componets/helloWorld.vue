<script setup lang="ts">
import { ref, defineProps } from 'vue';

defineProps<{ msg: string }>();

const count = ref(0);

const test = function (...args: any[]) {
    console.log(args);
};
</script>

<template>
    <h1>{{ msg }}</h1>

    <p>
        Recommended IDE setup:
        <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
        +
        <a href="https://github.com/johnsoncodehk/volar" target="_blank"
            >Volar</a
        >
    </p>

    <p>See <code>README.md</code> for more information.</p>

    <p>
        <a href="https://vitejs.dev/guide/features.html" target="_blank">
            Vite Docs
        </a>
        |
        <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </p>

    <button
        type="button"
        @click="
            test(1, 2, { a: 3 });
            count++;
        "
    >
        count is: {{ count }}
    </button>
    <p>
        Edit
        <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
    <div id="svgademo">
        <canvas></canvas>
    </div>
</template>

<style scoped>
a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}
</style>
