<template>
  <div :class="themeClass">
    <Background :isSmall="true" />
    <div class="message-container">
      <div class="card">
        <div class="card-content">
          <div class="message-title">留言板</div>
          <div class="poem-container">
            <p class="poem-text">
              只有那些敢于正视自己的缺点并努力改正的人，才能在生活中取得真正的进步。
            </p>
            <p class="poemer">—— 歌德</p>
          </div>
          <h2>交流学习</h2>
          <hr />
          <p>
            如果我的文章有任何不足之处，欢迎大家指出，我们可以多多交流，共同进步。
          </p>
          <h2>指出缺点</h2>
          <hr />
          <p>
            人难免会有看不到自己不足的时候，希望大家能直接指出来，有则改之无则加勉，共同进步，而不是在背后议论。真诚的建议会让大家更好，谢谢大家！
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="message-form">
            <textarea placeholder="在此输入您的留言"></textarea>
            <button>提交</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Background from "@/components/Background.vue";
export default {
  name: "MessageBoard",
  components: {
    Background,
  },
  props: {
    theme: {
      type: String,
      default: "light",
    },
  },
  computed: {
    themeClass() {
      return this.theme === "dark" ? "dark-theme" : "light-theme";
    },
  },
};
</script>

<style scoped>
.message-container {
  display: flex;
  flex-direction: column;
  margin-top: -60px;
  align-items: center;
  padding: 20px;
}

.card {
  width: 80%;
  max-width: 800px;
  background: var(--card-background);
  border-radius: 10px;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07) !important;
  margin-bottom: 20px;
  z-index: 0; /* 确保卡片内容在背景图之上 */
}

.card .card-content {
  padding: 24px;
  border-radius: 0 0 2px 2px;
}

.card-content hr {
  margin: 10px 0px;
}

.card-content h2 {
  margin-top: 10px;
  color: var(--text-color);
}

.card-content p {
  color: var(--text-color);
}

.message-title {
  margin-bottom: 10px;
  font-size: 1.75rem;
  font-weight: 400;
  text-align: center;
  color: var(--text-color);
}

.poem-container {
  text-align: center;
  margin: 20px 0;
  padding: 20px;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  background: var(--poem-background);
}

.poem-text {
  font-size: 1.25rem;
  margin-bottom: 10px;
  font-style: italic;
  color: var(--text-color);
}

.poemer {
  font-size: 1rem;
  color: var(--secondary-text-color);
}

:root {
  --card-background: #ffffff;
  --poem-background: #f9f9f9;
  --border-color: #ccc;
  --text-color: #000000;
  --secondary-text-color: #666;
}

.dark-theme {
  --card-background: #2c3e50;
  --poem-background: #3a3f44;
  --border-color: #4c5562;
  --text-color: #ffffff99;
  --secondary-text-color: #cccccc;
}

.light-theme {
  --card-background: #ffffff;
  --poem-background: #f9f9f9;
  --border-color: #ccc;
  --text-color: #000000;
  --secondary-text-color: #666;
}
</style>
