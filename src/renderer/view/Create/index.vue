<template>
  <div class="create-warp">
    <router-link to="/home">返回</router-link>
    <h3>表头</h3>
    <el-table :data="imageData" :border="true" style="width: 100%">
      <el-table-column
        v-for="item in table"
        :prop="item"
        :label="item"
        :key="item"
      >
      </el-table-column>
    </el-table>

    <h3>内容</h3>
    <p v-for="(itm, id) in table" :key="id">
      {{ itm }}
    </p>
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script>
import { exec } from "child_process";
export default {
  components: {},
  data() {
    return {
      table: [],
      // 镜像列表 表头
      imageData: [
        {
          REPOSITORY: "123",
          TAG: "123",
          IMAGE: "12",
          CREATED: "1",
          SIZE: "1",
        },
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {
    // 解析images 数据表头、列 信息
    dealImageStr(str) {
      str.replace(new RegExp(" ", "gm"), "");
      return str.replace(new RegExp(" +", "gm"), ",").split(",");
    },
    // 解析 images 数据内容
    dealImageData(ary) {
      let dataList = []
      ary.pop();
      ary.shift();
      ary.forEach((item)=>{
        console.log(this.dealImageStr(item));

      })
    },
  },
  created() {
    exec("docker images", (err, stdout) => {
      if (err) this.$message.error("镜像列表获取失败");
      let source = stdout.split("\n");
      // 获取表头
      let ary = this.dealImageStr(source[0]);
      this.table = ary.filter((item) => item !== "ID");
      // 获取数据内容
      this.imageData = this.dealImageData(source);
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
