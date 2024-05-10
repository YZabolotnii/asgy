<template>
  <div class="home">
    <Header/>
    <AsgyPage/>
    <Footer />
  </div>
</template>

<script setup>
// @ is an alias to /src
import AsgyPage from '@/pages/AsgyPage.vue'
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
</script>