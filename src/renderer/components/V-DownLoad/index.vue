<template>
  <div class="down-box" >
   <el-progress 
    type="dashboard" 
    :percentage="percentage" 
    :color="colors">
   </el-progress>
   <span>{{status}}</span>
    </el-drawer>
  </div>
</template>

<script>
export default {
  props: {
    isDone: Boolean,
  },
  data() {
    return {
      status: '下载中',
      percentage: 0,
      colors: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#1989fa', percentage: 60 },
        { color: '#6f7ad3', percentage: 80 },
        { color: '#fcd217', percentage: 99 },
        { color: '#5cb87a', percentage: 100 },
      ],
    }
  },
  computed: {},
  watch: {
    percentage(val) {
      this.status = val === 100 ? '下载完成' : '下载中'
      if (val === 100) {
        this.$message({
          type: 'success',
          message: '下载成功',
        })
        let timer = setTimeout(() => {
          this.$emit('downEnd')
          clearTimeout(timer)
        }, 1000)
      }
    },
    isDone(val) {
      val && this.updatePro(100, 100)
    },
  },
  methods: {
    // 更新进度条
    updatePro(maxNum, speed = 200) {
      timer && clearInterval(timer)
      let timer = setInterval(() => {
        if (this.percentage < maxNum) {
          this.percentage += 2
        } else {
          clearInterval(timer)
          return
        }
      }, speed)
    },
  },
  created() {
    this.percentage = 0
  },
  mounted() {
    let cout = Math.round(Math.random() * 30 + 50)
    this.updatePro(cout)
  },
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
.down-box {
  position: fixed;
  top: 10%;
  right: 0px;
  width: 200px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: forward 1.5s;
}

@keyframes forward {
  0% {
    right: -100px;
  }
  100% {
    right: 0px;
  }
}
</style>
