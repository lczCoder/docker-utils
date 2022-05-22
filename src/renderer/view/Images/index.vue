<template>
  <div class="create-warp">
    <el-page-header @back="$router.back()" content="镜像列表"> </el-page-header>
    <el-table
      :data="imageData"
      :border="true"
      style="width: 100%"
      stripe
      v-loading="isLoading"
      element-loading-text="镜像列表更新中……"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    >
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
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-plus"
            @click="imageCopy(scope.row.image, scope.row.repository)"
            >复制</el-button
          >
          <el-button
            size="mini"
            type="danger"
            icon="el-icon-delete"
            @click="deleteImage(scope.row.image, scope.row.repository)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { exec } from "child_process";
import { regImagesList } from "../../utils";
export default {
  components: {},
  data() {
    return {
      imageData: [], // 镜像列表 内容
      isLoading: false, // 是否加载中
    };
  },
  computed: {},
  watch: {},
  methods: {
    // 获取镜像列表
    findImagesList() {
      this.isLoading = true;
      exec("docker images", (err, stdout) => {
        if (err) {
          this.$message.error("镜像列表获取失败");
        }
        this.imageData = regImagesList(stdout);
        let timer = setTimeout(() =>{
          this.isLoading = false
          clearTimeout(timer);
        },500)
      });
    },
    // 删除镜像
    deleteImage(id, name) {
      this.$confirm(`此操作将永久删除该镜像【${name}】, 是否继续?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          exec(`docker rmi ${name}`, (err, data) => {
            if (err) {
              this.$message({
                type: "warning",
                message: "有基于当前镜像创建的容器,请先删除对应的容器",
              });
            } else {
              this.isLoading = true;
              let timer = setTimeout(() => {
                this.$message({
                  type: "success",
                  message: "镜像删除成功!",
                });
                this.findImagesList();
                this.isLoading = false;
                clearTimeout(timer);
              }, 2000);
            }
          });
        })
        .catch(() => {});
    },
    // 复制镜像
    imageCopy(id, name) {
      this.$prompt("请输入新镜像名称", "提示", {
        confirmButtonText: "复制",
        cancelButtonText: "取消",
        //  inputPlaceholder:'' 输入框占位符
      })
        .then(({ value }) => {
          if (value == name) {
            this.$message({
              type: "warning",
              message: "镜像名称不能与原镜像名称相同",
            });
          } else {
            exec(`docker tag ${id} ${value}`, (err) => {
              this.findImagesList();
              err
                ? this.$message.error("镜像复制失败,请输入符合规范的镜像名称")
                : this.$message.success("镜像复制成功!");
            });
          }
        })
        .catch(() => {
          return;
        });
    },
  },
  created() {
    this.findImagesList(); // 初始化获取镜像列表
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
  width: 100%;
  height: 100vh;
  padding-top: 50px;
}
</style>
