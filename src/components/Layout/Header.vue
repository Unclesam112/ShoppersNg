<template>
  <main>
    <NavbarVue />

    <SearchBarVue />


    <header class="md:mx-16 md:mt-5 mx-3 my-4 md:my-10">
        <section class="bg-white dark:bg-gray-900 rounded-xl">
    <div class="grid max-w-screen-xl py-0  px-4 md:px-4 md:py-8 mx-auto lg:gap-12 xl:gap-0 lg:py-8 lg:grid-cols-12 grid-cols-2">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-xl font-semibold md:font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Every purchase made with pleasure</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 text-xs hidden md:block lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">We work with global brands and have created an application for you to do your shipping</p>
            <a href="#" class="inline-flex items-center text-xs py-1 px-3 justify-center md:px-5 md:py-3 mr-3 text-base font-medium text-center text-white rounded-full bg-orange-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
               shop now
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <!-- <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Speak to Sales
            </a>  -->
        </div>
        <div class=" lg:mt-0 lg:col-span-5 lg:flex">
            <img src="@/assets/img/hero.jpeg" alt="mockup">
        </div>                
    </div>
</section>
    </header>



   <div class="hidden md:block">
    <h1 class="text-2xl font-medium lg:px-16 lg:py-8">Main Categories</h1>
    <div class="grid grid-cols-4 gap-2 lg:mx-16 mx-auto">
                <div class="relative">
                    <img class="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="">
                        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg"></div>
                        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                          <h1 class="text-3xl font-medium">Men's Wear</h1>
                        </div>
                </div>

                <div class="relative">
                    <img class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="">
                        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg"></div>
                        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                          <h1 class="text-3xl font-medium">Women's Wear</h1>
                        </div>
                </div>

                <div class="relative">
                    <img class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="">
                        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg"></div>
                        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                          <h1 class="text-3xl font-medium">Jeweleries</h1>
                        </div>
                </div>

                <div class="relative">
                    <img class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="">
                        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg"></div>
                        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                          <h1 class="text-3xl font-medium">Electronics</h1>
                        </div>
                </div>


                <!-- <div>
                    <img class="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="">
                </div> -->
                <!-- <div>
                    <img class="h-auto max-w-full rounded-lg"
                         alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="">
                </div> -->
                <!-- <div>
                    <img class="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="">
                </div> -->
            </div>
   </div>
  </main>
</template>

<script>
import SearchBarVue from '../SearchBar.vue'
import NavbarVue from './Navbar.vue'


export default {
  components: { NavbarVue, SearchBarVue }
}
</script>

<style scoped></style>
