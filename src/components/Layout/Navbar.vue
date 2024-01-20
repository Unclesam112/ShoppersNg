<template>
    <nav class="md:bg-white md:border dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" class="hidden md:flex items-center space-x-3 rtl:space-x-reverse">
                <!-- <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" /> -->
                <span class="self-center text-md md:text-3xl md:text-green-500 font-semibold whitespace-nowrap dark:text-white">SHOPPERS</span>
            </a>
            <div class="flex md:order-2 gap-6">
                <!-- <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search"
                    aria-expanded="false"
                    class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span class="sr-only">Search</span>
                </button> -->
                <div class="relative hidden md:inline-block">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span class="sr-only">Search icon</span>
                    </div>
                    <input type="text" id="search-navbar"
                        class="p-3 ps-10 text-sm text-gray-900 shadow-sm border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="What are you looking for?" style="width: 500px">
                </div>
                <button data-collapse-toggle="navbar-search" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-search" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <Icon icon="ep:menu" class="text-green-600" width="20" />
                </button>

                <div class="icon hidden md:flex gap-6 mx-3 pt-1">
                    <div class="cart relative">
                        <Icon  icon="f7:cart" width="40" class="p-2.5 bg-gray-50 rounded-full"/>
                        <div class="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-green-500 border-2 border-white rounded-full -top-2 -end-1 dark:border-gray-900"></div>
                    </div>

                    <div class="user">
                        <img src="../../assets/img/bg-1.jpg" class="w-9 h-9 object-cover  bg-white shadow rounded-full"/>
                    </div>
                </div>
            </div>

            <a href="/" class="md:hidden flex items-center space-x-3 rtl:space-x-reverse">
                <!-- <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" /> -->
                <span class="self-center text-xl md:text-3xl md:text-green-700 font-semibold whitespace-nowrap -
                    mt-0.5 dark:text-white">Shoppers</span>
            </a>

            <div class="md:hidden icon flex gap-2">
                    <div class="cart relative">
                        <router-link to="/cart"><Icon  icon="f7:cart" width="35" class="p-2 bg-white rounded-full" /></router-link>
                        <div class="absolute inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-green-500 border-2 border-white rounded-full top-1 end-0.5 dark:border-gray-900"></div>
                    </div>

                    <div class="user">
                        <img src="../../assets/img/bg-1.jpg" class="w-9 h-9 object-cover  bg-white shadow rounded-full"/>
                    </div>
                </div>


            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                <div class="relative mt-3 md:hidden">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="md:block hidden w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="text" id="search-navbar"
                        class="hidden md:block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search...">
                </div>
                <ul
                    class="flex md:hidden flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <a href="#"
                            class="flex py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                            aria-current="page">
                            <Icon icon="majesticons:home-line" class="mt-1.5 mr-1"/> Home
                            </a>
                    </li>
                    <li>
                        <a href="#"
                            class="flex py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"> <Icon icon="mdi:shop-outline" class="mt-1.5 mr-1"/> Shop</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contacts</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


    <nav class="bg-white shadow dark:bg-gray-700 hidden md:block">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
        <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-md text-gray-500">
                <li>
                    <a href="#" class="flex text-gray-600 dark:text-white hover:underline" aria-current="page"><Icon icon="iconamoon:home-light" class="mt-1.5 mr-1 text-green-700"/> Home</a>
                </li>
                <li>
                    <a href="#" class="flex text-gray-600 dark:text-white hover:underline"> <Icon icon="circum:shop" class="mt-1.5 mr-1 text-green-700" /> Shop</a>
                </li>
                <li>
                    <a href="#" class="flex text-gray-600 dark:text-white hover:underline"><Icon icon="material-symbols:orders-outline" class="mt-1.5 mr-1 text-green-700" />Checkout</a>
                </li>
                <li>
                    <a href="#" class="flex text-gray-600 dark:text-white hover:underline"><Icon icon="solar:delivery-broken" class="mt-1.5 mr-1 text-green-700" /> Orders</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
import { Icon } from '@iconify/vue'

export default {
    components: { Icon }
}
</script>

<style></style>
