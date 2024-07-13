<template>
  <div>
    <nav :class="['navbar', { 'navbar-scrolled': isScrolled }]">
      <div class="navbar-left">
        <button class="menu-btn" @click="toggleSidebar">☰</button>
        <a href="/home" class="navbar-link">
          <img src="@/assets/Snowman.jpg" class="avatar" />
          <span class="navbar-name">HarristanのBlog</span>
        </a>
      </div>
      <div class="navbar-right" v-if="!isMobile">
        <router-link to="/">首页</router-link>
        <router-link to="/home">归档</router-link>
        <router-link to="/message">留言板</router-link>
        <router-link to="/friends">友链</router-link>
        <router-link to="/aboutme">关于</router-link>
        <router-link to="/search">搜索</router-link>
      </div>
    </nav>
    <aside v-if="isMobile && isSidebarOpen" class="sidebar">
      <router-link to="/" @click="toggleSidebar">首页</router-link>
      <a href="#archive" @click="toggleSidebar">归档</a>
      <a href="#message" @click="toggleSidebar">留言板</a>
      <a href="#friends" @click="toggleSidebar">友链</a>
      <a href="#about" @click="toggleSidebar">关于</a>
      <a href="#search" @click="toggleSidebar">搜索</a>
    </aside>
    <div
      v-if="isMobile && isSidebarOpen"
      class="overlay"
      @click="toggleSidebar"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isScrolled: false,
      isMobile: false,
      isSidebarOpen: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.checkMobile);
    this.checkMobile();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.checkMobile);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
    checkMobile() {
      this.isMobile = window.innerWidth <= 1024;
    },
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 10%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  transition: background-color 0.5s ease; /* 添加过渡效果 */
  background: rgba(255, 255, 255, 0); /* 初始背景透明 */
}

.navbar.navbar-scrolled {
  background: rgba(86, 204, 242, 1); /* 滚动后背景颜色，带透明度 */
  transition: background-color 0.5s ease; /* 添加过渡效果 */
}

.navbar-left {
  display: flex;
  align-items: center;
}

.menu-btn {
  position: absolute;
  left: 10%;
  display: none;
  font-size: 28px;
  background: none;
  border: none;
  cursor: pointer;
  color: white;
}

.navbar-link {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.navbar-name {
  font-size: 20px;
  color: white;
}

.navbar-right {
  display: flex;
  align-items: center;
}

.navbar-right a,
.navbar-right router-link {
  color: white;
  text-decoration: none;
  margin-left: 20px;
}

.navbar-right a:hover,
.navbar-right router-link:hover {
  text-decoration: underline;
}

@media (max-width: 1024px) {
  .navbar-right {
    display: none;
  }
  .menu-btn {
    display: block;
  }
  .navbar-left {
    justify-content: center;
    width: 100%;
  }
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background: rgba(86, 204, 242, 1);
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  z-index: 15;
}

.sidebar a,
.sidebar router-link {
  color: white;
  text-decoration: none;
  margin-bottom: 20px;
  font-size: 18px;
}

.sidebar a:hover,
.sidebar router-link:hover {
  text-decoration: underline;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
}
</style>
