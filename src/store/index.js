import Vue from 'vue'
import Vuex from 'vuex'
let list = require("@/store/list.js");

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: list,
        login: {},
        buy: []
    },
    getters: {
        GetListSearch: function(state) {
            return state.list;
        },
        GetbuyLenght: function(state) {
            return state.buy.length;
        },
        GetbuyList: function(state) {
            return state.buy;
        },
        Getuser: function(state) {
            console.log(sessionStorage.getItem('login'))
            if (sessionStorage.getItem('login')) {
                return sessionStorage.getItem('login');

            } else {
                return state.login;
            }
        }
    },
    mutations: {
        //改變值
        DeletebuyList: function(state, data) {
            state.buy.splice(data, 1);
            sessionStorage.setItem('buy', JSON.stringify(state.buy));
        },
        setbuyList: function(state, data) {
            state.buy = data;
        },
        getbuyList: function(state, data) {
            // state.buy = [data, state.list.productALL[1]]
            data.data.count = data.count;
            state.buy.push(data.data);
            sessionStorage.setItem('buy', JSON.stringify(state.buy));
            // console.log(sessionStorage.getItem('buy'));

        },
        getbuyListBind: function(state, data) {

            state.buy[data.id].count += parseInt(data.count);
            sessionStorage.setItem('buy', JSON.stringify(state.buy));
            // console.log(sessionStorage.getItem('buy'));


        },
        loginStage: function(state, data) {
            state.login = data;
            sessionStorage.setItem('login', JSON.stringify(state.login));

        }
    },
    actions: { //action 不改变状态，只提交(commit) mutation。
        // action 可以包含任意异步操作。
        getbuyList: (context, payload) => {
            context.commit('getbuyList', payload);
        },
        getbuyListBind: (context, payload) => {
            context.commit('getbuyListBind', payload);
        },
        setbuyList: (context, payload) => {
            context.commit('setbuyList', payload);
        },
        DeletebuyList: (context, payload) => {
            context.commit('DeletebuyList', payload);
        },
        loginStage: (context, payload) => {
            context.commit('loginStage', payload);
        }
    },
    modules: {}
})