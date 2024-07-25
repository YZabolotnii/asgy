<template>
  <div class="home">
      <div class="content-soon">
        <Soon/>
      </div>
  </div>
</template>

<script setup>
import Soon from '@/views/Soon.vue'
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