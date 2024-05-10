<template>
            <div class="asgy">
            <div class="asgy__container">
                <div class="asgy__block aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="top-bottom">
                    <div class="asgy__about about-asgy">
                        <div class="about-asgy__title">Що таке АСГУ?</div>
                        <div class="about-asgy__text"><strong>Асоціація сертифікованих геодезистів України (АСГУ)</strong> - громадська організація для сертифікованих інженерів-геодезистів, яка має на меті колективно вирішувати науково - технічні проблеми, спільно обговорювати та прогнозувати перспективи розвитку геодезії, підтримувати у професійних питаннях та захищати соціальні та економічні інтереси своїх членів.</div>
                        <div class="about-asgy__messangers">
                            <a href=""><img src="@/assets/Asgy/Facebook.png" alt="" /></a>
                            <a href=""><img src="@/assets/Asgy/Insta.png" alt="" /></a>
                            <a href=""><img src="@/assets/Asgy/Telegram.png" alt="" /></a>
                        </div>
                    </div>
                    <div class="asgy__images images-asgy">
                        <div class="images-asgy__block1">
                            <div class="images-asgy__items">
                                <div class="images-asgy__item">
                                    <img src="@/assets/Asgy/s2-1.png" alt="" />
                                </div>
                                <div class="images-asgy__item">
                                    <img src="@/assets/Asgy/s2-2.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="images-asgy__block1">
                            <div class="images-asgy__items">
                                <div class="images-asgy__item">
                                    <img src="@/assets/Asgy/s2-3.png" alt="" />
                                </div>
                                <div class="images-asgy__item">
                                    <img src="@/assets/Asgy/s2-4.png" alt="" />
                                </div>
                                <div class="images-asgy__item">
                                    <img src="@/assets/Asgy/s2-5.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
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
    .asgy__container {
        display: flex;
        justify-content: center;
    }
    .asgy__block {
        max-width: 1200px;
        height: 550px;
        margin: 50px;
        border-radius: 50px;

        background: linear-gradient(277deg, #F5F5F5 -1.03%, #FFF 98.78%);
        box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.10);

        display: flex;
        overflow: hidden;
    }
    .about-asgy {
        width: 60%;
        padding: 70px 50px 0;
    }
    .about-asgy__title {
        width: fit-content;
        padding: 10px 20px;
        border-radius: 50px;
        border: 1px solid #422202;

        color: #543514;
        font-size: 36px;
        margin-bottom: 50px;
    }
    .about-asgy__text {
        color: #543514;
        font-size: 24px;
        margin-bottom: 20px;
    }
    .about-asgy__messangers {
        display: flex;
        gap: 20px;
        justify-content: center;
        margin-bottom: 20px;
    }
    .about-asgy__messangers a img {
        width: 50px;
        height: 50px;
    }
    .images-asgy {
        display: flex;
        gap: 20px;
        align-items: center;
    }
    .images-asgy__block1 {
        display: flex;
        flex-direction: column;
    }
    .images-asgy__items {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
    }
    .images-asgy__item img {
        width: 180px;
        height: 200px;
        border-radius: 24px;
    }
    @media screen and (max-width: 1100px) {
        .about-asgy {
            width: 70%;
            padding: 70px 50px 0;
        }
        .images-asgy__item img {
            width: 150px;
            height: 166px;
            border-radius: 24px;
        }
    }
    @media screen and (max-width: 996px) {
        .about-asgy {
            width: 100%;
            padding: 50px;
        }
        .about-asgy__messangers {
            margin-bottom: 0;
        }
        .asgy__images {
            display: none;
        }
        .asgy__block {
            height: auto;
        }
    }
    @media screen and (max-width: 690px) {
        .about-asgy {
            padding: 30px;
        }
        .asgy__block {
            border-radius: 50px;
        }
        .about-asgy__text {
            font-size: 20px;
        }
        .about-asgy__title {
            margin-bottom: 20px;
            font-size: 28px;
        }
    }
    @media screen and (max-width: 620px) {
        .asgy__block {
            margin: 20px 20px;
        }
    }
    @media screen and (max-width: 400px) {
        .about-asgy__title {
            font-size: 22px;
        }
        .about-asgy__text {
            font-size: 18px;
        }
        .about-asgy__messangers a img {
            width: 40px;
            height: 40px;
        }
    }

</style>