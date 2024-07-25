<template>
  <Header />
    <router-view></router-view>
  <Footer />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  box-sizing: border-box;
}
.ul, ol, li {
  list-style: none;
}
a {
  text-decoration: none;
}
body {
  margin: 0;
}
</style>
<script setup>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
</script>