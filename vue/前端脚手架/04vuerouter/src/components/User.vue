<template>
  <div>
    <h2>我是用户</h2>
    <p>{{ username }}</p>
  </div>
</template>

<script>
export default {
  name:'User',
  computed: {
    username() {
      return this.$route.params.userId;
    },
  },
  created() {
  console.log("created");
  },
};
</script>

<style>
</style>
