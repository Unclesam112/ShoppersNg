<template>
    <main>
        <form class="md:hidden flex items-center mt-4 mx-3">
            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                    </svg>
                </div>
                <input type="text" id="simple-search"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search items & categories" v-model="searchTerm" @input="searchProducts" required>
            </div>
            <button type="submit"
                class="p-2.5 ms-2 text-sm font-medium text-white bg-green-700 rounded-lg border border-greem-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span class="sr-only">Search</span>
            </button>
        </form>

        <ul  v-if="searchTerm !== ''" class="m-5">
            <div>
                <p>{{ filteredProducts.length }} results found for "{{ searchTerm }}"</p>
            </div>
            <li v-for="product in filteredProducts" :key="product.id">
                <div
                    class="p-2 my-2 flex items-center bg-white rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <!-- <MovieCardVue :movie="movie"/> -->
                    <img :src="product.image" :alt="product.title" class="w-14 card-image rounded md:rounded-md" />
                    <div class="flex flex-col justify-between pt-1.5 leading-normal">
                        <h5
                            class="mb-2 text-sm px-2 font-medium tracking-tight text-gray-900 dark:text-white truncate w-48">
                            {{
                                product.title }}
                        </h5>
                        <button type="button" @click.prevent="addToCart(product)"
                            class="px-3 py-1 text-xs font-medium text-center inline-flex items-center text-gray-900  rounded focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg class="w-2 h-2 mr-2 text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 1v16M1 9h16" />
                            </svg>
                            Add to cart

                        </button>

                        <!-- <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400 line-clamp-2">{{ movie.overview }}</p> -->
                    </div>
                </div>
            </li>
        </ul>
    </main>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            products: [],
            filteredProducts: [],
            searchTerm: "",
        };
    },

    mounted() {
        this.fetchProducts();
    },

    methods: {
        async fetchProducts() {
            try {
                const response = await axios.get("https://fakestoreapi.com/products");
                this.products = response.data;
                this.filteredProducts = this.products;
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        },
        performSearch(searchTerm) {
            this.searchTerm = searchTerm;
            if (searchTerm === "") {
                this.filteredProducts = this.products;
            } else {
                this.filteredProducts = this.products.filter((product) =>
                    product.title.toLowerCase().includes(searchTerm.toLowerCase())
                );
            }
        },

        addToCart(product) {
            // Fetch existing cart items from localStorage
            const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

            // Check if the product is already in the cart
            const existingProductIndex = existingCart.findIndex(item => item.id === product.id);

            if (existingProductIndex !== -1) {
                // If the product is already in the cart, increase its quantity
                existingCart[existingProductIndex].quantity += 1;
            } else {
                // If the product is not in the cart, add it
                existingCart.push({ ...product, quantity: 1 });
                toast.success('Added to cart')
                console.log('Added to cart');
            }

            // Save the updated cart back to localStorage
            localStorage.setItem('cart', JSON.stringify(existingCart));
        },
    },
}
</script>

<style></style>