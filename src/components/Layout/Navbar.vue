<template>
    <nav class="bg-white border-b-1 border-gray-300 text-white shadow dark:bg-gray-700 hidden md:block">
        <div class="max-w-screen-xl px-4 py-1.5 mx-auto">
            <div class="flex items-center justify-between">
                <h1 class="text-xs text-gray-700">Free shipping around lagos state</h1>
                <p class="text-gray-900 text-xs">Get in touch with (090-123-4567)</p>
                <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-md text-gray-500">
                    <li class="">
                        <a href="#" class="text-xs flex text-gray-900 dark:text-white hover:underline " aria-current="page">
                            Home</a>
                    </li>
                    <li>
                        <a href="#" class="text-xs flex text-gray-900 dark:text-white hover:underline">Shop</a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
    <nav class="md:bg-white md:border dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 py-2">
            <a href="/" class="hidden md:flex items-center space-x-3 rtl:space-x-reverse">
                <!-- <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" /> -->
                <div class="bg-orange-500 rounded-full">
                    <Icon icon="mdi:cart-variant" width="60" class="p-2.5 text-white bg-orange-500 rounded-full" />
                </div>
                <span
                    class="self-center text-md md:text-3xl md:text-gray-900 font-medium whitespace-nowrap dark:text-white">SHOPPERS</span>
                <sub class=""></sub>
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

                <button data-collapse-toggle="navbar-search" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-search" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <Icon icon="ep:menu" class="text-orange-500" width="20" />
                </button>



                <div class="buttons hidden  md:flex">
                    <button type="button"
                        class="text-white bg-orange-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-2 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        <Icon icon="prime:heart-fill" width="18" class="text-white" />
                    </button>

                    <button type="button"
                        class="text-white bg-gray-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-2 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        <Icon icon="solar:delivery-bold" width="18" class="text-white" />
                    </button>

                    <button type="button"
                        class="text-white flex gap-1 bg-gray-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-2 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        <Icon icon="clarity:dollar-solid" width="18px" height="18px"  style="color: white" />
                       USD
                    </button>


                    <div
                        class="relative inline-flex items-center justify-center w-10 h-10 -mt-1.5 overflow-hidden bg-orange-500 rounded-full dark:bg-gray-600">
                        <span class="font-medium text-white dark:text-gray-300">A</span>
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
                    <router-link to="/cart">
                        <Icon icon="f7:cart" width="35" class="p-2 bg-white rounded-full" />
                    </router-link>
                    <div
                        class="absolute inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-orange-500 border-2 border-white rounded-full top-1 end-0.5 dark:border-gray-900">
                    </div>
                </div>

                <div class="user">
                    <img src="../../assets/img/bg-1.jpg" class="w-9 h-9 object-cover  bg-white shadow rounded-full" />
                </div>
            </div>



        </div>
    </nav>


    <nav class="bg-gray-700 text-white shadow dark:bg-gray-700 hidden md:block">
        <div class="max-w-screen-xl px-4  mx-auto">
            <div class="mx-auto w-full">

                <form>
                    <div class="flex justify-between gap-8">


                        <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover"
                            class="text-white flex justify-between w-1/2 bg-black hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            type="button"><span class="flex gap-1"><Icon  icon="material-symbols:menu" width="20px" height="20px"  style="color: white" />ALL CATEGORIES</span> <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 4 4 4-4" />
                            </svg>
                        </button>

                        <!-- Dropdown menu -->
                        <div id="dropdownHover"
                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
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





                        <div class="relative w-full my-1">
                            <input type="search" id="location-search"
                                class="block p-1 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                                placeholder="Search for city or address" required>
                            <button type="submit"
                                class="absolute top-0 end-0 h-full p-2 px-3 text-sm font-medium text-white bg-gray-500 border border-gray-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span class="sr-only">Search</span>
                            </button>
                        </div>


                        <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover"
                            class="text-white w-1/2 flex justify-between bg-orange-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            type="button"><span class="flex gap-1"><Icon icon="solar:cart-3-bold" width="20px" height="20px"  style="color: white" />My cart: 0 items</span> <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 4 4 4-4" />
                            </svg>
                        </button>

                        <!-- Dropdown menu -->
                        <div id="dropdownHover"
                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
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
                </form>

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
