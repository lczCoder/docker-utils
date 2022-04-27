<template>
  <div class="shop-warp">
    <!-- 背景图 搜索区域🔍 -->
    <div class="bg-box">
      <el-page-header @back="goBack" content="镜像列表"> </el-page-header>
      <h1>海量镜像 下载即用</h1>
      <div class="search-box">
        <!-- 搜索 -->
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="searchKey"
          size="lager"
          :style="{ width: '400px' }"
          clearable
        />
        <!-- 搜索按钮 -->
        <el-button
          type="success"
          icon="el-icon-monitor"
          circle
          @click="searchHandle"
        />
      </div>
    </div>
    <!-- 精选精选 -->
    <div class="recommend-box">
      <h2>精选镜像</h2>
      <el-carousel :interval="4000" type="card" height="230px">
        <el-carousel-item v-for="item in imagesImg" :key="item.name">
          <div>
            <img :src="item.src" width="100%" height="230px" alt="" />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import { exec } from "child_process";
import md5 from "js-md5";

export default {
  components: {},
  data() {
    return {
      show: false,
      searchKey: "", // 搜索框输入值
      imagesImg: [
        { name: "ubuntu", src: require("../../assets/ubuntu-logo.png") },
        { name: "node", src: require("../../assets/node-logo.png") },
        { name: "alpine", src: require("../../assets/alpine-logo.png") },
        { name: "nginx", src: require("../../assets/nginx-logo.png") },
        { name: "python", src: require("../../assets/python-logo.png") },
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {
    // 返回上一页
    goBack() {
      this.$router.back();
    },
    // 镜像搜索
    searchHandle() {
      this.show = !this.show;
      // if (this.searchKey !== "" && this.searchKey !== " ") {
      //   const loading = this.$loading({
      //     lock: true,
      //     text: "镜像资源查询中",
      //     spinner: "el-icon-loading",
      //     background: "rgba(0, 0, 0, 0.7)",
      //   });
      //   exec(`docker search ${this.searchKey}`, (err, res, resErr) => {
      //     console.log("stdout:", res);
      //     console.log("stderr:", resErr);
      //     loading.close();
      //   });
      // }
    },
  },
  created() {
    // 百度api接入 文档地址 http://api.fanyi.baidu.com/api/trans/product/apidoc
    // console.log(md5("20220426001190567A minimal Docker image based on Alpine Linux2022_9bWd9tUegY6fyObbq2b"));
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
.shop-warp {
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  .bg-box {
    width: 100%;
    height: 40%;
    background: url("../../assets/cool-background .png") no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    h1 {
      color: #253042;
      font-size: 42px;
      text-align: center;
      font-family: "Arial", "Microsoft YaHei", "黑体", "宋体";
    }
    .search-box {
      width: 470px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }
  }
  .recommend-box {
    width: 100%;
    padding: 30px 50px 20px;

    h2 {
      color: #253042;
      font-size: 32px;
      text-align: left;
      font-family: "Arial", "Microsoft YaHei", "黑体", "宋体";
      margin-bottom: 30px;
    }

    .el-carousel__item {
      height: 230px;
      border: 3px solid rgb(152, 149, 154);
      border-radius: 10px;
    }

    .medium {
      position: absolute;
      display: inline-block;
      width: 100%;
      bottom: 0;
      left: 0;
    }
  }
}
</style>
