//vuex根js文件------------------------
import Vue from "vue";
import Vuex from "vuex";
import state from './state';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';
import modules from './modules';

Vue.use(Vuex);

//创建Vuex实例
var store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    modules
});

export default store;