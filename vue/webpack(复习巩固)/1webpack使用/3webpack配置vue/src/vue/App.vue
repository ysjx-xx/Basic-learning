<template>
  <div>
    <h1 class="title">{{ message }}</h1>
    <p>{{ fruit }}</p>
  </div>
</template>

<script>
export default {
    data() {
      return {
        message: "hello webpack",
        fruit: "苹果",
      };
    },
};
</script>

<style>
.title{
    color: red;
}
</style>