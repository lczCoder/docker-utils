<template>
  <div class="create-warp">
    <el-page-header @back="$router.back()" content="容器创建工厂">
    </el-page-header>
    <svg
      id="svg-source"
      height="0"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="position: absolute"
    >
      <g
        id="shopping-cart"
        data-iconmelon="e-commerce icons:7c96e2dece0152dc594d66b260f79db0"
      >
        <path
          d="M22.463,25.841c0.528,0,0.918-0.429,0.918-0.958v-6.786c0-0.529-0.39-0.958-0.918-0.958c-0.529,0-0.92,0.429-0.92,0.958
	v6.786C21.543,25.413,21.934,25.841,22.463,25.841z M18.156,25.841c0.529,0,0.919-0.429,0.919-0.958v-6.786
	c0-0.529-0.39-0.958-0.919-0.958s-0.919,0.429-0.919,0.958v6.786C17.237,25.413,17.627,25.841,18.156,25.841z M13.851,25.841
	c0.528,0,0.919-0.429,0.919-0.958v-6.786c0-0.529-0.391-0.958-0.919-0.958c-0.529,0-0.919,0.429-0.919,0.958v6.786
	C12.932,25.413,13.321,25.841,13.851,25.841z M29.426,8.511h-5.327l-2.731-4.396c-0.342-0.593-0.98-0.961-1.666-0.961
	c-0.336,0-0.668,0.089-0.959,0.258c-0.918,0.529-1.233,1.707-0.689,2.647l1.564,2.451h-7.976l1.58-2.475
	c0.529-0.917,0.214-2.095-0.704-2.624c-0.292-0.169-0.623-0.258-0.959-0.258c-0.686,0-1.323,0.368-1.655,0.943L7.161,8.511H2.574
	C1.155,8.511,0,9.667,0,11.086v1.47c0,1.274,0.934,2.525,2.152,2.728l1.931,11.042c0.03,1.394,1.173,2.519,2.573,2.519h18.605
	c1.401,0,2.545-1.125,2.574-2.52l1.921-11.032C31.019,15.128,32,13.862,32,12.556v-1.47C32,9.667,30.845,8.511,29.426,8.511z
	 M26.615,26.167l-0.009,0.104c0,0.741-0.604,1.344-1.345,1.344H6.656c-0.741,0-1.344-0.603-1.344-1.344L3.407,15.327h25.096
	L26.615,26.167z M30.77,12.556c0,0.74-0.603,1.541-1.344,1.541H2.574c-0.741,0-1.344-0.8-1.344-1.541v-1.47
	c0-0.741,0.603-1.344,1.344-1.344h5.271l3.113-5.011c0.184-0.318,0.623-0.439,0.944-0.253c0.33,0.19,0.444,0.614,0.268,0.92
	L9.396,9.742h12.467l-2.76-4.32c-0.189-0.33-0.076-0.753,0.253-0.944c0.323-0.186,0.756-0.074,0.955,0.27l3.104,4.994h6.011
	c0.741,0,1.344,0.603,1.344,1.344V12.556z M9.545,25.841c0.528,0,0.918-0.429,0.918-0.958v-6.786c0-0.529-0.39-0.958-0.918-0.958
	c-0.529,0-0.919,0.429-0.919,0.958v6.786C8.626,25.413,9.016,25.841,9.545,25.841z"
        ></path>
      </g>
      <g
        id="credit-card"
        data-iconmelon="e-commerce icons:c3144b166f93e0f6b73aee04a0a48397"
      >
        <path
          d="M29.018,4.751H2.981C1.337,4.751,0,6.089,0,7.733v16.534c0,1.644,1.337,2.981,2.981,2.981h26.036
	c1.645,0,2.982-1.338,2.982-2.981V7.733C32,6.089,30.662,4.751,29.018,4.751z M30.638,24.267c0,0.893-0.727,1.62-1.621,1.62H2.981
	c-0.893,0-1.62-0.727-1.62-1.62V13.603h29.276V24.267z M30.638,10.236H1.362V7.733c0-0.894,0.727-1.62,1.62-1.62h26.036
	c0.894,0,1.621,0.727,1.621,1.62V10.236z M8.848,22.494H2.724v1.338h6.124V22.494z M19.043,22.494H9.548v1.338h9.495V22.494z"
        ></path>
      </g>
      <g
        id="gift"
        data-iconmelon="e-commerce icons:05fa65d254ada5a9cb5c2f1e8d87f02b"
      >
        <path
          d="M29.084,7.154h-4.807c0.157-0.146,0.731-0.497,0.866-0.678c0.757-1.01,1.016-2.355,0.677-3.51
	c-0.473-1.612-1.773-2.575-3.479-2.575c-1.017,0-1.993,0.371-2.546,0.967c-0.759,0.818-2.841,3.57-3.764,4.8
	c-0.923-1.23-3.004-3.982-3.764-4.8c-0.553-0.596-1.528-0.967-2.546-0.967c-1.706,0-3.007,0.962-3.479,2.575
	c-0.339,1.155-0.08,2.5,0.677,3.51C7.053,6.657,7.5,7.007,7.657,7.154H2.915C1.308,7.154,0,8.462,0,10.07v5.262h1.356v13.362
	c0,1.607,1.308,2.915,2.916,2.915h23.435c1.607,0,2.915-1.308,2.915-2.915V15.332H32V10.07C32,8.462,30.692,7.154,29.084,7.154z
	 M14.281,30.311H4.272c-0.857,0-1.555-0.76-1.555-1.617V15.401h11.563V30.311z M14.281,13.949H1.362V10.07
	c0-0.857,0.696-1.555,1.553-1.555h11.366V13.949z M9.456,6.471c-0.731,0-1.221-0.508-1.447-0.811
	c-0.498-0.664-0.678-1.571-0.46-2.312c0.423-1.441,1.661-1.597,2.173-1.597c0.729,0,1.303,0.268,1.548,0.532
	c0.623,0.671,2.289,2.854,3.301,4.197C12.948,6.477,10.35,6.471,9.456,6.471z M20.792,2.285c0.245-0.265,0.819-0.532,1.548-0.532
	c0.513,0,1.75,0.156,2.173,1.597c0.217,0.74,0.037,1.647-0.46,2.311c-0.227,0.303-0.716,0.811-1.447,0.811
	c-0.894,0-3.493,0.006-5.115,0.011C18.504,5.139,20.169,2.956,20.792,2.285z M29.26,28.694c0,0.857-0.697,1.617-1.554,1.617h-10.02
	v-14.91H29.26V28.694z M30.638,13.949H17.687V8.515h11.397c0.858,0,1.554,0.698,1.554,1.555V13.949z"
        ></path>
      </g>
      <g
        id="package"
        data-iconmelon="e-commerce icons:de2d76203b2448ee25bda0d82fa73c00"
      >
        <path
          d="M31.666,7.132l0.028-0.014L16.191,0L0.264,7.285l0.027,0.013v17.39l15.094,7.266V32l0.05-0.023l0.012,0.006l0.006-0.013
	l16.283-7.442V7.132H31.666z M16.191,1.415l12.553,5.73l-3.352,1.604L12.535,3.088L16.191,1.415z M1.669,23.879V7.887l13.993,6.388
	l0.006,16.256L1.669,23.879z M3.202,7.285L8.223,5.06l12.553,5.897l-4.592,2.195L3.202,7.285z M30.358,23.698l-13.307,6.294
	l0.019-15.722l4.873-2.396l0.031,7.692l4.169-2.288V9.777l4.215-2.062V23.698z"
        ></path>
      </g>
    </svg>
    <el-steps
      :style="{ width: '800px' }"
      :active="stepIdx"
      finish-status="success"
      align-center
    >
      <el-step title="初始化"></el-step>
      <el-step title="设置名称"></el-step>
      <el-step title="端口映射"></el-step>
      <el-step title="数据卷配置"></el-step>
      <el-step title="选择镜像"></el-step>
    </el-steps>
    <div id="wrapper">
      <div id="left-side">
        <ul>
          <li
            v-for="(item, idx) in tabList"
            :key="idx"
            :class="[item.class, tabIndex == idx ? 'active' : '']"
          >
            <div :class="['icon', tabIndex == idx ? 'active' : '']">
              <svg viewBox="0 0 32 32">
                <g filter="">
                  <use :xlink:href="item.svg"></use>
                </g>
              </svg>
            </div>
            {{ item.name }}
          </li>
        </ul>
      </div>
      <!-- 滚动指示条 -->
      <div id="border">
        <div id="line" :class="[tabMap[tabIndex]]"></div>
      </div>
      <!-- 右侧展示区域 -->
      <div id="right-side">
        <!-- 设置容器名称 -->
        <div id="first" :class="{ active: tabIndex === 0 }">
          <div class="content-box">
            <el-input
              :style="{ width: '450px' }"
              placeholder="请输入容器名称"
              :clearable="true"
              v-model="containerNmae"
            >
              <template slot="prepend">容器名：</template>
            </el-input>
          </div>
        </div>
        <!-- 端口映射 -->
        <div id="second" :class="{ active: tabIndex === 1 }">
          <div class="content-box">
            <el-input
              :style="{ width: '350px' }"
              placeholder="请输入本地端口"
              :clearable="true"
              maxlength="4"
              show-word-limit
              v-model="localPort"
            >
              <template slot="prepend">本地端口号：</template>
            </el-input>
            <el-button
              class="replace-port"
              type="info"
              icon="el-icon-sort"
              circle
              @click="replacePortHandle"
            />
            <el-input
              :style="{ width: '350px' }"
              placeholder="请输入容器对应端口"
              :clearable="true"
              maxlength="4"
              show-word-limit
              v-model="containerPort"
            >
              <template slot="prepend">容器端口号：</template>
            </el-input>
          </div>
        </div>
        <div id="third" :class="{ active: tabIndex === 2 }">
          <div class="content-box">
            <el-empty description=" " :image-size="100">
              <el-button type="info" @click="dorpEvent">{{
                volumePath !== "/" ? "重新选择数据卷" : "点击选择要挂载的数据卷"
              }}</el-button>
            </el-empty>
            <el-descriptions size="small" :column="1" border>
              <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-location-information"></i>
                  路径：
                </template>
                {{ volumePath }}
              </el-descriptions-item>
            </el-descriptions>
          </div>
        </div>
        <!-- 容器启动提示 -->
        <div id="fourth" :class="{ active: tabIndex === 3 }">
          <div class="content-box">
            <el-select
              :style="{ width: '500px', marginTop: '-150px' }"
              v-model="selectImages"
              placeholder="请选择镜像文件"
            >
              <el-option
                v-for="(item, idx) in imagesList"
                :key="idx"
                :label="item.repository"
                :value="item.image"
              >
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
      <el-button
        class="btn-next"
        :type="tabIndex === 3 ? 'success' : 'warning'"
        @click="nextHandle"
      >
        {{ tabIndex === 3 ? "创建并启动容器" : "下一步" }}
      </el-button>
    </div>
  </div>
