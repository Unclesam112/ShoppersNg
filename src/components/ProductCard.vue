<template>
    <div
        class="w-full relative max-w-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow mx-auto">
        <div class="sm:p-2 absolute top-0 sm:right-4 right-2">
            <Icon icon="ph:heart-light" class="text-lg text-orange-500 sm:p-2 md:bg-gray-50 rounded-md" />
        </div>

        <img  @click="goToDetails(product.id)" class="md:p-8 p-2 sm:w-40 sm:h-40 w-20 h-20 object-contain mx-auto rounded-t-lg" :src="product.image" alt="product image" />

        <div class="sm:px-5 pb-5">
            <a href="#">
                <h5 class="md:text-sm text-xs font-medium tracking-tight text-gray-900 dark:text-white line-clamp-2 sm:truncate">{{ product.title }}
                </h5>
            </a>
            <div class="md:flex items-center mt-2.5 mb-5 hidden ">
                <div class="flex items-center space-x-1 rtl:space-x-reverse">
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" viewBox="0 0 22 20">
                        <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" viewBox="0 0 22 20">
                        <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" viewBox="0 0 22 20">
                        <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" viewBox="0 0 22 20">
                        <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                </div>
                <span
                    class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
            </div>
            <div class="flex items-center justify-between">
                <span class="md:text-lxl pt-0.5 sm:text-md text-sm font-medium text-gray-900 dark:text-white">${{ product.price
                }}</span>
                <div class="p-5">
                    <Icon @click="addToCart(product)" icon="ion:cart" class="text-orange-500" width="20" />
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import Button from './Button.vue';
import { Icon } from '@iconify/vue';
import { toast } from 'vue3-toastify';

export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    },

    components: { Button, Icon },

    data() {

    },

    methods: {
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

        goToDetails(id) {
            this.$router.push(`/product/${id}`)
        }
    }

}
</script>

<style></style>
