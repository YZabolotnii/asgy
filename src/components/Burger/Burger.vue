<template>
  <div class="burger-menu">
    <button @click="toggleMenu" class="burger-button">
      <span :class="{ open: isOpen }"></span>
      <span :class="{ open: isOpen }"></span>
      <span :class="{ open: isOpen }"></span>
    </button>
    <nav :class="{ open: isOpen }" class="menu">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
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
    color: #007BFF;
  }
}
</style>



<!--<template>-->
<!--        <div class="mobile__menu">-->
<!--        <div class="burger">-->
<!--            <div class="burger__container">-->
<!--                <span></span>-->
<!--            </div>-->
<!--        </div>-->
<!--        <nav class="burger__body">-->
<!--            <ul class="burger__list">-->
<!--                <li class="burger__item"><router-link class="burger__link" to="/">Головна</router-link></li>-->
<!--                <li class="burger__item"><router-link class="burger__link" to="/news">Новини</router-link></li>-->
<!--                <li class="burger__item"><router-link class="burger__link" to="/actions">Події</router-link></li>-->
<!--                <li class="burger__item"><router-link class="burger__link" to="/filii">Філії</router-link></li>-->
<!--                <li class="burger__item"><router-link class="burger__link" to="/documents">Документи</router-link></li>-->
<!--            </ul>-->
<!--        </nav>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->

<!--}-->
<!--</script>-->

<!--<style>-->
<!--    .burger {-->
<!--        width: 50px;-->
<!--        height: 50px;-->
<!--        display: flex;-->
<!--        justify-content: center;-->
<!--        align-items: center;-->
<!--        border: 1px solid #452301;-->
<!--    }-->
<!--    .burger__container {-->
<!--        display: block;-->
<!--        width: 30px;-->
<!--        height: 20px;-->
<!--        left: 0;-->
<!--        position: relative;-->
<!--        z-index: 3;-->
<!--    }-->
<!--    .burger__container span {-->
<!--        position: absolute;-->
<!--        background-color: #452301;-->
<!--        width: 100%;-->
<!--        height: 2px;-->
<!--        left: 0;-->
<!--        top: 9px;-->
<!--        transition: all 0.3s ease 0s;-->
<!--    }-->
<!--    .burger__container:before, .burger__container:after {-->
<!--        content: '';-->
<!--        background-color: #452301;-->
<!--        position: absolute;-->
<!--        width: 100%;-->
<!--        height: 2px;-->
<!--        left: 0;-->
<!--        transition: all 0.3s ease 0s;-->
<!--    }-->
<!--    .burger__container:before{-->
<!--        top: 0;-->
<!--    }-->
<!--    .burger__container:after{-->
<!--        bottom: 0;-->
<!--    }-->
<!--    .burger__body {-->
<!--        position: absolute;-->
<!--        display: flex;-->
<!--        justify-content: center;-->
<!--        text-align: center;-->
<!--        top: -300%;-->
<!--        left: 0;-->
<!--        width: 100%;-->
<!--        height: 100%;-->
<!--        background-color: #fff;-->
<!--        /* padding-top: 150px; */-->
<!--        z-index: 2;-->
<!--        transition: all 0.3s ease 0s;-->
<!--        overflow: auto;-->
<!--    }-->
<!--    .mobile__menu {-->
<!--        position: relative;-->
<!--    }-->
<!--    .burger__list {-->
<!--        display: block;-->
<!--    }-->
<!--    .burger__list li {-->
<!--        padding-bottom: 30px;-->
<!--    }-->
<!--    .burger__link {-->
<!--        font-size: 24px;-->
<!--        font-weight: 800;-->
<!--        color: #420;-->
<!--    }-->
<!--</style>-->

<!--
<template>
  <div class="burger-menu">
    <button @click="toggleMenu" class="burger-button">
      <span :class="{ open: isOpen }"></span>
      <span :class="{ open: isOpen }"></span>
      <span :class="{ open: isOpen }"></span>
    </button>
    <nav :class="{ open: isOpen }" class="menu">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
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
@media screen and (max-width: 760px) {
  .burger-menu {
    display: block;
    position: relative;
    height: 30px;
    width: 30px;
  }
  .burger-button {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 30px;
    background: transparent;
    border: none;
    cursor: pointer;

    z-index: 10;
    position: absolute;
  }

  .burger-button span {
    width: 100%;
    height: 3px;
    background: #333;
    transition: all 0.3s;
  }

  .burger-button span.open:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .burger-button span.open:nth-child(2) {
    opacity: 0;
  }

  .burger-button span.open:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
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
    color: #007BFF;
  }
}
</style>
-->