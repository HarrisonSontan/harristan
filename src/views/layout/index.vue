<template>
  <div>
    <IndexNavbar />
    <router-view></router-view>
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
};
</script>

<style scoped>
</style>
