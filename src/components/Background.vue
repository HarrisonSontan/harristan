<template>
  <div
    :class="['background-image', { 'background-image-small': isSmall }]"
  ></div>
  <div :class="['title', { 'title-small': isSmall }]">
    <div class="main-title">Harristanの博客</div>
    <div class="sub-title">
      啥也不会的前端小白<span class="blinking-underscore">_</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Background",
  data() {
    return {};
  },
  props: {
    isSmall: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
/* 背景图片样式 */
.background-image {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url("@/assets/indexBackground.jpg");
  background-size: cover;
  background-position: center;
  z-index: 0; /* 确保图片在所有其他内容后面 */
}

.background-image-small {
  height: 60vh;
}

.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center; /* 居中文本 */
  font-family: "Cinzel", serif; /* 使用Cinzel字体 */
}

.title-small {
  top: 30%;
  transform: translate(-50%, -30%);
}

.main-title {
  font-size: 4rem;
  line-height: 1.2em;
  margin-bottom: 20px;
  text-shadow: #000000a3 1.2px 0 0, #000 0 1.2px 0, #000 -1.2px 0 0,
    #000 0 -1.2px 0;
  font-weight: 700; /* 加粗主标题 */
}

.sub-title {
  font-size: 1.5rem; /* 调整副标题的大小 */
  line-height: 1.2em;
  font-weight: 400; /* 正常字体重量 */
}

.blinking-underscore {
  display: inline-block;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  from,
  to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
