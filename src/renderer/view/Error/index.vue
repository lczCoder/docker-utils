<template>
  <div class="error-warp">
    <el-empty description="App功能基于docker实现，请先启动本地docker程序" />
  </div>
</template>

<script>
import { exec } from "child_process";
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
    let timer = setInterval(() => {
      exec("docker images", (err, stdout, stderr) => {
        if (stdout) {
          clearInterval(timer);
          this.$router.push("/home");
        }
      });
    }, 1000);
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {
    clearInterval(timer);
  },
  activated() {},
};
</script>
<style lang="scss" scoped>
.error-warp {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
