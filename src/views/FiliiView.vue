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
.content-soon {
  display: flex;
  justify-content: center;
  padding: 100px;
  align-items: center;
  font-size: 36px;
}
</style>