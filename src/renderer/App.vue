<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "docker-utils",
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
body {
  font-family: "Source Sans Pro", sans-serif;
  cursor: url("https://wandu-fe.oss-cn-beijing.aliyuncs.com/cur/mouse.png"),
    auto;
}
</style>
