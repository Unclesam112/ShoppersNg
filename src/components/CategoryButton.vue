<template>
  <main>
    <router-link :to="`/`" type="button"
            class="text-gray-900 bg-white text-gray-500 my-2 border border-green-400 focus:outline-none hover:bg-red-700 hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-xs px-5 py-2 me-3 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-full truncate">
            {{ category }}
        </router-link>
  </main>
</template>

<script>
export default {
    props: {
        category: {
            type: String,
            required: true
        }
    }

}
</script>

<style>

</style>