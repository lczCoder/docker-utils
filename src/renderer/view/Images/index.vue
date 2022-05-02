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
          <el-dropdown placement="bottom">
            <el-button size="mini">编辑</el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-plus">
                <span @click="imageCopy(scope.row.image, scope.row.repository)"
                  >镜像复制</span
                >
              </el-dropdown-item>
              <el-dropdown-item icon="el-icon-printer">
                <span @click="imageExport(scope.row.image)">镜像导出</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-button
            size="mini"
            type="danger"
            @click="deleteImage(scope.row.image)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { exec } from "child_process";
import { regCmdStr } from "../../utils";
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
        let source = stdout.split("\n");
        source.pop();
        source.shift();
        this.dealImageData(source); // 获取数据内容
        let timer = setTimeout(() => {
          this.isLoading = false;
          clearTimeout(timer);
        }, 1000);
      });
    },
    // 解析 images 数据内容
    dealImageData(ary) {
      const newAry = [];
      ary.forEach((item) => {
        const current = regCmdStr(item);
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
    // 删除镜像
    deleteImage(id) {
      this.$confirm(`此操作将永久删除该镜像【${id}】, 是否继续?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          exec(`docker rmi ${id}`, (err, data) => {
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
      console.log("复制镜像", id);
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
            exec(`docker tag ${id} ${value}`, (err, stdout, errstd) => {
              console.log(err, stdout, errstd);
              err
                ? this.$message.error("镜像复制失败,请输入符合规范的镜像名称")
                : this.$message.success("镜像复制成功!");
              this.findImagesList();
            });
          }
          // this.$message({
          //   type: "success",
          //   message: "你的邮箱是: " + value,
          // });
        })
        .catch(() => {
          return;
        });
    },
    // 镜像导出
    imageExport(id) {},
    // 镜像导入
    imageImport(id) {},
  },
  created() {
    this.findImagesList();
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
