<!-- Cart.vue -->
<template>
    <NavbarVue />

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
                    placeholder="Search items & categories" required>
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


    <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col md:flex-row md:justify-between md:items-center">
            <h1 class="text-2xl font-bold my-4">Shopping Cart</h1>
            <button class="hidden md:block bg-green-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                Checkout
            </button>
        </div>
        <div class="mt-8">
            <div class="flex flex-col md:flex-row border-b border-gray-400 py-4" v-for="item in cart" :key="item.id">
                <div class="flex-shrink-0">
                    <img :src="item.image" alt="Product image" class="w-32 h-32 object-cover">
                </div>
                <div class="mt-4 md:mt-0 md:ml-6">
                    <h2 class="text-lg font-bold">{{ item.title }}</h2>
                    <p class="mt-2 text-gray-600 line-clamp-2">{{ item.description }}</p>
                    <div class="mt-4 flex items-center">
                        <span class="mr-2 text-gray-600">Quantity:</span>
                        <div class="flex items-center">
                            <button class="bg-gray-200 rounded-l-lg px-2 py-1" disabled>-</button>
                            <span class="mx-2 text-gray-600">{{ item.quantity }}</span>
                            <button class="bg-gray-200 rounded-r-lg px-2 py-1" disabled>+</button>
                        </div>
                        <span class="ml-auto font-bold">${{ item.price }}</span>
                    </div>

                    <button  @click='removeFromCart(item.id)' class="md:hidden my-4 bg-red-500 hover:bg-indigo-700 text-white font-bold py-2 px-4">
               Remove
            </button>
                </div>
            </div>

        </div>
        <div class="flex justify-end items-center mt-8">
            <span class="text-gray-600 mr-4">Subtotal:</span>
            <span class="text-xl font-bold">${{ calculateSubtotal() }}</span>
        </div>

        <button class="md:hidden w-full my-4 bg-green-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                Checkout
            </button>
    </div>
</template>
  
<script>
import NavbarVue from '@/components/Layout/Navbar.vue';
import { toast } from 'vue3-toastify';

export default {
    data() {
        return {
            cart: [],
        };
    },

    components: {NavbarVue},
    mounted() {
        // Fetch the cart from localStorage when the component is mounted
        this.fetchCart();
    },
    methods: {
        fetchCart() {
            // Fetch the cart from localStorage
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            this.cart = cart;
        },
        removeFromCart(productId) {
            // Remove the item with the given productId from the cart
            this.cart = this.cart.filter(item => item.id !== productId);

            // Save the updated cart back to localStorage
            localStorage.setItem('cart', JSON.stringify(this.cart));
            toast.success('Item removed')
        },

        calculateSubtotal() {
            // Calculate the subtotal by summing up the prices of all items in the cart
            return this.cart.reduce((total, item) => {
                return total + (item.price * item.quantity);
            }, 0);
        },
    },
};
</script>
  