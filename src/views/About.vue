<template>
  <div class="about profile_page">
    <transition name="router-slid" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    this.$store.dispatch("changeLoading");
  }
};
</script>

<style lang="less" scoped>
@import "@/assets/css/mixin.less";
.about {
  width: 100%;
  min-height: 100vh;
  background: #f8f8f8;
  header {
    .rem(height, 90);
  }
}
</style>
