<template>
  <div class="create-warp">
    <el-page-header @back="goBack" content="镜像列表"> </el-page-header>
    <el-table :data="imageData" :border="true" style="width: 100%" stripe>
      <el-table-column type="index" align="center"></el-table-column>
      <el-table-column
        label="存储库"
        prop="repository"
        align="center"
      ></el-table-column>
      <el-table-column label="标签" align="center">
        <template slot-scope="scope">
          <el-tag type="success">{{ scope.row.tag }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="镜像ID"
        prop="image"
        align="center"
      ></el-table-column>
      <el-table-column
        label="创建时间"
        prop="time"
        align="center"
      ></el-table-column>
      <el-table-column
        label="存储空间"
        prop="size"
        align="center"
      ></el-table-column>
      <el-table-column label="操作" align="center" fixed="right" width="200px">
        <template slot-scope="scope">
          <el-button size="mini">编辑</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
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
      imageData: [], // 镜像列表 内容
    };
  },
  computed: {},
  watch: {},
  methods: {
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
      this.$router.back();
    },
  },
  created() {
    exec("docker images", (err, stdout) => {
      if (err) this.$message.error("镜像列表获取失败");
      let source = stdout.split("\n");
      source.pop();
      source.shift();
      this.dealImageData(source); // 获取数据内容
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
