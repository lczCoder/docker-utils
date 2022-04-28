<template>
  <div class="">
    <el-dialog
      title="镜像列表"
      :visible="dialogVisible"
      width="70%"
      :before-close="onCloseHandle"
    >
      <el-table :data="listData">
        <el-table-column label="镜像名称" width="150" align="left">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" width="100">
              <span>{{ scope.row.name }}</span>
              <div slot="reference" class="name-wrapper">
                <el-tag size="small" class="image-name">{{
                  scope.row.name
                }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="镜像介绍" align="left" width="250">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" @hide="hideClear">
              <div class="popover-box">
                <div class="popover-box-content">
                  <p class="popover-box-en">{{ scope.row.explain }}</p>
                  <el-link type="primary" class="popover-box-ch">
                    {{ enToCH }}
                  </el-link>
                </div>
                <el-button
                  type="primary"
                  class="translate"
                  :loading="btnLoading"
                  size="small"
                  @click="translateHandle(scope.row.explain)"
                >
                  翻译
                </el-button>
              </div>
              <div slot="reference" class="name-wrapper">
                <p class="explain-text">{{ scope.row.explain }}</p>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          property="star"
          label="Star✨"
          width="100"
          align="center"
        ></el-table-column>
        <el-table-column
          property="official"
          label="官方镜像"
          align="center"
        ></el-table-column>
        <el-table-column label="操作" align="center" width="100">
          <template>
            <el-button type="success" size="small">下载</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
// import md5 from "js-md5";
export default {
  components: {},
  props: {
    dialogVisible: Boolean, //  弹窗是否显示
    listData: Array, //  弹窗数据
  },
  data() {
    return {
      enToCH: "",
      btnLoading: false, // 翻译按钮loading
    };
  },
  computed: {},
  watch: {},
  methods: {
    // 介绍弹出框消失事件触发
    hideClear() {
      // console.log("消失了");
      this.enToCH = "";
    },
    // 关闭弹窗
    onCloseHandle() {
      this.$emit("DialogShow");
    },
    // 翻译
    translateHandle(text) {
      this.btnLoading = true;
      let timer = setTimeout(() => {
        this.btnLoading = false;
        this.enToCH = "翻译好了";
        clearTimeout(timer);
      }, 2000);
    },
  },
  created() {},
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
.explain-text {
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* 这里是超出几行省略 */
  overflow: hidden;
}
.popover-box {
  width: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .popover-box-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    .popover-box-en {
      margin-bottom: 10px;
    }
  }
  .translate {
    margin-left: 20px;
    border: 1px solid #ccc;
    text-align: center;
    font-size: 12px;
  }
}
.image-name {
  max-width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
