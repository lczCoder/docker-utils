<template>
  <div id="wrapper">
    <button @click="readFile">读取文件</button>
  </div>
</template>

<script>
const { exec } = require("child_process");
export default {
  name: "landing-page",
  components: {},
  methods: {
    readFile() {
      exec("docker ps -a", (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(stdout.split("\n"));
        console.log(`stderr: ${stderr}`);
      });
    },
  },
};
</script>

<style scoped lang="scss">
#wrapper {
  height: 100vh;
  width: 100vw;
}
</style>
