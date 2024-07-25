<template>
    <div class="actions">
        <div class="actions__container-m">
            <div class="actions__container">
                <div class="actions__title title">Події</div>
                <div class="actions__block" v-for="(item, index) in actionsItemsMain" :key="index">

                    <div class="actions__right">
                        <img :src="require(`@/assets/News/${item.image}`)" alt="" />
                    </div>

                    <div class="actions__left">
                        
                        <div class="actions__left-container">
                            <div class="actions__text-up">
                                {{ item.title }}
                            </div>
                            <div class="actions__text-bottom">
                                {{ item.body }}
                            </div>
                            <div class="opacity"></div>                            
                        </div>

                        <div class='actions__button dn-900'>
                            <a href="#">Більше</a>
                        </div>
    
                    </div>
                    
                </div>
                <div class="actions__button-m">
                    <div class='actions__button'>
                      <router-link to="/news/memorandum">Більше</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const actionsItemsMain = [
    {
        title: 'Меморандум про співпрацю щодо використання БпЛА для створення картографічної основи підписано між Culver Aviation, Асоціацією фахівців землеустрою України та Асоціацією сертифікованих геодезистів України',
        body: 'Урочисте підписання Меморандуму відбулося в рамках заходу «Презентація потреб та інструментів просторового планування», що відбувся 31 травня у місті Київ. Під час зустрічі представники Програми USAID АГРО, територіальних громад, центральних органів ',
        image: 'news-1.png',
        // hrefButton: 'gg'
    },
];

</script>

<style scoped>
    .actions {
        margin: 50px auto;
    }
    .actions__container {
        margin: 0 auto;
        padding-top: 50px;
        display: flex;
        flex-direction: column;
        max-width: 1200px;
        justify-content: center;
    }
    .actions__container-m {
        margin: 0 50px;
    }
    .actions__block {
        max-width: 1200px;
        height: 500px;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        border-radius: 50px;
        background: #FFF;

        box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.10);
    }
    .actions__left {
        width: 70%;
        padding: 50px;

        display: flex;
        flex-direction: column;
    }
    .actions__right {
        margin: auto 0;

    }
    .actions__right img {

        width: 500px;
        height: 500px;
    }
    .actions__text-up {
        max-height: 150px;
        overflow: hidden;
        color: #420;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;

        margin-bottom: 20px;
    }
    .actions__text-bottom {
        max-height: 130px;
        overflow: hidden;
        color: #420;
        font-size: 20px;
        font-style: normal;
        font-weight: 350;
        line-height: normal;

        margin-bottom: 20px;
    }
    .actions__button {
        margin: 20px auto 0;

        width: 180px;

    }
    .actions__button a{
        border-radius: 30px;
        padding: 15px 25px;
        background: linear-gradient(98deg, #420 17.36%, #28190A 92.86%);

        display: flex;
        justify-content: center;

        color: #FFF;
        font-size: 25px;
    }
    .actions__title {
        text-align: end;
    }
    .title {
        color: #420;
        font-size: 50px;
        font-weight: 500;
    }
    .actions__left-container {
        position: relative;
        overflow: hidden;

        height: 340px;
        flex: 1 0 auto;
    }
    .opacity {
        position: absolute;
        z-index: 2;
        top: 0;
        height: 100%;
        width: 100%;

        background: linear-gradient(357deg, #FFF 24.97%, rgba(255, 255, 255, 0.00) 86.19%);
    }
    .actions__button-m {
        display: none;
    }
    @media screen and (max-width: 1000px) {
        .actions__block {
            height: 400px;
        }
        .actions__left-container {
            height: 248px;
        }
        .actions__left {
            padding: 25px;
        }
        .actions__text-up {
            max-height: 80px;
        }
        .actions__right img {
            width: 400px;
            height: 400px;
        }
    }
    @media screen and (max-width: 900px) {
        .actions__block {
            height: 300px;
        }
        .actions__container-m {
            margin: 0 20px;
        }
        .actions__text-up {
            max-height: 68px;

            font-size: 20px;
        }
        .actions__text-bottom {
            max-height: 167px;
            margin-bottom: 0;
            font-size: 18px;
        }
        .opacity {
            top: 60px;
            height: 77%;
        }
        .actions__right {
            margin: 0;
        }
        .actions__right img {
            width: 300px;
            height: 300px;
        }
        .dn-900 {
            display: none;
        }
        .actions__button-m {
            display: block;
        }
    }
    @media screen and (max-width: 650px) {
        .actions__block {
            border-radius: 20px;
        }
        .actions__container {
            padding: 0;
        }
        .actions__container-m {
            margin: 0 10px;
        }
        .actions__text-up {
            max-height: 63px;
            font-size: 18px;
        }
        .actions__text-bottom {
            font-size: 16px;
        }
        .actions__left {
            padding: 20px 5px 10px 15px;
        }
        .actions__button {
            margin: 20px auto 0;
            width: 140px;
        }
        .actions__button a{
            border-radius: 30px;
            padding: 10px 10px;
            background: linear-gradient(98deg, #420 17.36%, #28190A 92.86%);
            display: flex;
            justify-content: center;
            color: #FFF;
            font-size: 18px;
        }
    }
    @media screen and (max-width: 600px) {
        .actions__block {
            height: 270px;
        }
        .actions__right img {
            width: 240px;
            height: 270px;
        }
        .actions__text-bottom {
            max-height: 145px;
        }
        .opacity {
            height: 70%;
        }
    }
    @media screen and (max-width: 500px) {
      .title {
        font-size: 32px;
      }
      .actions__left-container {
        width: 170px;
      }
      .actions__block {
          height: 170px;
      }
      .actions__right img {
          width: 170px;
          height: 170px;
      }
      .actions__text-up {
        max-height: 40px;
        font-size: 16px;
      }
      .actions__text-bottom {
        max-height: 65px;
        font-size: 14px;
      }
      .opacity {
        top: 50px;
        height: 40%;
        border-bottom-right-radius: 16px;
      }
    }
</style>