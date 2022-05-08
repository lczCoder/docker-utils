<template>
  <div class="shop-warp">
    <!-- 背景图 搜索区域🔍 -->
    <div class="bg-box">
      <el-page-header @back="goBack" content="镜像列表"> </el-page-header>
      <h1>海量镜像 下载即用</h1>
      <div class="search-box">
        <!-- 搜索 -->
        <el-input
          placeholder="请输入要查询的镜像名"
          prefix-icon="el-icon-search"
          v-model="searchKey"
          size="lager"
          :style="{ width: '400px' }"
          clearable
          @keyup.enter.native="searchHandle"
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
          <div @click="downHandle(item.name)">
            <img :src="item.src" width="100%" height="230px" :alt="item.name" />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 搜索列表 -->
    <ResultDialog
      :dialogVisible="dialogVisible"
      :listData="searchImgList"
      @DialogShow="DialogShowHandle"
    />
    <!-- 下载区 -->
    <V-Download
      v-if="downShow"
      :isDone="downStatus"
      @downEnd="downShow = false"
    />
  </div>
</template>

<script>
import { exec } from 'child_process'
import { regCmdStr } from '../../utils'
import ResultDialog from './ResultDialog'
import VDownload from '../../components/V-DownLoad'
export default {
  components: {
    ResultDialog,
    VDownload,
  },
  data() {
    return {
      dialogVisible: false, // 搜索列表弹窗是否显示
      downStatus: false, // 下载状态
      downShow: false, // 下载组件是否显示
      searchKey: '', // 搜索框输入值
      // 推荐镜像本地展示
      imagesImg: [
        { name: 'ubuntu', src: require('../../assets/ubuntu-logo.png') },
        { name: 'node', src: require('../../assets/node-logo.png') },
        { name: 'alpine', src: require('../../assets/alpine-logo.png') },
        { name: 'nginx', src: require('../../assets/nginx-logo.png') },
        { name: 'python', src: require('../../assets/python-logo.png') },
      ],
      // 镜像查询列表
      searchImgList: [],
    }
  },
  computed: {},
  watch: {},
  methods: {
    // 返回上一页
    goBack() {
      this.$router.back()
    },
    // 子组件关闭dialog
    DialogShowHandle() {
      this.dialogVisible = false
    },
    // 镜像下载
    downHandle(name) {
      this.downStatus = false
      this.downShow = true
      exec(`docker pull ${name}`, (err, stdout, stderr) => {
        if (err || stderr) {
          this.$message({
            type: 'error',
            message: '镜像下载失败',
          })
        } else {
          this.downStatus = true
        }
      })
    },
    // 镜像搜索
    searchHandle() {
      if (this.searchKey !== '' && this.searchKey !== ' ') {
        this.$showLoading.show()
        exec(
          `docker search ${this.searchKey} --no-trunc`,
          (err, res, resErr) => {
            this.$showLoading.hide()
            this.searchKey = ''
            this.dialogVisible = true
            this.dealCmdStr(res)
          }
        )
      }
    },
    // 镜像列表格式化处理
    dealCmdStr(str) {
      let source = str.split('\n')
      source.pop()
      source.shift()
      let newAry = []
      source.forEach((item) => {
        const current = regCmdStr(item)
        if (current.length >= 3) {
          // >3 搜索镜像数据较为完整,符合展示规范
          let obj = {}
          obj.name = current[0] // 镜像名称
          obj.explain = current[1] // 镜像介绍
          obj.star = current[2] // 镜像star
          obj.official = current[3] // 官方镜像
          newAry.push(obj)
        }
      })
      this.searchImgList = newAry
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
}
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.shop-warp {
  width: 100%;
  height: 100vh;
  .bg-box {
    width: 100%;
    height: 40%;
    background: url('../../assets/cool-background .png') no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    h1 {
      color: #253042;
      font-size: 42px;
      text-align: center;
      font-family: 'Arial', 'Microsoft YaHei', '黑体', '宋体';
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
      font-family: 'Arial', 'Microsoft YaHei', '黑体', '宋体';
      margin-bottom: 30px;
    }

    .el-carousel__item {
      height: 230px;
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
