<template>
    <div class="banner">
        <div class="banner__container">
            <div class="banner__block">
                <div class="banner__logo"><img class="asgu__logo" src="@/assets/Banner/logoBanner.svg" alt="логотип" /></div>
                <div class="banner__image"><img class="tacheometr" src="@/assets/Banner/tacheometr.png" alt="тахеометр" /></div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    * {
        box-sizing: border-box;
    }
    .banner__container {
        display: flex;
        justify-content: center;

        margin-top: 100px;

        position: relative;

    }
    .banner__block {
        width: 1200px;
        display: flex;
        padding: 0 100px;
        /* justify-content: space-around; */
        align-items: end;
        height: 500px;
        margin: 50px;
        background-color: #420;
        overflow: hidden;
        border-radius: 30px;

        background-image: url("@/assets/Banner/back-banner.png");
        background-repeat: repeat;
        background-size: cover;

    }
    .banner__logo {
        margin-bottom: 20px;
    }
    .banner__image {
        position: absolute;
        z-index: 5;
        left: 45%;
        bottom: 7.6%;
    }
    .asgu__logo {
        width: 400px;
    }
    .tacheometr {
        height: 700px;
    }
    @media screen and (max-width: 1000px){
        .banner__block {
            height: 350px;
            padding-left: 50px;
        }
        .banner__image {
            left: 45%;
            bottom: 10.3%;
        }
        .asgu__logo {
            width: 250px;
        }
        .tacheometr {
            height: 500px;
        }
    }
    @media screen and (max-width: 769px){
      .banner__container {
        margin-top: 50px;
      }
        .banner__block {
            height: 300px;
            padding-left: 50px;
        }
        .banner__image {
            left: 45%;
            bottom: 11.5%;
        }
        .asgu__logo {
            width: 200px;
        }
        .tacheometr {
            height: 400px;
        }
    }
    @media screen and (max-width: 620px){
        .banner__block {
            height: 250px;
            padding-left: 20px;
            margin: 100px 20px 50px;
        }
        .banner__image {
            left: 37%;
            bottom: 11.5%;
        }
        .asgu__logo {
            width: 150px;
        }
        .tacheometr {
            height: 350px;
        }
        .banner__container {
            margin-top: 0;
        }
    }
    @media screen and (max-width: 430px){
        .banner__block {
            height: 200px;
            padding-left: 20px;
            margin: 50px 20px 50px;
        }
        .banner__image {
            left: 37%;
            bottom: 13.2%;
        }
        .asgu__logo {
            width: 100px;
        }
        .tacheometr {
            height: 270px;
        }
    }
</style>