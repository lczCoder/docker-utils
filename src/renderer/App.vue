<template>
  <div id="app">
    <!-- 顶部拖拽区域 -->
    <div class="drop-box"></div>
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
.drop-box {
  position: fixed;
  z-index: 99999 !important;
  top: 0;
  width: 100%;
  height: 50px;
  overflow: hidden;
  -webkit-app-region: drag;
}
</style>
