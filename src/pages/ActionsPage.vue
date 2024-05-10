<template>
    <div class="actions-page">
        <div class="actions__container">
            <div class="actions__up-items">
                <div class="left__h">Події АСГУ</div>
                <div class="right__logo">
                    <a href=""><img src="@/assets/Asgy/Facebook.png" alt="" width="50" height="50"/></a>
                    <a href=""><img src="@/assets/Asgy/Insta.png" alt="" width="50" height="50"/></a>
                    <a href=""><img src="@/assets/Asgy/Telegram.png" alt="" width="50" height="50"/></a>
                </div>
            </div>

            <div class="actions__main-blocks">

                <div class="actions__main-block" v-for="(item, index) in actionsItems" :key="index">
                    <div class="actions__block">
                        <div class="actions__img">
                            <img width="400" height="400" :src="require(`@/assets/NewsPage/${item.image}`)" alt="Зображення події">
                        </div>
                        <div class="actions__text">
                            <div class="actions__container">
                                <div class="actions__text-up">{{ item.title }}</div>
                                <div class="actions__text-down">{{ item.description }}</div>
                                <div class="opacity"></div>
                            </div>                            
                            <div class="btn">
                                <div class="btn__text">Читати повністю</div>
                            </div>
                        </div>                    
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                actionsItems: [
                    {
                        title: "Меморандум про співпрацю щодо використання БпЛА для створення картографічної основи підписано між Culver Aviation, Асоціацією фахівців землеустрою України та Асоціацією сертифікованих геодезистів України",
                        description: "Урочисте підписання Меморандуму відбулося в рамках заходу «Презентація потреб та інструментів просторового планування», що відбувся 31 травня у місті Київ. Під час зустрічі представники Програми USAID АГРО, територіальних громад, центральних органів виконавчої влади та закладів вищої України розглядали потреби й обговорили інструменти просторового планування, що сприятимуть його розвитку.",
                        image: "newsPage_1.png",
                    },
                    {
                        title: "Меморандум про співпрацю щодо використання БпЛА для створення картографічної основи підписано між Culver Aviation, Асоціацією фахівців землеустрою України та Асоціацією сертифікованих геодезистів України",
                        description: "Урочисте підписання Меморандуму відбулося в рамках заходу «Презентація потреб та інструментів просторового планування», що відбувся 31 травня у місті Київ. Під час зустрічі представники Програми USAID АГРО, територіальних громад, центральних органів виконавчої влади та закладів вищої України розглядали потреби й обговорили інструменти просторового планування, що сприятимуть його розвитку.",
                        image: "newsPage_2.png",
                    },
                ]
            };
        }
    };
</script>

<style scoped>
 .actions-page {
    margin: 0 auto;
    max-width: 1200px;
 }
 .actions__up-items {
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 20px;
    margin-bottom: 20px;
 }
 .left__h {
    color: #420;
    font-size: 36px;
    font-weight: 400;
 }
 .right__logo {
    display: flex;
    gap: 20px;
 }
 .actions__main-blocks {
    display: flex;
    flex-direction: column;
    gap: 100px;
    justify-content: center;
 }
 .actions__block {
    display: flex;
    gap: 50px;
 }
 .actions__text {
    padding: 35px;
    width: 100%;
    height: 400px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;

    border-radius: 50px;
    background: #FFF;
    box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.10);
 }
 .actions__container {
    flex: 1 1 auto;

    position: relative;
 }
 .opacity {
    position: absolute;
    z-index: 2;
    top: 0;
    height: 100%;
    width: 100%;

    background: linear-gradient(357deg, #FFF 24.97%, rgba(255, 255, 255, 0.00) 86.19%);
 }
 .actions__text-up {
    max-height: 175px;
    overflow: hidden;
    margin-bottom: 20px;

    color: #420;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
 }
 .actions__text-down {
    max-height: 175px;
    overflow: hidden;
 }
 .btn {
    margin: 20px auto;

    width: 150px;
    height: 40px;

    border-radius: 30px;
    background: linear-gradient(98deg, #420 17.36%, #28190A 92.86%);
 }
 .btn__text {
    color: #fff;
    text-align: center;
    padding: 10px;
 }
</style>
