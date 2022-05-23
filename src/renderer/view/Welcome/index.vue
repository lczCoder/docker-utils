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
import { exec } from "child_process";
export default {
  created() {
    exec("docker images", (err, stdout, stderr) => {
      if (err || stderr) {
        this.$router.push("/error");
      } else {
        let timer = setTimeout(() => {
          this.$router.push("/home");
          clearTimeout(timer);
        }, 1000);
      }
    });
  },
};
</script>
<style lang="scss" scoped>
@import url("./style.scss");
</style>
