<template>
  <div class="welcome-warp">
    <div class="pl">
      <div class="pl__dot"></div>
      <div class="pl__dot"></div>
      <div class="pl__dot"></div>
      <div class="pl__dot"></div>
      <div class="pl__dot"></div>
      <div class="pl__dot"></div>
      <div class="pl__dot"></div>
      <div class="pl__dot"></div>
      <div class="pl__dot"></div>
      <div class="pl__dot"></div>
      <div class="pl__dot"></div>
      <div class="pl__dot"></div>
      <div class="pl__text">启动中</div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    let timer = setTimeout(() => {
      this.$router.push("/home");
      clearTimeout(timer);
    }, 3000);
  },
};
</script>
<style lang="scss" scoped>
@import url("./style.scss");
</style>
