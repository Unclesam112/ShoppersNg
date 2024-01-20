<template>
  <main>
    <NavbarVue />

    <SearchBarVue />


    <header class="md:mx-20 mx-3 my-10">


      <div id="animation-carousel" class="relative w-full" data-carousel="static">
        <!-- Carousel wrapper -->
        <div class="relative h-48 overflow-hidden rounded-lg md:h-96">
          <!-- Item 1 -->
          <div class="hidden duration-200 ease-linear relative" data-carousel-item>
            <img src="../../assets/img/bg-1.jpg" class="block w-full h-full object-cover top-0 left-0" alt="...">

            <!-- Overlay -->
            <div class="absolute inset-0 bg-black opacity-50"></div>

            <!-- Text and Button -->
            <div
              class="absolute md:m-20 m-5  mt-8 md:mt-20 md:top-28 top-16  left-4 transform -translate-y-1/2 text-white ">
              <div class="grid md:grid-cols-3">
                <div class="md:col-span-2">
                  <h2 class="md:text-6xl text-2xl font-bold">Chic Attire, Radiant Adornments</h2>
                  <p class="hidden md:block mt-2 text-sm md:text-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                  <button type="button"
                    class="text-white bg-green-500 my-2 mb-0 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full md:text-sm text-xs px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Shop now
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </button>


                </div>
              </div>
            </div>
          </div>
          <!-- Item 2 -->
          <div class="hidden duration-200 ease-linear" data-carousel-item>
            <img src="../../assets/img/bg-2.jpg" class="absolute block w-full h-full object-cover top-0 left-0" alt="...">
          </div>
        </div>


        <!-- Slider controls -->
        <button type="button"
          class="absolute top-0 start-0 z-30 hidden md:flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev>
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 1 1 5l4 4" />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button type="button"
          class="absolute top-0 end-0 z-30 hidden md:flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next>
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 9 4-4-4-4" />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>

    </header>
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
