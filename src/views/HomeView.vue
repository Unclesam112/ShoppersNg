
<script>
import HeaderVue from "@/components/Layout/Header.vue";
import ProductList from "@/components/ProductList.vue";
import Banner from '@/components/Layout/Banner.vue';
import CategoryList from '@/components/CategoryList.vue';
import FooterVue from '@/components/Layout/Footer.vue';



export default {
  components: {HeaderVue, ProductList, Banner, CategoryList, FooterVue}
}

</script>

<template>
  <main class="bg-gray-50">
    <HeaderVue />

    <div class="category md:hidden">
      <CategoryList />
    </div>

    <div class="md:mx-20">
      <ProductList />
    </div>

    <div class="banner">
      <Banner />
    </div>

    <div class="footer">
      <FooterVue />
    </div>
    
  </main>
</template>
