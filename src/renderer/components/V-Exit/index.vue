<template>
  <div class="exit-box" v-show="visible">
    <section
      class="Confirm"
      ref="Confirm"
      @mousemove="onMouseMove"
      @mouseleave="onMouseLeave"
    >
      <div class="Confirm-Body">
        <h2 class="Confirm-Body-Title">是否要退出呢？</h2>
        <figure class="Boi" ref="Boi">
          <div class="Boi-Blush Boi-Blush_L"></div>
          <div class="Boi-Blush Boi-Blush_R"></div>
          <div class="Boi-Eye Boi-Eye_L"></div>
          <div class="Boi-Eye Boi-Eye_R"></div>
          <div class="Boi-Mouth"></div>
        </figure>
        <a
          class="Confirm-Body-Button Confirm-Body-Button_Cancel"
          href="javascript: void(0)"
          ref="save"
          @click="cancelHandle"
          >最小化</a
        >
        <a
          class="Confirm-Body-Button Confirm-Body-Button_Delete"
          href="javascript: void(0)"
          ref="uninstall"
          @click="exitHandle"
          >退出</a
        >
      </div>
    </section>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    visible: Boolean,
  },
  data() {
    return {
      current: {
        happiness: 0.9,
        derp: 1,
        px: 0.5,
        py: 0.5,
      },
      target: {
        happiness: 0.9,
        derp: 1,
        px: 0.5,
        py: 0.5,
      },
    };
  },
  computed: {},
  watch: {
    visible(newVal) {
      if (newVal) {
        this.noScroll();
      } else {
        this.canScroll();
      }
    },
  },
  methods: {
    onMouseMove({ clientX: x, clientY: y }) {
      const confirm = this.$refs.Confirm;
      const btnDelete = this.$refs.uninstall;
      const btnCancel = this.$refs.save;
      let dx1 =
        x -
        btnDelete.getBoundingClientRect().x -
        btnDelete.getBoundingClientRect().width * 0.5;
      let dy1 =
        y -
        btnDelete.getBoundingClientRect().y -
        btnDelete.getBoundingClientRect().height * 0.5;
      let dx2 =
        x -
        btnCancel.getBoundingClientRect().x -
        btnCancel.getBoundingClientRect().width * 0.5;
      let dy2 =
        y -
        btnCancel.getBoundingClientRect().y -
        btnCancel.getBoundingClientRect().height * 0.5;
      let px =
        (x - confirm.getBoundingClientRect().x) /
        confirm.getBoundingClientRect().width;
      let py =
        (y - confirm.getBoundingClientRect().y) /
        confirm.getBoundingClientRect().height;
      let distDelete = Math.sqrt(dx1 * dx1 + dy1 * dy1);
      let distCancel = Math.sqrt(dx2 * dx2 + dy2 * dy2);
      let happiness = Math.pow(distDelete / (distCancel + distDelete), 0.75);

      this.target.happiness = happiness;
      this.target.derp = 0;
      this.target.px = px;
      this.target.py = py;
    },
    onMouseLeave() {
      this.target.happiness = 0.9;
      this.target.derp = 1;
      this.target.px = 0.5;
      this.target.py = 0.5;
    },
    update() {
      const boi = this.$refs.Boi;
      for (let prop in this.target) {
        if (this.target[prop] === this.current[prop]) {
          continue;
        } else if (Math.abs(this.target[prop] - this.current[prop]) < 0.01) {
          this.current[prop] = this.target[prop];
        } else {
          this.current[prop] += (this.target[prop] - this.current[prop]) * 0.1;
        }
        boi.style.setProperty(`--${prop}`, this.current[prop]);
      }
      requestAnimationFrame(this.update);
    },
    noScroll() {
      document.body.style.overflow = "hidden";
      document.addEventListener(
        "touchmove",
        (e) => {
          e.preventDefault();
        },
        false
      ); // 禁止页面滑动
    },
    canScroll() {
      document.body.style.overflow = ""; // 出现滚动条
      document.removeEventListener(
        "touchmove",
        (e) => {
          e.preventDefault();
        },
        false
      );
    },
    cancelHandle() {
      this.$emit("onClose");
    },
    exitHandle() {
      this.$emit("onAffirm");
    },
  },
  created() {},
  mounted() {
    this.update();
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
.exit-box {
  position: fixed;
  width: 100% !important;
  height: 1000px !important;
  background-color: rgba(204, 204, 204, 0.3);
  z-index: 999999999;
}
.Confirm {
  position: fixed;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 32rem;
  height: 22rem;
  background: hsla(0, 0%, 0%, .7) border-box;
  border-radius: 1rem;
  box-shadow: 0px 10px 5px -3px rgba(0, 0, 0, 0.2);
}
.Confirm-Header {
  display: flex;
  align-items: center;
  position: relative;
  flex: 0 0 4rem;
  margin: 0 1rem;
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
}
.Confirm-Header-Button {
  display: block;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 1rem;
  flex: 0 0 auto;
  transition: background-color 0.3s;
}
.Confirm-Header-Button:not(:last-of-type) {
  margin-right: 1rem;
}
.Confirm-Header-Button_Close {
  background-color: #a43;
}
.Confirm-Header-Button_Close:hover {
  background-color: #c85a48;
}
.Confirm-Header-Button_Maximize {
  background-color: #cb3;
}
.Confirm-Header-Button_Maximize:hover {
  background-color: #d6c95c;
}
.Confirm-Header-Button_Minimize {
  background-color: #6a4;
}
.Confirm-Header-Button_Minimize:hover {
  background-color: #81c061;
}
.Confirm-Header-Title {
  margin: 0;
  padding: 0;
  transform: translateX(50%);
  margin-right: 50%;
  margin-left: auto;
}
.Confirm-Body {
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;
  margin: 2rem 4rem;
}
.Confirm-Body-Title {
  margin: 0;
  padding: 0;
  position: absolute;
  transform: translateY(-50%);
  top: 5%;
  text-align: center;
  width: 100%;
  color: #ccc;
}
.Confirm-Body-Button,
.Confirm-Body-Button:link,
.Confirm-Body-Button:visited {
  color: #fff;
  border-radius: 1.2rem;
  text-decoration: none;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  min-width: 10rem;
  text-align: center;
  transition: background-color 0.3s;
}
.Confirm-Body-Button_Delete {
  background-color: #a43;
}
.Confirm-Body-Button_Delete:hover {
  background-color: #c85a48;
}
.Confirm-Body-Button_Cancel {
  background-color: #6a4;
}
.Confirm-Body-Button_Cancel:hover {
  background-color: #81c061;
}

.Boi {
  --happiness: 0.9;
  --derp: 1;
  --px: 0.5;
  --py: 0.5;
  width: 10rem;
  max-width: 100%;
  height: 10rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: radial-gradient(#f7e0b2, #eb5);
  border-radius: 100%;
  overflow: hidden;
  margin: 0;
  align-self: center;
  flex: 0 0 auto;
  border: solid 2px #ecb23e;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
}
.Boi,
.Boi * {
  position: absolute;
}
.Boi::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: linear-gradient(to bottom, #5a8, rgba(85, 170, 136, 0));
  opacity: calc(1 - var(--happiness));
}
.Boi-Blush {
  width: 20%;
  height: 10%;
  background-color: rgba(255, 100, 100, 0.3);
  border: 3px solid rgba(255, 100, 100, 0.3);
  top: calc(45% + var(--py) * 10%);
  border-radius: 100%;
  opacity: calc(var(--happiness) * var(--happiness) * 0.9 + 0.1);
}
.Boi-Blush_L {
  left: calc(7% + var(--px) * 2%);
}
.Boi-Blush_R {
  right: calc(9% - var(--px) * 2%);
}
.Boi-Eye {
  width: calc(26% - var(--happiness) * 2%);
  height: calc(26% - var(--happiness) * 2%);
  background-color: #f6f6f6;
  border-radius: 100%;
  top: calc(25% + var(--py) * 10%);
  overflow: hidden;
}
.Boi-Eye_L {
  left: calc(18% + var(--px) * 4%);
}
.Boi-Eye_L::after {
  transform: translate(
    calc((var(--px) + var(--derp) * 0.5) * 100%),
    calc((var(--py) + var(--derp) * 0.5) * 100%)
  );
}
.Boi-Eye_R {
  right: calc(22% - var(--px) * 4%);
}
.Boi-Eye_R::after {
  transform: translate(
    calc((var(--px) + var(--derp) * -0.3) * 100%),
    calc((var(--py) + var(--derp) * -0.3) * 100%)
  );
}
.Boi-Eye::after {
  content: "";
  display: block;
  background-color: #421;
  width: calc(55% - var(--happiness) * 10%);
  height: calc(55% - var(--happiness) * 10%);
  border-radius: 100%;
}
.Boi-Mouth {
  width: calc(51% - var(--happiness) * 2%);
  height: calc(26% - var(--happiness) * 2%);
  background-color: #a33;
  border-radius: calc((1 - var(--happiness)) * 10em)
    calc((1 - var(--happiness)) * 10em) calc(var(--happiness) * 16em)
    calc(var(--happiness) * 16em);
  top: calc(57.5% + var(--py) * 5%);
  left: calc(47.5% + var(--px) * 5%);
  transform: translateX(-50%);
  overflow: hidden;
  border: 3px solid #962d2d;
  /* fix safari overflow breach */
  -webkit-mask-image: -webkit-radial-gradient(white, black);
}
.Boi-Mouth::before {
  content: "";
  display: block;
  position: absolute;
  width: 20%;
  height: 20%;
  top: 0;
  left: 50%;
  background-color: white;
  border-radius: 0 0 0.5rem 0.5rem;
}
.Boi-Mouth::after {
  content: "";
  display: block;
  position: absolute;
  width: 60%;
  height: 50%;
  left: 10%;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 20rem 20rem 0 0;
}
</style>
