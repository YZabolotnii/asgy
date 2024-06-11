<template>
    <div class="page-news">
        <div class="page-news__container">
            <div class="page-news__messengers">
                <div class="right__logo">
                    <a href=""><img class="ico" src="@/assets/Asgy/Facebook.png" alt="" /></a>
                    <a href=""><img class="ico" src="@/assets/Asgy/Insta.png" alt="" /></a>
                    <a href=""><img class="ico" src="@/assets/Asgy/Telegram.png" alt="" /></a>
                </div>
            </div>
            <div class="page-news__banner banner__container">
                <div class="banner__container-img">
                    <img src="@/assets/NewsPage/banner_news.png" alt="">
                </div>
            </div>
            <div class="page-news__text nptext">
                <div class="nptext__container">
                    <div class="nptext__up">
                        <div class="long"></div>
                        <div class="nptext__up-text">Меморандум про співпрацю щодо використання БпЛА для створення картографічної основи підписано між Culver Aviation, Асоціацією фахівців землеустрою України та Асоціацією сертифікованих геодезистів України</div>
                    </div>
                    <div v-for="(text, index) in textItems" :key="index" class="nptext__down">  
                        <p class="indent">{{ text.textIndent  }}</p>
                        <p>{{ text.textDefault }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
 const textItems = [
      {
          textIndent: 'Урочисте підписання Меморандуму відбулося в рамках заходу «Презентація потреб та інструментів просторового планування», що відбувся 31 травня у місті Київ. Під час зустрічі представники Програми USAID АГРО, територіальних громад, центральних органів виконавчої влади та закладів вищої України розглядали потреби й обговорили інструменти просторового планування, що сприятимуть його розвитку.'
      },
      {
          textDefault: 'У рамках підписаного Меморандуму члени громадських організацій отримують знижку до 20% на послуги від Culver Aviation, зокрема топозйомку, аерофотозйомку, дистанційне зондування Землі за допомогою БпЛА та/або підготовка ортофотопланів та ін.'
      },
      {
          textDefault: 'Разом з партнерами спеціалісти Culver Aviation працюватимуть над створенням картографічної основи за допомогою БпЛА та впровадженням сервісів високоточного визначення геодезичних координат Системи координатно-часового та навігаційного забезпечення України (далі – СКНЗУ).'
      },
      {
          textDefault: 'Разом з партнерами спеціалісти Culver Aviation працюватимуть над створенням картографічної основи за допомогою БпЛА та впровадженням сервісів високоточного визначення геодезичних координат Системи координатно-часового та навігаційного забезпечення України (далі – СКНЗУ).'
      },
      {
          textDefault: 'СКНЗУ призначена для здійснення моніторингу стану радіонавігаційного поля, яке формують системи GPS, та для постачання користувачам GNSS додаткової інформації, необхідної для підвищення точності та надійності місця визначення у реальному масштабі часу.'
      },
      {
          textDefault: ''
      },
  ]
</script>

<style scoped>
    .page-news {
        margin-bottom: 100px;
    }
    .page-news__messengers {
        margin: 10px auto 30px;
        max-width: 1200px;
        padding: 0 20px;
    }
    .right__logo {
        display: flex;
        gap: 20px;
        justify-content: end;
    }
    .banner__container {
        margin: 0 auto;
        max-width: 1920px;
        /* max-height: 700px; */
        height:fit-content;
    }
    .banner__container-img {
        max-width: 1920px;
        height: 100%;
    }
    .banner__container-img img{
        width: 100%;
        object-fit: cover;
    }
    .page-news__text {
        max-width: 1920px;
        margin: 0 auto;
    }
    .nptext__container {
        margin: -4px 50px;
        padding: 50px;
        border-radius: 0 0 50px 50px;
        background: #FFF;
        box-shadow: -10px 0 10px rgba(0, 0, 0, 0.10), 10px 0 10px rgba(0, 0, 0, 0.10), 0 10px 10px rgba(0, 0, 0, 0.10), 0 0 0 rgba(0, 0, 0, 0); 
    }
    .nptext__up {
        display: flex;
        margin-bottom: 50px;
    }
    .long {
        width: 15px;
        background: #420;
        height: auto;
        margin: 10px 50px 10px 10px;
    }
    .nptext__up-text {
        font-size: 36px;    
    }
    .nptext__down {
        font-size: 26px;
    }
    .ico {
      width: 50px;
      height: 50px;
    }
    .indent {
        text-indent: 40px;
    }
    p {
        margin: 5px 0;
    }
    @media screen and (max-width: 1200px) {
        .nptext__up-text {
        font-size: 28px;    
    }
        .nptext__down {
            font-size: 24px;
        }
    }
    @media screen and (max-width: 800px) {
        .long {
            display: none;
        }
        .nptext__up-text {
            font-size: 22px;    
        }
        .nptext__down {
            font-size: 18px;
        }
        .nptext__up {
            margin-bottom: 20px;
        }
    }
    @media screen and (max-width: 769px) {
      .page-news__messengers {
        margin-top: 0;
        margin-bottom: 20px;
      }
      .ico {
        width: 30px;
        height: 30px;
      }
    }
    @media screen and (max-width: 700px) {
        .nptext__container {
            margin: -4px 20px;
            padding: 20px;
        }
        .long {
            display: none;
        }
        .nptext__up-text {
            font-size: 18px;    
        }
        .nptext__down {
            font-size: 14px;
        }
        .nptext__up {
            margin-bottom: 20px;
        }
        .indent {
            text-indent: 20px;
        }
        .page-news {
            margin-bottom: 50px;
        }
    }
</style>