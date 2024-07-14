<template>
  <div class="theme-button-container">
    <div class="container" :style="{ fontSize: (size / 3).toFixed(2) + 'px' }">
      <div class="components" @click="toggleTheme" :style="componentsStyle">
        <div
          class="main-button"
          @mousemove="onMouseMove"
          @mouseout="onMouseOut"
          :style="mainButtonStyle"
        >
          <div class="moon" v-for="n in 3" :key="'moon-' + n"></div>
        </div>
        <div
          class="daytime-backgrond"
          v-for="n in 3"
          :key="'daytime-' + n"
          :style="daytimeBackgroundStyle[n - 1]"
        ></div>
        <div class="cloud">
          <div class="cloud-son" v-for="n in 6" :key="'cloud-' + n"></div>
        </div>
        <div class="cloud-light">
          <div class="cloud-son" v-for="n in 6" :key="'cloud-light-' + n"></div>
        </div>
        <div class="stars">
          <div class="star big" v-for="n in 2" :key="'big-star-' + n">
            <div
              class="star-son"
              v-for="m in 4"
              :key="'big-star-' + n + '-son-' + m"
            ></div>
          </div>
          <div class="star medium" v-for="n in 2" :key="'medium-star-' + n">
            <div
              class="star-son"
              v-for="m in 4"
              :key="'medium-star-' + n + '-son-' + m"
            ></div>
          </div>
          <div class="star small" v-for="n in 2" :key="'small-star-' + n">
            <div
              class="star-son"
              v-for="m in 4"
              :key="'small-star-' + n + '-son-' + m"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { func } from "../script/button.js"; // 导入你的button.js

export default {
  name: "ThemeButton",
  props: {
    value: {
      type: String,
      default: "light",
    },
    size: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      isMoved: false,
      isClicked: false,
      initTheme: this.value,
    };
  },
  computed: {
    mainButtonStyle() {
      return {
        transform: this.isMoved ? "translateX(73.33em)" : "translateX(0)",
        backgroundColor: this.isMoved
          ? "rgba(195, 200,210,1)"
          : "rgba(255, 195, 35,1)",
        boxShadow: this.isMoved
          ? "2em 2em 3.33em rgba(0, 0, 0, 0.5), inset  -2em -3.33em 2em -2em rgba(0, 0, 0, 0.5), inset  2.67em 3.33em 1.33em -1.33em rgba(255, 255, 210,1)"
          : "2em 2em 3.33em rgba(0, 0, 0, 0.5), inset  -2em -3.33em 2em -2em rgba(0, 0, 0, 0.5), inset  2.67em 3.33em 1.33em -1.33em rgba(255, 230, 80,1)",
      };
    },
    componentsStyle() {
      return {
        backgroundColor: this.isMoved
          ? "rgba(25,30,50,1)"
          : "rgba(70, 133, 192,1)",
      };
    },
    daytimeBackgroundStyle() {
      return [
        { transform: this.isMoved ? "translateX(73.33em)" : "translateX(0)" },
        { transform: this.isMoved ? "translateX(53.33em)" : "translateX(0)" },
        { transform: this.isMoved ? "translateX(33.33em)" : "translateX(0)" },
      ];
    },
  },
  mounted() {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", this.toggleThemeBasedOnSystem);
    this.initTheme = document.body.getAttribute("data-theme") || this.value;
    func(this.$el, this.initTheme, this.changeTheme); // 初始化func
    if (this.initTheme === "dark") {
      this.toggleTheme();
    }
  },
  methods: {
    toggleTheme() {
      this.isMoved = !this.isMoved;
      this.$emit("change", this.isMoved ? "dark" : "light");
    },
    onMouseMove() {
      if (this.isClicked) return;
      this.mainButtonStyle.transform = this.isMoved
        ? "translateX(66.67em)"
        : "translateX(6.67em)";
    },
    onMouseOut() {
      if (this.isClicked) return;
      this.mainButtonStyle.transform = this.isMoved
        ? "translateX(73.33em)"
        : "translateX(0)";
    },
    toggleThemeBasedOnSystem() {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        if (!this.isMoved) {
          this.toggleTheme();
        }
      } else {
        if (this.isMoved) {
          this.toggleTheme();
        }
      }
    },
    changeTheme(detail) {
      this.$emit("change", detail);
    },
  },
};
</script>

<style scoped>
.theme-button-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -23.33em;
  margin-left: -60em;
  width: 120em;
  height: 46.67em;
  display: inline-block;
  vertical-align: bottom;
  transform: translate3d(0, 0, 0);
}

.components {
  position: fixed;
  width: 120em;
  height: 46.67em;
  border-radius: 66.67em;
  box-shadow: inset 0 0 3.33em 2em rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transition: 0.7s;
  transition-timing-function: cubic-bezier(0, 0.5, 1, 1);
  cursor: pointer;
}

.main-button {
  margin: 5em 0 0 5em;
  width: 36.67em;
  height: 36.67em;
  border-radius: 50%;
  box-shadow: 2em 2em 3.33em rgba(0, 0, 0, 0.5),
    inset -2em -3.33em 2em -2em rgba(0, 0, 0, 0.5),
    inset 2.67em 3.33em 1.33em -1.33em rgba(255, 230, 80, 1);
  transition: 1s;
  transition-timing-function: cubic-bezier(0.56, 1.35, 0.52, 1);
}

