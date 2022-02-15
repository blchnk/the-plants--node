import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        products: [
            {
                name: "The Monstera & Hoya",
                price: 2500,
                image: "The_Monstera&Hoya.png",
                id: 1
            },
            {
                name: "Aglaonema Wishes",
                price: 3000,
                image: "Aglaonema_Wishes.jpg",
                id: 2
            },
            {
                name: "Large Dracaena Marginata",
                price: 2000,
                image: "Large_Dracaena_Marginata.png",
                id: 3
            },
            {
                name: "Large Alocasia California",
                price: 1500,
                image: "Large_Alocasia_California.png",
                id: 4
            }
        ],
        collections: [
            {
                name: "Распродажа",
                image: "sale_collection.jpg",
                id: "1"
            },
            {
                name: "Подарки",
                image: "gifts_collection.png",
                id: "2"
            },
            {
                name: "Новогодняя коллекция",
                image: "holiday_collection.png",
                id: "3"
            },
            {
                name: "Популярное",
                image: "popular_collection.png",
                id: "4"
            }
        ],
        cart: []
    },
    getters: {
        PRODUCTS: state => {
            return state.products;
        },
        COLLECTIONS: state => {
            return state.collections;
        },
        CART: state => {
            return state.cart;
        }
    },
    mutations: {
        SET_PRODUCTS: (state, payload) => {
            state.products = payload;
        },
        SET_CART: (state, payload) => {
            let isProductExists = false;

            if (!payload.quantity) {
                payload.quantity = 1
            }

            if (state.cart.length) {
                state.cart.map(item => {
                    if (item.id === payload.id) {
                        isProductExists = true;
                        item.quantity++
                    }
                })
                if (!isProductExists){
                    state.cart.push(payload)
                }
            } else state.cart.push(payload)
        },
        INCREMENT_CART_ITEM: (state, index) => {
            state.cart[index].quantity++;
        },
        DECREMENT_CART_ITEM: (state, index) => {
            state.cart[index].quantity--;
        },
        DELETE_CART_ITEM: (state , index) => {
            state.cart[index].quantity = 0;
            state.cart.splice(index, 1);
        }
    },
    actions: {
        SET_PRODUCTS: async ({commit}, payload) => {
            commit('SET_PRODUCTS', payload)
        },
        SET_CART: async ({commit}, payload) => {
            commit('SET_CART', payload)
        },
        INCREMENT_CART_ITEM: async ({commit}, index) => {
            commit('INCREMENT_CART_ITEM', index);
        },
        DECREMENT_CART_ITEM: async ({commit}, index) => {
            commit('DECREMENT_CART_ITEM', index);
        },
        DELETE_CART_ITEM: async ({commit}, index) => {
            commit('DELETE_CART_ITEM', index);
        }
    }
})

export default store;
