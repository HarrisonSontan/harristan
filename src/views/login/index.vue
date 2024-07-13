<template>
  <div class="login-container">
    <!-- 背景图片 -->
    <div class="background-image"></div>
    <div class="outer-frame">
      <!-- 头像容器 -->
      <div class="avatar-container">
        <img src="@/assets/Snowman.jpg" alt="Avatar" class="avatar" />
      </div>
      <div class="text-container">
        <!-- 博客标题 -->
        <h1 class="blog-title">HarristanのBlog</h1>
        <!-- 打字效果的登录文本 -->
        <div class="login-text typing-effect">
          <span>{{ displayText }}</span>
          <span class="cursor" v-if="showCursor">|</span>
        </div>
        <!-- 按钮容器 -->
        <div class="button-container">
          <button type="button" class="dialog_but" @click="gotoHome">
            <strong>进入博客</strong>
          </button>
          <button type="button" class="dialog_but" @click="gotoGithub">
            <strong>Github</strong>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginIndex",
  data() {
    return {
      textLines: ["即便那颗星星所在的地方是永远的黑夜", "愿此程，终抵群星"], // 打字效果的文本内容
      displayText: "", // 当前显示的文本
      showCursor: true, // 控制光标显示与否
      currentLineIndex: 0, // 当前显示的文本索引
      typingSpeed: 200, // 打字速度
      deletingSpeed: 100, // 删除速度
      pauseDuration: 1000, // 暂停时间
    };
  },
  mounted() {
    this.startTypingEffect(); // 开始打字效果
    setInterval(() => {
      this.showCursor = !this.showCursor; // 每秒钟切换光标显示状态
    }, 1000);
  },
  methods: {
    startTypingEffect() {
      // 开始打字效果
      this.typeText(this.textLines[this.currentLineIndex], () => {
        setTimeout(() => {
          this.deleteText(() => {
            this.currentLineIndex =
              (this.currentLineIndex + 1) % this.textLines.length;
            this.startTypingEffect();
          });
        }, this.pauseDuration);
      });
    },
    typeText(text, callback) {
      // 打字效果
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          this.displayText += text.charAt(i);
          i++;
        } else {
          clearInterval(interval);
          callback();
        }
      }, this.typingSpeed);
    },
    deleteText(callback) {
      // 删除文本效果
      const interval = setInterval(() => {
        if (this.displayText.length > 0) {
          this.displayText = this.displayText.slice(0, -1);
        } else {
          clearInterval(interval);
          callback();
        }
      }, this.deletingSpeed);
    },
    gotoHome() {
      // 跳转到主页
      this.$router.push("/home");
    },
    gotoGithub() {
      // 打开GitHub链接
      window.open("https://github.com/HarrisonSontan", "_blank");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap");

/* 登录容器 */
.login-container {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  overflow: hidden; /* 确保内容不会溢出容器 */
}

/* 背景图片样式 */
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/indexBackground.jpg");
  background-size: cover;
  background-position: center;
  z-index: -1; /* 确保图片在所有其他内容后面 */
}

/* 外框样式 */
.outer-frame {
  background-color: #0000004d; /* 半透明背景 */
  padding: 40px 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px 5px #ffffff26;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* 头像容器样式 */
.avatar-container {
  margin-bottom: 20px;
}

/* 头像样式 */
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #fff;
}

/* 文本容器样式 */
.text-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 博客标题样式 */
.blog-title {
  font-family: "Merriweather", serif;
  font-size: 30px;
  margin-bottom: 10px;
}

/* 登录文本样式 */
.login-text {
  height: 50px;
  font-family: "Lobster", cursive;
  font-size: 22px;
  font-weight: 700;
  margin: 0.5em 0;
  display: inline-block;
  width: 18ch; /* 限制每行最多10个字符 */
  white-space: pre-wrap; /* 保持空格和换行 */
  word-wrap: break-word; /* 允许长单词换行 */
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

/* 按钮容器样式 */
.button-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 按钮样式 */
.dialog_but {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  background-size: 300% 300%;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
  transition: 0.5s;
  animation: gradient_301 5s ease infinite;
  border: double 4px transparent;
  background-image: linear-gradient(#212121, #212121),
    linear-gradient(
      137.48deg,
      #ffdb3b 10%,
      #fe53bb 45%,
      #8f51ea 67%,
      #0044ff 87%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  cursor: pointer;
  margin: 10px 0; /* 增加按钮之间的间距 */
}

.dialog_but strong {
  font-size: 20px;
  margin: 30px;
  margin-bottom: 31px;
}

#dialog_container {
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: 0.5s;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
}

strong {
  z-index: 2;
  font-family: "Avalors Personal Use";
  font-size: 12px;
  letter-spacing: 5px;
  color: #ffffff;
  text-shadow: 0 0 4px white;
}

.cursor {
  font-weight: 400;
}

#dialog_glow {
  position: absolute;
  display: flex;
  width: 12rem;
}

.dialog_circle {
  width: 100%;
  height: 30px;
  filter: blur(2rem);
  animation: pulse_3011 4s infinite;
  z-index: -1;
}

.dialog_circle:nth-of-type(1) {
  background: rgba(254, 83, 186, 0.636);
}

.dialog_circle:nth-of-type(2) {
  background: rgba(142, 81, 234, 0.704);
}

.dialog_but:hover #dialog_container {
  z-index: 1;
  background-color: #212121;
}

.dialog_but:hover {
  transform: scale(1.1);
}

.dialog_but:active {
  border: double 4px #fe53bb;
  background-origin: border-box;
  background-clip: content-box, border-box;
  animation: none;
}

.dialog_but:active .dialog_circle {
  background: #fe53bb;
}

#dialog_content_container {
  position: relative;
  background: transparent;
  width: 200rem;
  height: 200rem;
}

#dialog_content_container::after {
  content: "";
  position: absolute;
  top: -10rem;
  left: -100rem;
  width: 100%;
  height: 100%;
  animation: animStarRotate 90s linear infinite;
}

#dialog_content_container::after {
  background-image: radial-gradient(#ffffff 1px, transparent 1%);
  background-size: 50px 50px;
}

#dialog_content_container::before {
  content: "";
  position: absolute;
  top: 0;
  left: -50%;
  width: 170%;
  height: 500%;
  animation: animStar 60s linear infinite;
}

#dialog_content_container::before {
  background-image: radial-gradient(#ffffff 1px, transparent 1%);
  background-size: 50px 50px;
  opacity: 0.5;
}

@keyframes animStar {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-135rem);
  }
}

@keyframes animStarRotate {
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0);
  }
}

@keyframes gradient_301 {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

@keyframes pulse_3011 {
  0% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}
</style>
