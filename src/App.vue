<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <FooterNav></FooterNav>
    <div class="loading" v-if="showLoading">
      <Loading></Loading>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import FooterNav from "@/components/FooterNav.vue";
import Loading from "@/components/Loading.vue";

export default {
  name: "App",
  components: { FooterNav, Loading },
  data() {
    return {
      transitionName: "slide-left"
    };
  },
  computed: {
    ...mapState(["showLoading"])
  },
  watch: {
    $route(to, from) {
      if (to.meta.index > from.meta.index) {
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    }
  }
};
</script>
<style lang="less">
@import "@/assets/css/mixin.less";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.3s;
}
.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
#app > div:first-child {
  .rem(padding-bottom, 110);
}
</style>
