<template>
    <main>
        <a href="#" @click="onClick"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
            <slot></slot>
        </a>
    </main>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
    props: {
        title: {
            type: String
        },

        color: {
            type: String
        },

        handleMethod: {
            type: Function,
            required: true
        }
    },

    components: {Icon},

    methods: {
        onClick() {
            this.handleMethod();
        }
    }

}
</script>

<style></style>