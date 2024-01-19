<template>
    <main>
        <div class="mx-3 py-4 md:py-8 ">
            <button type="button"
                class="text-green-700 hover:text-white border border-green-600 bg-white hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All
                </button> 
            <!-- <button type="button" v-for="category in categories" :key="category"
                class="hidden md:block text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">
                {{ category }}
            </button> -->

            <Carousel :items-to-show="3.5" :wrap-around="true">
            <Slide v-for="category in categories" :key="category">
                <div class="carousel__item">
                    <button type="button" 
                    class="text-gray-900 bg-white text-gray-500 my-4 border border-gray-300 focus:outline-none hover:bg-red-700 hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-8 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-full">
                {{ category }}
            </button>
                </div>
            </Slide>

        </Carousel>
        </div>



        
    </main>
</template>

<script>
import axios from 'axios'
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    data() {
        return {
            categories: []
        }
    },

    components: {
        Carousel,
        Slide,
        Navigation,
    },

    mounted() {
        this.fetchCategories()
    },

    methods: {
        async fetchCategories() {
            try {
                const res = await axios.get('https://fakestoreapi.com/products/categories');
                const data = res.data
                this.categories = data;
                console.log(data);
            }
            catch (e) {

            }
        }
    }
})
</script>

<style></style>
