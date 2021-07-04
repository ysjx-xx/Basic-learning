<template>
  <div id="app">
    <!-- <h2>{{message}}</h2> -->
    <h2>{{ $store.state.counter }}</h2>
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>
    <button @click="addCounters(5)">+5</button>
    <button @click="addCounters(10)">+10</button>
    <button @click="adds">添加学生</button>
    <h3>{{ $store.getters.dayuage(10) }}</h3>

    <h3>------------------</h3>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex.vue";
export default {
  components: { HelloVuex },
  name: "App",
  data() {
    return {
      message: "111",
      // counter:0
    };
  },
  methods: {
    addCounter() {
      this.$store.commit("add");
    },
    subCounter() {
      this.$store.commit("sub");
    },
    addCounters(num) {
      this.$store.commit("adds", num);
    },
    adds(){
      const student={name:'li4',age:50}
      this.$store.commit('addstar',student)
    }
  },
};
</script>

<style>
</style>
