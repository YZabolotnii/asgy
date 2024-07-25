<template>
  <div class="home">
    <div class="wrapper-soon">
      <Header/>
      <div class="content-soon">
        <Soon/>
      </div>
      <!--    <Footer />-->
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/Header/Header.vue'
import Soon from '@/views/Soon.vue'
// import Footer from '@/components/Footer/Footer.vue'
</script>
<style scoped>
.wrapper-soon {
  min-height: 100%;
  display: flex;
  flex-direction: column;

}
.content-soon {
  display: flex;
  justify-content: center;
  padding: 100px;
  align-items: center;
  font-size: 36px;
}
</style>