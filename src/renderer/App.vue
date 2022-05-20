<template>
  <div id="app">
    <!-- 顶部拖拽区域 -->
    <div v-if="env" class="drop-box"></div>
    <VExit :visible="visible" @onClose="closeHandle" @onAffirm="affirmHandle" />
    <router-view></router-view>
  </div>
</template>

<script>
const { ipcRenderer } = require('electron')
import VExit from './components/V-Exit'
export default {
  name: 'docker-utils',
  components: {
    VExit,
  },
  data() {
    return {
      visible: false, // 退出系统确认弹窗
      env: true, // window系统 消除顶部拖动区域
    }
  },
  methods: {
    // 最小化
    closeHandle() {
      this.visible = false
      // 延迟100毫秒后最小化，消除最小化视图中的弹窗样式
      let timer = setTimeout(() => {
        ipcRenderer.send('minimize-app')
        clearTimeout(timer)
      }, 100)
    },
    // 退出
    affirmHandle() {
      this.visible = false
      ipcRenderer.send('exit-app')
    },
  },
  created() {
    this.env = process.platform == 'darwin' ? true : false
  },
  mounted() {
    ipcRenderer.on('close-app', () => {
      this.visible = true
    })
  },
}
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
  background-color: #fff !important;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
  cursor: url('https://wandu-fe.oss-cn-beijing.aliyuncs.com/cur/mouse.png'),
    auto !important;
}

body::-webkit-scrollbar {
  display: none;
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
