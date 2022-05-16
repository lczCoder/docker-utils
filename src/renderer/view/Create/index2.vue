<template>
  <div class="create-warp">
    <el-page-header @back="$router.back()" content="镜像列表"> </el-page-header>
    <el-page-header @back="$router.back()" content="镜像列表"> </el-page-header>
    <el-page-header @back="$router.back()" content="镜像列表"> </el-page-header>
    <el-page-header @back="$router.back()" content="镜像列表"> </el-page-header>

    <el-steps :active="active" finish-status="success" align-center>
      <el-step title="容器初始化"></el-step>
      <el-step title="步骤1：定义容器名称"></el-step>
      <el-step title="步骤2：定义映射端口（可选）"></el-step>
      <el-step title="步骤3：设置数据卷路径（可选）"></el-step>
      <el-step title="容器创建完成"></el-step>
    </el-steps>
    <el-button @click="nextHandle">{{
      active == 5 ? "初始化容器" : "下一步"
    }}</el-button>
    <!-- 容器名称 -->
    <div v-show="active == 2">
      <el-input placeholder="请输入容器名称">
        <template slot="prepend">Docker:</template>
      </el-input>
    </div>
    <!-- 端口映射 -->
    <div v-show="active == 3">
      <p>映射端口</p>
      <div><span>本地端口：</span><el-input></el-input></div>
      <div><span>容器端口：</span><el-input></el-input></div>
    </div>
    <!-- 文件选择 -->
    <div
      v-show="active == 4"
      class="file_drag"
      ref="drag_box"
      @click="dorpEvent"
    ></div>
  </div>
</template>

<script>
const { ipcRenderer } = require("electron");
export default {
  components: {},
  data() {
    return {
      active: 1,
    };
  },
  computed: {},
  watch: {},
  methods: {
    // 选择数据卷文件
    dorpEvent() {
      ipcRenderer.send("select-volume-files");
    },
    nextHandle() {
      this.active < 5 && this.active++;
      if (this.active == 5) {
        this.$showLoading.show();
        let timer = setTimeout(() => {
          clearTimeout(timer);
          this.$showLoading.hide();
          this.$router.push('/explainer')
        }, 2000);
      }
    },
  },
  created() {},
  mounted() {
    // 监听文件选择事件
    ipcRenderer.on("volume-files-result", (e, arg) => {
      console.log(arg);
    });
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.create-warp {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.file_drag {
  width: 400px;
  height: 400px;
  background: pink;
}
</style>
