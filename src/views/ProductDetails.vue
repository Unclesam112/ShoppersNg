<template>
    <main>

        <div class="navbar">
            <Navbar />
        </div>

        <div class="md:mx-20 mx-3 md:my-10 my-5">
            <BreadCrumb />
        </div>

        <div class="grid grid-cols md:grid-cols-2 mx-3">
            <div class="col">
                <img class="p-8 md:20 md:w-1/2 object-contain mx-auto rounded-t-lg" :src="getImageUrl(product.image)"
                    :alt="product.title" />
            </div>
            <div class="col md:p-20 md:pt-0">
                <h1 class="text-black text-2xl font-semibold md:text-3xl">{{ product.title }}</h1>



                <div class="flex items-center my-3">
                    <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" viewBox="0 0 22 20">
                        <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" viewBox="0 0 22 20">
                        <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" viewBox="0 0 22 20">
                        <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" viewBox="0 0 22 20">
                        <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">{{  }}</p>
                    <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
                    <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
                </div>

                <p class="text-xl font-semibold text-gray=-500 mb-4">${{ product.price }} </p>

                <i class="text-sm my-2 text-gray-400 capitalize">{{ product.category }}</i>



                <div id="accordion-flush" data-accordion="collapse"
                    data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                    data-inactive-classes="text-gray-500 dark:text-gray-400">
                    <h2 id="accordion-flush-heading-1">
                        <button type="button"
                            class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                            data-accordion-target="#accordion-flush-body-1" aria-expanded="true"
                            aria-controls="accordion-flush-body-1">
                            <span>About this product</span>
                            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-flush-body-1" class="hidden" aria-labelledby="accordion-flush-heading-1">
                        <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                            <p class="text-gray-500 text-sm md:text-md dark:text-gray-400">{{ product.description }}.</p>
                        </div>
                    </div>
                </div>


                <hr>

                <div class=" mb-8">

                    <QuantityBar :quantity=productQuantity />

                    <div class="buttons">
                        <button type="button"
                            class="text-green-500 font-semibold border border-green-500 border-2 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            @click="addToCart(product.id)">Add
                            to cart</button>
                        <button type="button"
                            class="py-2.5 px-5 me-2 mb-2 text-sm text-green-500 font-semibold text-gray-900 focus:outline-none bg-white border  border-2 border-green-500 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Checkout</button>
                    </div>
                </div>

            </div>
        </div>

        <div class="footer">
            <FooterVue />
        </div>
    </main>
</template>

<script>
import axios from 'axios';
import Navbar from "@/components/Layout/Navbar.vue";
import BreadCrumb from '@/components/Layout/BreadCrumb.vue';
import QuantityBar from '@/components/QuantityBar.vue';
import FooterVue from '@/components/Layout/Footer.vue';



export default {

    components: { Navbar, BreadCrumb, QuantityBar, FooterVue },

    data() {
        return {
            product: {},
            productQuantity: 1
        }
    },

    mounted() {
        this.fetchProductDetails()
    },

    methods: {
        async fetchProductDetails() {
            try {
                const id = this.$route.params.id
                const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
                const data = res.data;
                this.product = data
                console.log(data);
            }

            catch (e) {
                console.log('Error fetching Product', e);
            }
        },

        getImageUrl(path) {
            return path ? `${path}` : 'https://via.placeholder.com/500';
        },

        addToCart(id) {
            fetch('https://fakestoreapi.com/carts',{
            method:"POST",
            body:JSON.stringify(
                {
                    userId:5,
                    date:'2020-02-03',
                    products:[{productId: id,quantity: 1},]
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
        }
    }
}
</script>

<style></style>