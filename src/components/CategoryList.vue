<template>
    <main>
        <div class="flex mx-2 py-1 md:py-8 overflow-hidden">
            <button type="button"
                class="text-green-700 flex hover:text-white hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All
                <Icon icon="ep:menu" class="mt-1 ml-1" />
            </button>

            <div class="Genre-list">
                <div class="top-picks">

                    <div class="grid grid-cols-2 gap-2">
                        <div class="col">
                            <CategoryButtonVue category="Men's Clothing" />
                            
                        </div>

                        <div class="col">
                            <CategoryButtonVue category="Women's Clothing" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios'
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { Icon } from '@iconify/vue'
import CategoryButtonVue from './CategoryButton.vue'

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
        Icon,
        CategoryButtonVue
    },

    mounted() {
        this.fetchCategories()
    },

    methods: {
        async fetchCategories() {
            try {
                const res = await axios.get('https://fakestoreapi.com/products/categories');
                const data = res.data
                // data.map((category) => {

                // })
                this.categories = data;
                console.log(data);
            }
            catch (e) {

            }
        }
    }
})
</script>

<style scoped>
.carousel__item {
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    white-space: nowrap;
}
</style>