</template>

<script>
const { ipcRenderer } = require("electron");
import { regImagesList } from "../../utils";
import { exec } from "child_process";
export default {
  components: {},
  data() {
    return {
      tabIndex: 0, // 默认tab下标
      stepIdx: 1, // 步骤条下标
      tabMap: ["one", "two", "three", "four"],
      lock: true,
      containerNmae: "", // 容器名称
      localPort: "", // 默认端口号
      containerPort: "",
      volumePath: "/", // 文件夹路径
      startImg: require("../../assets/test.png"),
      selectImages: "", // 选择镜像
      tabList: [
        { class: "choose", svg: "#shopping-cart", name: "设置容器名称" },
        { class: "pay", svg: "#credit-card", name: "设置端口(可选)" },
        { class: "wrap", svg: "#gift", name: "数据卷挂载(可选)" },
        { class: "ship", svg: "#package", name: "选择镜像" },
      ],
      imagesList: [], // 镜像列表
    };
  },
  computed: {},
  watch: {
    // 获取镜像列表
    tabIndex(newValue) {
      newValue === 3 && this.findImages();
    },
  },
  methods: {
    // 下一步
    nextHandle() {
      switch (this.tabIndex) {
        // 验证容器名称
        case 0:
          if (!this.containerNmae) {
            this.showMessage("请输入容器名称", "warning");
            break;
          }
          if (/^[a-zA-Z0-9_-]{1,16}$/.test(this.containerNmae)) {
            this.tabIndex++;
            this.stepIdx++;
          } else {
            this.showMessage("容器名称不符合规范", "warning");
          }
          break;
        // 验证端口映射 (可选)
        case 1:
          if (
            (this.localPort && this.containerPort) ||
            (!this.localPort && !this.containerPort)
          ) {
            if (
              /^[0-9]{0,4}$/.test(this.localPort) &&
              /^[0-9]{0,4}$/.test(this.localPort)
            ) {
              this.tabIndex++;
              this.stepIdx++;
            } else {
              this.showMessage("端口不符合规范", "warning");
            }
          } else {
            this.showMessage("请输入完整的端口映射关系", "warning");
          }
          break;
        // 验证数据卷
        case 2:
          this.tabIndex++;
          this.stepIdx++;
          break;
        // 验证镜像
        case 3:
          if (this.selectImages) {
            this.stepIdx++;
            this.createContainer();
          } else {
            this.showMessage("请选择镜像文件", "warning");
          }
          break;
        default:
          break;
      }
    },
    // 交换端口号
    replacePortHandle() {
      [this.localPort, this.containerPort] = [
        this.containerPort,
        this.localPort,
      ];
    },
    // message显示
    showMessage(message, type) {
      this.$message({
        message: message,
        type: type,
      });
    },
    // 选择数据卷文件
    dorpEvent() {
      ipcRenderer.send("select-volume-files");
    },
    // 创建容器
    createContainer() {
      this.$showLoading.show();
      const port =
        this.localPort && this.containerPort
          ? `-p ${this.localPort}:${this.containerPort}`
          : "";
      const volume =
        this.volumePath !== "/" ? `-v ${this.volumePath}:/root/docker` : "";
      exec(
        `docker run -itd --name=${this.containerNmae} ${port} ${volume} ${this.selectImages}`,
        (err, stdout, stderr) => {
          if (err || stderr) {
            this.$showLoading.hide();
            console.log(err, stderr);
            this.$message({
              type: "error",
              message: "容器创建失败",
            });
          } else {
            setTimeout(() => {
              this.$showLoading.hide();
              this.$router.push("/shop");
            }, 2000);
          }
        }
      );
    },
    // 获取镜像列表
    findImages() {
      exec("docker images", (err, stdout) => {
        if (err) {
          this.$message.error("镜像列表获取失败");
        }
        this.imagesList = regImagesList(stdout);
      });
    },
  },
  created() {},
  mounted() {
    // 监听文件选择事件
    ipcRenderer.on("volume-files-result", (e, arg) => {
      this.volumePath = arg[0];
    });
  },
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
.create-warp {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url("../../assets/cool-background.png") no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
}

.icon {
  position: relative;
  width: 32px;
  height: 32px;
  display: block;
  fill: rgba(51, 51, 51, 0.5);
  margin-right: 20px;
  -webkit-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

.icon.active {
  fill: #e74c3c;
}

.icon.big {
  width: 64px;
  height: 64px;
  fill: rgba(51, 51, 51, 0.5);
}

#wrapper {
  width: 85%;
  height: 70%;
  position: relative;
  margin-top: 10px;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(15px);
  border-radius: 50px;
  box-shadow: 10 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: left;
  -webkit-justify-content: left;
  -ms-flex-pack: left;
  justify-content: left;
  overflow: hidden;
}

#left-side {
  height: 70%;
  width: 25%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}
