<template>
    <div class="container_inner">
        <footer>
            <div class="footer__wrapper">
                <div class="footer__item-wrapper">
                    <p class="footer__item-text"><a href="#">Частые вопросы</a></p>
                    <p class="footer__item-text"><a href="#">Система бонусов</a></p>
                    <p class="footer__item-text"><a href="#">Обратная связь</a></p>
                    <p class="footer__item-text"><a href="#">О нас</a></p>
                </div>
                <div class="footer__item-wrapper footer__item-wrapper_center">
                    <div class="footer__social-wrapper">
                        <img src="@/assets/images/icons/facebook_logo_icon.png" alt="" class="footer__item-social-icon">
                        <img src="@/assets/images/icons/twitter_logo_icon.png" alt="" class="footer__item-social-icon">
                        <img src="@/assets/images/icons/instagram_logo_icon.png" alt="" class="footer__item-social-icon">
                        <img src="@/assets/images/icons/youtube_logo_icon.png" alt="" class="footer__item-social-icon">
                    </div>
                    <div class="footer__copyright-text-item">
                        <p>Copyright 2021 PLANTS, Inc. <br>
                            Terms of Use Privacy Policy Accessibility Statement <br>
                            Do Not Sell My Information
                        </p>
                    </div>
                </div>
                <div class="footer__item-wrapper">
                    <p class="footer__item-text"><a href="#">Частые вопросы</a></p>
                    <p class="footer__item-text"><a href="#">Система бонусов</a></p>
                    <p class="footer__item-text"><a href="#">Обратная связь</a></p>
                    <p class="footer__item-text"><a href="#">О нас</a></p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style lang="scss">

.footer__wrapper{
    display: flex;
    justify-content: space-between;
    margin: 35px 0 35px;
}

.footer__item-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 400px;
}

.footer__item-text{
    font-family: SF_Pro_Display, serif;
    font-size: 18px;
}

.footer__item-wrapper{
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.footer__copyright-text-item p{
    font-family: SF_Pro_Display, serif;
    font-size: 15px;
}

.footer__social-wrapper{
    display: flex;
    justify-content: center;
}

.footer__social-wrapper img{
    margin-right: 30px;
    max-width: 20px;
    max-height: 20px;
}

.footer__social-wrapper img:last-child{
    margin-right: 0;
}

.footer__item-wrapper{
    width: 400px;
    height: 160px;
}

.footer__item-wrapper_center{
    justify-content: center;
}

.footer__social-wrapper{
    margin-bottom: 20px;
}

.footer__copyright-text-item p{
    font-size: 16px;
}

</style>
