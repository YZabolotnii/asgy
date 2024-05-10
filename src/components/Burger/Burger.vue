<template>
        <div class="mobile__menu">
        <div class="burger">
            <div class="burger__container">
                <span></span>
            </div>
        </div>
        <nav class="burger__body">
            <ul class="burger__list">
                <li class="burger__item"><router-link class="burger__link" to="/">Головна</router-link></li>
                <li class="burger__item"><router-link class="burger__link" to="/news">Новини</router-link></li>
                <li class="burger__item"><router-link class="burger__link" to="/actions">Події</router-link></li>
                <li class="burger__item"><router-link class="burger__link" to="/filii">Філії</router-link></li>
                <li class="burger__item"><router-link class="burger__link" to="/documents">Документи</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .burger {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #452301;
    }
    .burger__container {
        display: block;
        width: 30px;
        height: 20px;
        left: 0;
        position: relative;
        z-index: 3;
    }
    .burger__container span {
        position: absolute;
        background-color: #452301;
        width: 100%;
        height: 2px;
        left: 0;
        top: 9px;
        transition: all 0.3s ease 0s;
    }
    .burger__container:before, .burger__container:after {
        content: '';
        background-color: #452301;
        position: absolute;
        width: 100%;
        height: 2px;
        left: 0;
        transition: all 0.3s ease 0s;
    }
    .burger__container:before{
        top: 0;
    }
    .burger__container:after{
        bottom: 0;
    }
    .burger__body {
        position: absolute;
        display: flex;
        justify-content: center;
        text-align: center;
        top: -300%;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
        /* padding-top: 150px; */
        z-index: 2;
        transition: all 0.3s ease 0s;
        overflow: auto;
    }
    .mobile__menu {
        position: relative;
    }
    .burger__list {
        display: block;
    }
    .burger__list li {
        padding-bottom: 30px;
    }
    .burger__link {
        font-size: 24px;
        font-weight: 800;
        color: #420;
    }
</style>