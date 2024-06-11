<template>
    <header class="header">
        <div class="header__container">
            <a href="" class="header__logo">
                <img src="@/assets/Header/logo.svg" alt="Logo" />
            </a>
            <div class="header__menu menu">
                <nav class="menu__body">
                    <ul class="menu__list">
                        <li class="menu__item"><router-link class="menu__link" to="/">Головна</router-link></li>
                        <li class="menu__item"><router-link class="menu__link" to="/news">Новини</router-link></li>
                        <li class="menu__item"><router-link class="menu__link" to="/actions">Події</router-link></li>
                        <li class="menu__item"><router-link class="menu__link" to="/filii">Філії</router-link></li>
                        <li class="menu__item"><router-link class="menu__link" to="/documents">Документи</router-link></li>
                    </ul>
                </nav>
            </div>
            <div class="header__button button">
                <a href="" class="button__text">Почати</a>
            </div>
            <Burger />
        </div>
    </header>
</template>
<script setup>
import Burger from '@/components/Burger/Burger.vue'
</script>
<style>
/* .header {} */
.header__container {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    max-width: 1200px;
}
.header__logo img{
  width: 80px;
  height: 80px;
}
.menu__list {
    display: flex;
    padding: 0;
    border-radius: 60px;
    border: 1px solid #452301;    
}
.menu__item {
    padding: 9px 0;
}
.menu__link:hover {
    color: #fff;
    background-color: #452301;
}
.menu__link{
    color: #420;
    font-size: 24px;
    padding: 10px 30px;
    border-radius: 60px;
    transition: all .7s ease;
}
.menu__link.router-link-exact-active{
    color: #fff;
    background-color: #452301;
    transition: all .7s ease;
}
.button {
    font-size: 24px;
    padding: 10px 30px;
    border-radius: 30px;
    border: 1px solid #452301;
    transition: all .5s ease;
}
.button:hover {
    background-color: #452301;
    border-radius: 60px;
}
.button:hover .button__text{
    color: #fff;
}
.button__text {
    color: #420;
    font-size: 24px;
}

.button.router-link-exact-active {
    background-color: #452301;
    border-radius: 60px;
}
.button__text.router-link-exact-active{
    color: #fff;
}
@media screen and (max-width: 1100px){
    .menu__link{
        font-size: 20px;
        padding: 5px 15px;
        border-radius: 60px;
        transition: all .7s ease;
    }
    .menu__item {
        padding: 5px 0 4px;
    }
    .button {
        padding: 4px 15px 6px;
        border-radius: 30px;
        border: 1px solid #452301;
        transition: all .5s ease;
    }
    .button__text {
        color: #420;
        font-size: 20px;
    }
}
@media screen and (max-width: 769px){
  .header__menu {
    display: none;
  }
  .header__logo img{
    width: 50px;
    height: 50px;
  }
}
</style>