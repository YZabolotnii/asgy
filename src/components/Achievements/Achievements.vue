<template>
    <div class='achievements'>
        <div class="achievements__el">
            <div class="achievements__container">
                <div class="achievements__left ">
                    <div class="achievements__left-items">
                        <div class="achievements__left-item">
                            <img src="@/assets/Achievements/per-cent.png" alt="" />
                        </div>
                        <div class="achievements__left-item">
                            <img src="@/assets/Achievements/hi.png" alt="" />
                        </div>
                        <div class="achievements__left-item">
                            <img src="@/assets/Achievements/up.png" alt="" />
                        </div>
                        <div class="achievements__left-item">
                            <img src="@/assets/Achievements/clean.png" alt="" />
                        </div>
                        <div class="achievements__left-item">
                            <img src="@/assets/Achievements/dock.png" alt="" />
                        </div>
                    </div>
                </div>
                <div class="achievements__right">
                    <div class="achievements__right-title title">Переваги вступу </div>
                    <div class="achievements__right--items">
                        <div class="achievements__right-block">
                            <div class="achievements__right-num">01.</div>
                            <div class="achievements__right-mini-title">Знижки від партнерів</div>
                            <div class="achievements__right-text">Стань частиною спільноти, що має вагомий голос! Наші члени отримують ексклюзивні знижки від партнерів на користування супутніми послугами та геодезичним обладнанням.</div>
                        </div>
                        <div class="achievements__right-block">
                            <div class="achievements__right-num">01.</div>
                            <div class="achievements__right-mini-title">Знижки від партнерів</div>
                            <div class="achievements__right-text">Стань частиною спільноти, що має вагомий голос! Наші члени отримують ексклюзивні знижки від партнерів на користування супутніми послугами та геодезичним обладнанням.</div>
                        </div>
                        <div class="achievements__right-block">
                            <div class="achievements__right-num">01.</div>
                            <div class="achievements__right-mini-title">Знижки від партнерів</div>
                            <div class="achievements__right-text">Стань частиною спільноти, що має вагомий голос! Наші члени отримують ексклюзивні знижки від партнерів на користування супутніми послугами та геодезичним обладнанням.</div>
                        </div>
                        <div class="achievements__right-block">
                            <div class="achievements__right-num">01.</div>
                            <div class="achievements__right-mini-title">Знижки від партнерів</div>
                            <div class="achievements__right-text">Стань частиною спільноти, що має вагомий голос! Наші члени отримують ексклюзивні знижки від партнерів на користування супутніми послугами та геодезичним обладнанням.</div>
                        </div>
                        <div class="achievements__right-block">
                            <div class="achievements__right-num">01.</div>
                            <div class="achievements__right-mini-title">Знижки від партнерів</div>
                            <div class="achievements__right-text">Стань частиною спільноти, що має вагомий голос! Наші члени отримують ексклюзивні знижки від партнерів на користування супутніми послугами та геодезичним обладнанням.</div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
* {
    box-sizing: border-box;
}
.achievements {
    margin: 0 auto;
    padding: 50px 0;
    background: linear-gradient(197deg, #FFF 11.97%, #F9F9F9 84.92%);
}
.achievements__el {
    margin: 0 50px;
}
.achievements__container {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    max-width: 1200px;
}
.achievements__left {
    /* margin-left: 20px; */
    width: 45%;
    margin-right: 40px;
    display: flex;
    align-items: center;
}
.achievements__left-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}
.achievements__left-item{
    background-color: #61793E;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    width: 200px;
    height: 200px;
    border-radius: 24px;
    padding: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
}
.achievements__left-item img{
    width: 120px;
    height: 120px;
}
.achievements__right {
    /* margin-right: 20px; */
    width: 55%;
    padding: 30px;
    border-radius: 50px;
    background: #FFF;
    /* _01 */
    box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.10);
}
.achievements__right-title {
    text-align: center;
    font-family: "Closer Text";
    margin-bottom: 20px;
}
.title, .title-actions {
    color: #420;
    font-size: 50px;
    font-weight: 500;
    margin-bottom: 10px;
}
.title-actions {
    text-align: end;
}
.achievements__right--items {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
}
.achievements__right-block {
    max-width: 250px;

}
.achievements__right-num {
    color: #420;
    font-family: "Closer Text";
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.achievements__right-mini-title {
    color: #420;
    font-family: "Closer Text";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.achievements__right-text {
    color: #420;
    text-align: justify;
    font-family: "Closer Text";
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}
@media screen and (max-width: 1245px){
    .achievements__left {
        width: 40%;
        margin-right: 20px;
    }        
    .achievements__right {
        width: 60%;
        padding: 20px;
    }
    
    .achievements__right--items {
        gap: 30px;
    }
    .achievements__left-item {
        width: auto;
        height: auto;
        padding: 35px;
    }
    .achievements__left-item img {
        width: 100px;
        height: 100px;
    }
}
@media screen and (max-width: 1084px){ 
    .achievements__left {
       display: none;
    }   
    .achievements__right {
        width: 100%;
    }
}
@media screen and (max-width: 690px) {
    .title {
        font-size: 36px;
    }
}
@media screen and (max-width: 620px) {
    .achievements__el {
        margin: 0 20px;
    }
}
</style>