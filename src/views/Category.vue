<template>
    <main>
        <div class="navbar">
            <NavbarVue />
        </div>

       <SearchBarVue />


        <div class=" md:p-10 p-5 pt-5 mb-10">

            <div class="flex justify-between my-4">
                <h1 class="capitalize font-semibold text-lg md:text-2xl">{{ this.$route.params.id }}</h1>

                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                    class="text-white font-semibold bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button">Sort <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 4 4 4-4" />
                    </svg>
                </button>

                <!-- Dropdown menu -->
                <div id="dropdown"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <a href="#"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign
                                out</a>
                        </li>
                    </ul>
                </div>

            </div>

            <div class="grid grid-cols-2 md:grid-cols-5  gap-4">
                <div class="col" v-for="(product, index) in products" :key="index">
                    <ProductCard :product="product" />
                </div>
            </div>
        </div>


        <FooterVue />
    </main>
</template>

<script>

import NavbarVue from '@/components/Layout/Navbar.vue'
import ProductCard from '@/components/ProductCard.vue'
import axios from 'axios'
import FooterVue from '@/components/Layout/Footer.vue'
import SearchBarVue from '@/components/SearchBar.vue'


export default {
    components: { NavbarVue, ProductCard, FooterVue, SearchBarVue },

    data() {
        return {
            products: []
        }
    },

    mounted() {
        this.fetchProducts()
    },

    methods: {
        async fetchProducts() {
            try {
                const categoryId = this.$route.params.id
                const res = await axios.get(`https://fakestoreapi.com/products/category/${categoryId}`)
                this.products = res.data
                console.log(res.data);
            }

            catch (e) {
                console.log(e)
            }
        },
    }
}
</script>

<style></style>