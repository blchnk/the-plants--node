<template>
    <div class="header-template">
        <div class="container_main">
            <div class="promo-bar"></div>
            <header class="header" id="header">
                <nav class="nav header__nav header__nav_top">
                    <a href="/" class="nav__link nav__link-logo">
                        <a href="/" class="logo-text logo-text-left">The</a>
                        <a href="/" class="logo-text logo-text-right">Plants</a>
                    </a>
                </nav>
                <nav class="nav header__nav header__nav_bottom">
                    <ul class="nav__list main-menu">
                        <li class="nav__item" @mouseover="mouseOver" @mouseleave="mouseLeave">
                            <a href="#" class="nav__link nav__link_toggle underline-animation">
                                Магазин
                            </a>
                            <HeaderDropdownMenu v-if="header_dropdown_menu">
                            </HeaderDropdownMenu>
                        </li>
                        <li class="nav__item underline-animation">
                            <a href="" class="nav__link">
                                Новые поступления
                            </a>
                        </li>
                        <li class="nav__item underline-animation">
                            <a href="" class="nav__link">
                                Уход
                            </a>
                        </li>
                        <li class="nav__item underline-animation">
                            <a href="" class="nav__link">
                                О нас
                            </a>
                        </li>
                    </ul>
                    <ul class="nav__list side-menu">
                        <li class="nav__item nav__item_search underline-animation">
                            Поиск
                        </li>
                        <li class="nav__item underline-animation">
                            <a href="" class="nav__link">
                                Войти
                            </a>
                        </li>
                        <li class="nav__item underline-animation">
                            <button class="nav__link cart-button" @click="cart_visibility=!cart_visibility; hideOverflow()">
                                Корзина
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>

        <Cart :cart_visibility="cart_visibility"
              @closeCartOverlay="closeCartOverlay">
        </Cart>
    </div>
</template>

<script>
import Cart from "../Cart/Cart";
import HeaderDropdownMenu from "./HeaderDropdownMenu";

export default {
    name: "Header",
    components: {
        Cart,
        HeaderDropdownMenu
    },
    data() {
        return {
            cart_visibility: false,
            header_dropdown_menu: false
        }
    },
    methods: {
        closeCartOverlay(data) {
            this.cart_visibility = data;
        },
        hideOverflow() {
            document.documentElement.style.overflowY = 'hidden';
        },
        mouseOver: function () {
            this.header_dropdown_menu = true;
            // document.documentElement.style.overflowY = 'auto';
            document.getElementById('header').style.backgroundColor = "#e6f6f3";
        },
        mouseLeave: function () {
            this.header_dropdown_menu = false;
            document.getElementById('header').style.backgroundColor = "inherit";
        }
    },
    computed: {}
}
</script>

<style lang="scss">

.promo-bar {
    height: 40px;
    background-color: #00AA83;
}

.header {
    padding: 0 40px;
}

.header__nav_top {
    padding-top: 10px;
    padding-bottom: 10px;
}

.header__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav__list {
    display: flex;
    align-items: center;
}

.main-menu {
    flex-wrap: wrap;
}

.side-menu {
    padding-left: 100px;
}

.nav__item_logo {
    margin-right: 65px !important;
}

.nav__item {
    margin-right: 55px;
}

.nav__item:last-child {
    margin-right: 0;
}

.nav__item_search {
    cursor: pointer;
}

.nav__link-logo {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-top: 10px;
    border-bottom: black 1px solid;
}

.logo-text {
    font-family: 'Wremena', serif;
    font-size: 35px;
    font-weight: 700;
}

.cart-button {
    cursor: pointer;
    background-color: inherit;
}

.nav__link_toggle {

    &:after {
        //content: url("~@/assets/images/icons/arrow-down.svg");
        width: 12px;
        height: 8px;
    }
}

.header {
    //padding: 0 2rem;
    //padding-left: 10px;
}

.header__nav {
    display: flex;
    justify-content: space-between;
}

</style>
