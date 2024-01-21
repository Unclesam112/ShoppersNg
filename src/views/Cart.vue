<!-- Cart.vue -->
<template>
    <NavbarVue />

    <SearchBarVue/>


    <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col md:flex-row md:justify-between md:items-center">
            <h1 class="text-2xl font-bold my-4">Shopping Cart</h1>
            <button class="hidden md:block bg-green-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                Checkout
            </button>
        </div>
        <div class="mt-8">
            <div class="flex flex-col md:flex-row border-b border-gray-400 py-4" v-if="cart.length > 0" v-for="item in cart" :key="item.id">
                <div class="flex-shrink-0">
                    <img :src="item.image" alt="Product image" class="w-32 h-32 object-contain">
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

            <div v-else class="flex h-auto justify-center items-center">
                <h1 class="text-lg text-gray-300">No item here</h1>

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
import SearchBarVue from '@/components/SearchBar.vue';



export default {
    data() {
        return {
            cart: [],
        };
    },

    components: {NavbarVue, SearchBarVue},
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
  
