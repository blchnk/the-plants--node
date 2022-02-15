<template>
    <div class="cart-template">
        <transition name="bg-color-fade">
            <div class="cart-overlay"
                 v-if="cart_visibility"
                 @click="closeCartOverlay(); showOverflow()">
            </div>
        </transition>

        <transition name="fade-slider">
            <div class="cart" v-if="cart_visibility">
                <h2 class="cart__title">Корзина ({{CART.length}})</h2>
                <p class="cart__about-us about-us_non-empty-cart" v-if="CART.length !==0">Наша команда старательно подготавливает каждый товар к отправке, чтобы вы были довольны покупкой.</p>
                <p class="cart__about-us about-us_empty-cart" v-if="CART.length === 0">Ваша корзина сейчас пуста.</p>
                <CartItem v-for="(item, index) in CART"
                          :key="item.article"
                          :cart_data = item
                          @incrementCartItem="incrementCartItem(index)"
                          @decrementCartItem="decrementCartItem(item, index)"
                          @deleteCartItem="deleteCartItem(index)">
                </CartItem>
            </div>
        </transition>
    </div>
</template>

<script>
import CartItem from "./CartItem";
import {mapGetters} from "vuex";
import {mapActions} from "vuex";

export default {
    name: "Cart",
    components: {
        CartItem
    },
    props: {
        cart_visibility: Boolean
    },
    emits: ['closeCartOverlay'],
    methods: {
        closeCartOverlay(){
            this.$emit('closeCartOverlay', false);
        },
        incrementCartItem(index){
            this.INCREMENT_CART_ITEM(index);
        },
        decrementCartItem(item, index){
            if (item.quantity < 2) {
                this.deleteCartItem(index)
            } else {
                this.DECREMENT_CART_ITEM(index);
            }
        },
        deleteCartItem(index){
            this.DELETE_CART_ITEM(index);
        },
        showOverflow(){
            document.documentElement.style.overflowY = 'auto';
        },
        ...mapActions(['INCREMENT_CART_ITEM',
            'DECREMENT_CART_ITEM',
            'DELETE_CART_ITEM'])
    },
    computed:{
        ...mapGetters(['CART'])
    }
}
</script>

<style lang="scss">

.cart-overlay{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh * 3;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
}

.bg-color-fade-enter-active, .bg-color-fade-leave-active {
    transition: opacity .5s;
}

.bg-color-fade-enter, .bg-color-fade-leave-to {
    opacity: 0;
}

.cart{
    position: fixed;
    top: 0;
    right: 0;
    width: 30%;
    height: 100%;
    background-color: white;
    box-shadow: 0 0 10px rgb(45 42 36 / 70%);
    overflow-x: hidden;
    z-index: 100;
    padding: 10px 24px 10px 24px;
}

.fade-slider-enter-active, .fade-slider-leave-active {
    transition: transform .5s ease;
}

.fade-slider-enter, .fade-slider-leave-to {
    transform: translateX(100%);
}

.cart__title{
    font-family: 'PT_Serif',serif;
    font-weight: bold;
    line-height: 63px;
    font-size: 40px;
}

.cart__about-us{
    opacity: 90%;
}

</style>
