<template>
  <div class="burger-menu">
    <button @click="toggleMenu" class="burger-button">
      <span :class="{ open: isOpen }"></span>
      <span :class="{ open: isOpen }"></span>
      <span :class="{ open: isOpen }"></span>
    </button>
    <nav :class="{ open: isOpen }" class="menu">
      <ul>
        <li><router-link to="/">Головна</router-link></li>
        <li><router-link to="/news">Новини</router-link></li>
        <li><router-link to="/actions">Події</router-link></li>
        <li><router-link to="/filii">Філії</router-link></li>
        <li><router-link to="/documents">Документи</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.burger-menu {
  display: none;
}
@media screen and (max-width: 769px) {
  .burger-menu {
    display: block;
    position: relative;
    height: 40px;
    width: 40px;
    border: 1px solid #452301;
  }
  .burger-button {
    padding: 4px!important;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 40px;
    height: 40px;
    background: transparent;
    border: none;
    cursor: pointer;

    z-index: 10;
    position: absolute;
  }

  .burger-button span {
    width: 100%;
    height: 2px;
    background: #333;
    transition: all 0.3s;
  }

  .burger-button span.open:nth-child(1) {
    transform: rotate(45deg) translate(8px, 7px);
  }

  .burger-button span.open:nth-child(2) {
    opacity: 0;
  }

  .burger-button span.open:nth-child(3) {
    transform: rotate(-45deg) translate(8px, -8px);
  }

  .menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100%;
    background: #fff;
    transition: right 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 6;
  }

  .menu.open {
    right: 0;
    overflow: hidden;
  }

  .menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
  }

  .menu li {
    margin: 20px 0;
  }

  .menu a {
    text-decoration: none;
    color: #333;
    font-size: 24px;
  }

  .menu a:hover {
    color: #452301;
  }
}
</style>