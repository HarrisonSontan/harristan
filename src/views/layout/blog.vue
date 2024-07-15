<template>
  <div>
    <Background :isSmall="false" />
    <div class="content">内容</div>
  </div>
</template>

<script>
import Background from "@/components/Background.vue";

export default {
  name: "Blog",
  components: {
    Background,
  },
  props: {
    theme: {
      type: String,
      default: "light",
    },
  },
};
</script>

<style scoped>
.content {
  position: relative;
  z-index: 0; /* 确保内容在背景板之上 */
  padding: 20px;
  background-color: #fff; /* 设置内容区域的背景色 */
  color: #000000;
}

body[data-theme="dark"] .content {
  background-color: #000000;
  color: #ffffff99;
}
</style>
