<template>
    <main>
        <div class="bg-white md:p-10 p-5 pt-5 my-8 shadow">
            <h1 class="text-2xl my-4 flex">
                <Icon icon="mdi:hot" color="green" width="30" class="mr-1 mt-1" /> Top Trending
            </h1>
            <div class="grid grid-cols-2 md:grid-cols-5  gap-4">
                <div class="col" v-for="(product, index) in products.slice(0, 10)" :key="index">
                    <ProductCard :product="product" />
                </div>
            </div>
        </div>




        <div class="grid grid-cols-2 gap-2 m-3">
            <div>
                <img class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="">
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="">
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="">
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="">
            </div>
        </div>



        <div class="bg-white md:p-10 p-5 pt-5 my-8 shadow">
            <h1 class="text-2xl my-4 flex">
                <Icon icon="mdi:hot" color="green" width="30" class="mr-1 mt-1" /> Women's Wear
            </h1>
            <div class="grid grid-cols-2 md:grid-cols-5  gap-4">
                <div class="col" v-for="(product, index) in women.slice(0, 5)" :key="index">
                    <ProductCard :product="product" />
                </div>
            </div>
        </div>

        <div class="how-it-works shadow">
            <HowItWorks />
        </div>

        <div class="bg-white md:p-10 p-5 pt-5 my-8 shadow">
            <h1 class="text-2xl my-4 flex">
                <Icon icon="mdi:hot" color="green" width="30" class="mr-1 mt-1" /> Men's Wear
            </h1>
            <div class="grid grid-cols-2 md:grid-cols-4  gap-4">
                <div class="col" v-for="(product, index) in men" :key="index">
                    <ProductCard :product="product" />
                </div>
            </div>
        </div>




        <div class="grid gap-4 mx-2">
            <div>
                <img class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" alt="">
            </div>
            <div class="grid grid-cols-5 gap-2">
                <div>
                    <img class="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="">
                </div>
            </div>
        </div>


    </main>
</template>

<script>
import ProductCard from './ProductCard.vue';
import axios from 'axios'
import { Icon } from '@iconify/vue';
import HowItWorks from './HowItWorks.vue';



export default {
    components: { ProductCard, Icon, HowItWorks },
    data() {
        return {
            products: [],
            women: [],
            men: []
        }
    },

    mounted() {
        this.fetchProducts();
        this.womenProducts()
        this.menProducts()
    },

    methods: {
        async fetchProducts() {
            try {
                const res = await axios.get('https://fakestoreapi.com/products')
                this.products = res.data
                console.log(res.data);
            }

            catch (e) {
                console.log(e)
            }
        },

        async womenProducts() {
            try {
                const res = await axios.get("https://fakestoreapi.com/products/category/women's clothing")
                this.women = res.data
                console.log(res.data);
            }

            catch (e) {
                console.log(e)
            }
        },

        async menProducts() {
            try {
                const res = await axios.get("https://fakestoreapi.com/products/category/men's clothing")
                this.men = res.data
                console.log(res.data);
            }

            catch (e) {
                console.log(e)
            }
        }
    }
}
</script>

<style></style>