#left-side ul li {
  padding-top: 15px;
  padding-bottom: 15px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  line-height: 34px;
  font-size: 14px;
  color: rgba(51, 51, 51, 0.5);
  font-weight: 500;
  cursor: pointer;
  -webkit-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}
#left-side ul li:hover {
  color: #333333;
  -webkit-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}
#left-side ul li:hover > .icon {
  fill: #333;
}
#left-side ul li.active {
  color: #333333;
}
#left-side ul li.active:hover > .icon {
  fill: #e74c3c;
}

#border {
  height: 288px;
  width: 1px;
  background-color: rgba(51, 51, 51, 0.2);
}
#border #line.one {
  width: 5px;
  height: 54px;
  background-color: #e74c3c;
  margin-left: -2px;
  margin-top: 15px;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}
#border #line.two {
  width: 7px;
  height: 54px;
  background-color: #e74c3c;
  margin-left: -2px;
  margin-top: 79px;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}
#border #line.three {
  width: 10px;
  height: 54px;
  background-color: #e74c3c;
  margin-left: -2px;
  margin-top: 150px;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}
#border #line.four {
  width: 13px;
  height: 54px;
  background-color: #e74c3c;
  margin-left: -2px;
  margin-top: 210px;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}

#right-side {
  height: 300px;
  width: 75%;
  overflow: hidden;
}
#right-side #first,
#right-side #second,
#right-side #third,
#right-side #fourth {
  position: absolute;
  height: 300px;
  width: 75%;
  -webkit-transition: all 0.6s ease-in-out;
  transition: all 0.6s ease-in-out;
  margin-top: -350px;
  opacity: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

#right-side #first.active,
#right-side #second.active,
#right-side #third.active,
#right-side #fourth.active {
  margin-top: 0px;
  opacity: 1;
  -webkit-transition: all 0.6s ease-in-out;
  transition: all 0.6s ease-in-out;
}

.btn-next {
  position: fixed;
  bottom: 100px;
  right: 120px;
}

.content-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.replace-port {
  margin: 20px 0;
}
</style>
