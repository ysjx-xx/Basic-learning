<template>
  <div>
    <h2>我是档案</h2>
    <p>{{ pro.name }}</p>
    <p>{{ pro.age }}</p>
    <p>{{ pro.sex }}</p>
  </div>
</template>

<script>
export default {
  name:'Profile',
  computed: {
    pro() {
      return this.$route.query;
    },
  },
  created() {
    console.log("created");
  },
};
</script>

<style>
</style>
