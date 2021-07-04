import Vue from "vue";
import Vuex from "vuex";
import getters from './getters'
import mutations from './mutations'
//安装插件
Vue.use(Vuex);

//创建对象,利用Vuex中的Store类
const store = new Vuex.Store({
  state: {
    counter: 10,
    stars: [
      { name: "li1", age: 13 },
      { name: "li2", age: 24 },
      { name: "li3", age: 19 },
      { name: "li4", age: 16 }
    ]
  },
  mutations,
  actions: {},
  getters,
  modules: {}
});

//导出对象
export default store;
