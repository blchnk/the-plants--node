<template>
    <div class="help-template">
        <button class="btn help-btn" @click="help_visibility=!help_visibility">
            <img src="@/assets/images/icons/help-logo.png" alt="">
        </button>

        <div class="help" v-if="help_visibility">

            <div class="help-header header-help">
                <!--      <p class="header-help__h1">У вас есть вопросы?</p>-->
                <!--      <p class="header-help__h2">Мы готовы ответитить 24/7</p>-->
                <p class="header-help__logo">PLANTS</p>
            </div>

            <div class="help-main main-help">

                <div class="main-help__item-wrapper">
                    <span>Имя</span>
                    <textarea wrap="off" class="textarea help-input-field one-line-field" id="name"></textarea>
                </div>

                <div class="main-help__item-wrapper">
                    <span>Тема</span>
                    <textarea wrap="off" class="textarea help-input-field one-line-field" id="subject"></textarea>
                </div>

                <div class="main-help__item-wrapper">
                    <span>Почта</span>
                    <textarea wrap="off" class="textarea help-input-field one-line-field" id="email"></textarea>
                </div>

                <div class="main-help__item-wrapper">
                    <span>Задайте ваш вопрос</span>
                    <textarea class="textarea help-input-field help-input-field_large" id="question"></textarea>
                </div>

                <button class="btn green-btn send-a-message-btn">Отправить сообщение</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Help",
    data(){
        return{
            help_visibility: false
        }
    }
}
</script>

<style lang="scss">

.help-btn{
    position: fixed;
    bottom: 15px;
    right: 15px;
    cursor: pointer;

    img{
        height: 70px;
        width: 90px;
    }
}

.help{
    position: fixed;
    bottom: 100px;
    right: 30px;
    width: 350px;
    height: 650px;
    background-color: #F9FBFA;

    border: 1px solid #00ab84;
    border-radius: 8px;
}

.help-header{
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;

    height: 30%;
    background-color: #00ab84;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}

.header-help__h1{

}

.header-help__h2{

}

.header-help__logo{
    font-size: 45px;
}

.help-main{
    padding: 15px 20px 0 20px;
    display: flex;
    flex-direction: column;
}

.main-help__item-wrapper{
    display: flex;
    flex-direction: column;
    padding-bottom: 12px;

    span{
        font-size: 16px;
        padding-bottom: 5px;
    }
}

.help-input-field{
    height: 40px;
    resize: none;
    outline-color: #2599e7;
    -moz-appearance: none;
    border: 1px #dcdcdc solid;
    padding: 0 10px;
    overflow: hidden;
}

.one-line-field{
    line-height: 40px;
}

.help-input-field_large{
    height: 80px;
    padding-top: 10px;
}

.send-a-message-btn{
    transition: background-color linear 0.1s;

    &:hover{
        background-color: #009d7b;
    }
}

</style>
