<template>
  <div :class="[themeClass]">
    <IndexNavbar @themeChange="handleThemeChange" />
    <router-view :key="currentRoute" :theme="theme" />
    <IndexFooter />
  </div>
</template>

<script>
import IndexNavbar from "@/components/IndexNavbar.vue";
import IndexFooter from "@/components/IndexFooter.vue";

export default {
  name: "LayoutIndex",
  components: {
    IndexNavbar,
    IndexFooter,
  },
  data() {
    return {
      currentRoute: this.$route.path,
      theme: "light",
    };
  },
  watch: {
    $route(to, from) {
      this.currentRoute = to.path;
    },
  },
  computed: {
    themeClass() {
      return this.theme === "dark" ? "dark-theme" : "light-theme";
    },
  },
  methods: {
    handleThemeChange(theme) {
      document.body.setAttribute("data-theme", theme);
      this.theme = theme;
    },
  },
};
</script>

<style scoped>
.dark-theme {
  background-color: #000000;
  color: #ffffff99;
}

.light-theme {
  background-color: aliceblue;
  color: #ffffff;
}
</style>
