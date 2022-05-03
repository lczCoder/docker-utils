<template>
  <div class="">
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
  <el-page-header @back="$router.back()" content="镜像列表"> </el-page-header>

    <button @click="visible = true">显示</button>
    <div v-for="item in 100">
      <p>{{ item }}</p>
    </div>
    <VExit :visible="visible" @onClose="closeHandle" @onAffirm="affirmHandle" />
  </div>
</template>

<script>
import VExit from "../../components/V-Exit";
export default {
  components: {
    VExit,
  },
  data() {
    return {
      visible: false,
    };
  },
  computed: {},
  watch: {},
  methods: {
    closeHandle() {
      this.visible = false;
    },
    affirmHandle() {
      this.visible = false;
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
</style>
