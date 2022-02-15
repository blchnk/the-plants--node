<template>
    <div class="cart-item">
        <img class="cart-item__product-img" :src="require('@/assets/images/products/' + cart_data.image)" alt="">
        <div class="cart-item__product-details product-details">
            <div class="product-details__title-and-price-wrapper">
                <p class="product-details__product-name">{{cart_data.name}}</p>
                <p class="product-details__product-price">{{cart_data.price}}₽</p>
            </div>

            <div class="product-details__info info">
                <div class="info__plus-and-minus-wrapper">
                    <div class="change-quantity-inner" @click="decrementCartItem">
                        <button class="minus-product-btn"></button>
                    </div>
                    <p class="amount-info">{{cart_data.quantity}}</p>
                    <div class="change-quantity-inner" @click="incrementCartItem">
                        <button class="plus-product-btn"></button>
                    </div>
                </div>
                <button class="info__remove-btn" @click="deleteCartItem"><span class="underline-animation underline-animation_green">Удалить</span></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Cart-Item",
    data() {
        return{}
    },
    props: {
        cart_data: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    mounted() {},
    methods: {
        incrementCartItem(){
            this.$emit('incrementCartItem');
        },
        decrementCartItem(){
            this.$emit('decrementCartItem');
        },
        deleteCartItem(){
            this.$emit('deleteCartItem');
        }
    }
}
</script>

<style lang="scss">

.cart-item{
    display: flex;
    margin-top: 15px;
}

.cart-item{
    &__product-img{
        max-height: 193px;
        max-width: 150px;
        margin-right: 15px;
    }
}
.amount-info{
    display: flex;
    align-items: center;
    font-size: 22px;
}
.product-details__info{
    display: flex;
    justify-content: space-between;
    max-width: 140px;
    margin-top: 10px;
}
.info__plus-and-minus-wrapper{
    border: 1px solid #bfb8af;
    position: relative;
    display: flex;
    height: 30px;
    padding: 5px 5px;
}
.minus-product-btn{
    cursor: pointer;
    position: relative;
    background: black;
    content: "";
    height: 2px;
    width: 15px;
    margin-right: 5px;
}
.change-quantity-inner{
    display: flex;
    align-items: center;
    cursor: pointer;
}

.plus-product-btn{
    cursor: pointer;
    position: relative;
    background: black;
    content: "";
    height: 2px;
    width: 15px;
    margin-left: 5px;

    &:after{
        position: absolute;
        content: "";
        background: black;
        width: 2px;
        height: 15px;
        top: -6px;
        left: 6.5px;
    }
}
.info__remove-btn{
    cursor: pointer;
    span{
        color: #00AA83;
    }
}

.underline-animation_green:before{
    background-color: #00AA83!important;
}

.cart-item__product-details{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

</style>
