<template>
  <div class="home-warp">
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
      <div class="pl__text">Loading…</div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
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