.moon {
  position: absolute;
  background-color: rgba(150, 160, 180, 1);
  box-shadow: inset 0em 0em 0.67em 0.67em rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  transition: 0.5s;
  opacity: 0;
}

.moon:nth-child(1) {
  top: 5em;
  left: 16.67em;
  width: 8.33em;
  height: 8.33em;
}

.moon:nth-child(2) {
  top: 13.33em;
  left: 5em;
  width: 13.33em;
  height: 13.33em;
}

.moon:nth-child(3) {
  top: 21.67em;
  left: 21.67em;
  width: 8.33em;
  height: 8.33em;
}

.daytime-backgrond {
  position: absolute;
  border-radius: 50%;
  transition: 1s;
  transition-timing-function: cubic-bezier(0.56, 1.35, 0.52, 1);
}

.daytime-backgrond:nth-child(2) {
  top: -13.33em;
  left: -13.33em;
  width: 73.33em;
  height: 73.33em;
  background-color: rgba(255, 255, 255, 0.2);
  z-index: -2;
}

.daytime-backgrond:nth-child(3) {
  top: -21.67em;
  left: -11.67em;
  width: 90em;
  height: 90em;
  background-color: rgba(255, 255, 255, 0.1);
  z-index: -3;
}

.daytime-backgrond:nth-child(4) {
  top: -30em;
  left: -10em;
  width: 106.67em;
  height: 106.67em;
  background-color: rgba(255, 255, 255, 0.05);
  z-index: -4;
}

.cloud,
.cloud-light {
  transform: translateY(6.67em);
  transition: 1s;
  transition-timing-function: cubic-bezier(0.56, 1.35, 0.52, 1);
}

.cloud-son {
  position: absolute;
  background-color: #fff;
  border-radius: 50%;
  z-index: -1;
  transition: transform 6s, right 1s, bottom 1s;
}

.cloud-son:nth-child(6n + 1) {
  right: -13.33em;
  bottom: 6.67em;
  width: 33.33em;
  height: 33.33em;
}

.cloud-son:nth-child(6n + 2) {
  right: -6.67em;
  bottom: -16.67em;
  width: 40em;
  height: 40em;
}

.cloud-son:nth-child(6n + 3) {
  right: 13.33em;
  bottom: -26.67em;
  width: 40em;
  height: 40em;
}

.cloud-son:nth-child(6n + 4) {
  right: 33.33em;
  bottom: -23.33em;
  width: 40em;
  height: 40em;
}

.cloud-son:nth-child(6n + 5) {
  right: 50em;
  bottom: -40em;
  width: 50em;
  height: 50em;
}

.cloud-son:nth-child(6n + 6) {
  right: 73.33em;
  bottom: -33.33em;
  width: 40em;
  height: 40em;
}

.cloud {
  z-index: -2;
}

.cloud-light {
  position: absolute;
  right: 0em;
  bottom: 16.67em;
  opacity: 0.5;
  z-index: -3;
}

.stars {
  transform: translateY(-83.33em);
  z-index: -2;
  transition: 1s;
  transition-timing-function: cubic-bezier(0.56, 1.35, 0.52, 1);
}

.big {
  --size: 5em;
}

.medium {
  --size: 3.33em;
}

.small {
  --size: 2em;
}

.star {
  position: absolute;
  width: calc(2 * var(--size));
  height: calc(2 * var(--size));
}

.star:nth-child(1) {
  top: 7.33em;
  left: 26em;
  animation-name: star;
  animation-duration: 3.5s;
}

.star:nth-child(2) {
  top: 26em;
  left: 60.67em;
  animation-name: star;
  animation-duration: 4.1s;
}

.star:nth-child(3) {
  top: 17.33em;
  left: 12.67em;
  animation-name: star;
  animation-duration: 4.9s;
}

.star:nth-child(4) {
  top: 25.33em;
  left: 44em;
  animation-name: star;
  animation-duration: 5.3s;
}

.star:nth-child(5) {
  top: 14em;
  left: 48em;
  animation-name: star;
  animation-duration: 3s;
}

.star:nth-child(6) {
  top: 34.33em;
  left: 23.33em;
  animation-name: star;
  animation-duration: 2.2s;
}

@keyframes star {
  0%,
  20% {
    transform: scale(0);
  }
  20%,
  100% {
    transform: scale(1);
  }
}

.star-son {
  float: left;
}

.star-son:nth-child(1) {
  --pos: left 0;
}

.star-son:nth-child(2) {
  --pos: right 0;
}

.star-son:nth-child(3) {
  --pos: 0 bottom;
}

.star-son:nth-child(4) {
  --pos: right bottom;
}

.star-son {
  width: var(--size);
  height: var(--size);
  background-image: radial-gradient(
    circle var(--size) at var(--pos),
    transparent var(--size),
    #fff
  );
}

.star {
  transform: scale(1);
  transition-timing-function: cubic-bezier(0.56, 1.35, 0.52, 1);
  transition: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: linear;
}

.twinkle {
  transform: scale(0);
}
</style>
