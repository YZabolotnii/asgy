<template>  
    <div class="news-page">
        <div class="news__container">
            <div class="news__up-items">
                <div class="left__h">Новини АСГУ</div>
                <div class="right__logo">
                    <a href=""><img class="ico" src="@/assets/Asgy/Facebook.png" alt=""/></a>
                    <a href=""><img class="ico" src="@/assets/Asgy/Insta.png" alt=""/></a>
                    <a href=""><img class="ico" src="@/assets/Asgy/Telegram.png" alt=""/></a>
                </div>
            </div>

            <div class="news__main-blocks">

                <div class="news__main-block" v-for="(item, index) in newsItems" :key="index">
                    <div class="news__block">
                        <div class="news__img">
                            <img class="img" :src="require(`@/assets/NewsPage/${item.image}`)" alt="">
                        </div>
                        <div class="news__text">
                            <div class="news__text-up">{{ item.title }}</div>
                            <div class="news__text-down">{{ item.description }}</div>
                            
                            <div class="btn">
                                <router-link to="/news/memorandum">
                                    <div class="btn__text">Читати повністю</div>
                                </router-link>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script setup>
const newsItems =  [
            {
                title: "Меморандум про співпрацю щодо використання БпЛА для створення картографічної основи підписано між Culver Aviation, Асоціацією фахівців землеустрою України та Асоціацією сертифікованих геодезистів України",
                description: "Урочисте підписання Меморандуму відбулося в рамках заходу «Презентація потреб та інструментів просторового планування», що відбувся 31 травня у місті Київ. Під час зустрічі представники Програми USAID АГРО, територіальних громад, центральних органів виконавчої влади та закладів вищої України розглядали потреби й обговорили інструменти просторового планування, що сприятимуть його розвитку.",
                image: "newsPage_1.png",
                alt: "Зображення новин"
            },
            {
                title: "Меморандум про співпрацю щодо використання БпЛА для створення картографічної основи підписано між Culver Aviation, Асоціацією фахівців землеустрою України та Асоціацією сертифікованих геодезистів України",
                description: "Урочисте підписання Меморандуму відбулося в рамках заходу «Презентація потреб та інструментів просторового планування», що відбувся 31 травня у місті Київ. Під час зустрічі представники Програми USAID АГРО, територіальних громад, центральних органів виконавчої влади та закладів вищої України розглядали потреби й обговорили інструменти просторового планування, що сприятимуть його розвитку.",
                image: "newsPage_2.png",
                alt: "Зображення новин"
            },
        ];
</script>
<style scoped>
.news-page {
  margin: 0 auto;
  max-width: 1200px;
}
.news__up-items {
  padding: 0 170px;
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
.news__main-blocks {
  display: flex;
  gap: 100px;
  justify-content: center;
  margin-bottom: 100px;
}
.news__block {
  max-width: 400px;
  border-radius: 50px;
  background: #FFF;
  box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.10);
}
.img {
  width: 400px;
  height: 400px;
}
.news__text {
  padding: 20px 30px;
  overflow: hidden;
}
.news__text-up {
  margin-bottom: 20px;
}
.news__text-down {
  margin-bottom: 20px;
}
.btn {
  margin: auto;
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
@media screen and (max-width: 1200px) {
.news__up-items {
  padding: 0 7%;
  }
}
@media screen and (max-width: 1000px) {
  .news__main-blocks {
    gap: 50px;
  }
  .news__block {
    width: 300px;
    max-height: 860px;
  }
  .img {
    width: 300px;
    height: 300px;
  }
  .news__text {
    padding: 20px 15px;
    overflow: hidden;
  }
}
.ico {
  width: 50px;
  height: 50px;
}
@media screen and (max-width: 679px) {
  .news__main-blocks {
    gap: 20px;
  }
  .news__block {
    width: 250px;
    max-height: 860px;
    border-radius: 26px;
  }
  .img {
    width: 250px;
    height: 250px;
  }
  .news__text-down {
    display: none;
  }
  .ico {
    width: 30px;
    height: 30px;
  }
}
@media screen and (max-width: 550px) {
  .left__h {
    font-size: 24px;
  }
  .right__logo {
    gap: 10px;
  }
  .news__main-blocks {
    flex-direction: column;
  }
  .news__main-block {
    display: flex;
    justify-content: center;
  }
  .news__block {
    width: 300px;
    max-height: 860px;
  }
  .img {
    width: 300px;
    height: 300px;
  }
}
</style>