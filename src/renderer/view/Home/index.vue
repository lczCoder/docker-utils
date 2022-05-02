<template>
  <div class="home-warp">
    <div class="all">
      <div
        v-for="(item, idx) in viewList"
        :key="idx"
        :class="item.p_class"
        @click="jumpPage(item.key)"
      >
        <div v-if="item.p_class == 'center'" class="explainer">
          {{ item.c_name }}
        </div>
        <div class="text">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      viewList: [
        { name: "📀 镜像列表", p_class: "lefter", key: "images" },
        { name: "🎞 容器列表", p_class: "left", key: "container" },
        {
          name: "🏭 容器工厂",
          p_class: "center",
          c_class: "explainer",
          // c_name: "开始",
          key: "create",
        },
        { name: "🏷 数据卷挂载", p_class: "right", key: "volume" },
        { name: "🛒 镜像商店", p_class: "righter", key: "shop" },
      ],
      routerMap: {
        create: "create",
        images: "images",
        container: "container",
        volume: "volume",
        shop: "shop",
      },
    };
  },
  methods: {
    jumpPage(key) {
      this.$router.push(`/${this.routerMap[key]}`);
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
@import url("./style.scss");
</style>
