<template>
  <div id="app">
    <!-- routerView站位,router-link  使用路由 -->
    <!-- exclude来排除某个组件，使其不被保存,中间不要加空格 -->
    <keep-alive exclude="Profile,User">
    <router-view></router-view>
    </keep-alive>
<router-link to="/home" tag="button" replace>首页</router-link>
<router-link to="/about" replace>关于</router-link>
<router-link :to="'/user/'+user" replace>用户</router-link>
<router-link :to="{path:'/profile',query:{name:'li',age:18,sex:'男'}}">档案</router-link>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      user:'lili'
    }
  },
}
</script>

<style>

</style>
