<template>
  <div class="create-warp">
    <el-page-header @back="goBack" content="镜像列表"> </el-page-header>
    <el-table :data="imageData" :border="true" style="width: 100%">
      <el-table-column
        v-for="(item, idx) in table"
        :prop="item.prop"
        :label="item.label"
        :key="idx"
        align="center"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { exec } from "child_process";
import { Fn } from "../../utils";
export default {
  components: {},
  data() {
    return {
      table: [], // 镜像列表 表头
      imageData: [], // 镜像列表 内容
      keyMap: {
        0: "repository",
        1: "tag",
        2: "image",
        3: "time",
        4: "size",
      },
    };
  },
  computed: {},
  watch: {},
  methods: {
    // 解析images 数据表头、列 信息
    dealImageStr(str) {
      const current = Fn(str);
      const newAry = [];
      current.forEach((item, idx) => {
        let obj = {};
        obj.label = item;
        obj.prop = this.keyMap[idx];
        newAry.push(obj);
      });
      this.table = newAry;
    },
    // 解析 images 数据内容
    dealImageData(ary) {
      const newAry = [];
      ary.forEach((item) => {
        const current = Fn(item);
        let obj = {};
        obj.repository = current[0]; // 储存库名
        obj.tag = current[1]; // 标签名称
        obj.image = current[2]; // image 镜像名称
        obj.time = current[3]; // 创建时间
        obj.size = current[4]; // 存储大小
        newAry.push(obj);
      });
      this.imageData = newAry;
    },
    // 返回上一页
    goBack() {
      this.$router.back()
    },
  },
  created() {
    exec("docker images", (err, stdout) => {
      if (err) this.$message.error("镜像列表获取失败");
      let source = stdout.split("\n");
      // 获取表头
      this.dealImageStr(source[0]);
      // 获取数据内容
      source.pop();
      source.shift();
      this.dealImageData(source);
    });
  },
  mounted() {},
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
  width: 100vw;
  height: 100vh;
}
</style>
