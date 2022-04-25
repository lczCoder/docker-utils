<template>
  <div class="shop-warp">
    <el-page-header @back="goBack" content="镜像列表"> </el-page-header>
  </div>
</template>

<script>
import { exec } from "child_process";
import md5 from "js-md5";

export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    // 返回上一页
    goBack() {
      this.$router.back();
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
  border: 1px solid black;
}
</style>
