<template>
  <div class="address">
    <header>
      <Head go-back="true" :head-title="profiletitle"></Head>
    </header>
  </div>
</template>

<script>
import Head from "@/components/Head.vue";
export default {
  name: "address",
  components: { Head },
  data() {
    return {
      profiletitle: "积分商城"
    };
  },
  mounted() {
    this.$store.dispatch("changeLoading");
  },
  methods: {}
};
</script>

<style lang="less" scoped>
@import "@/assets/css/mixin.less";

.address {
  width: 100%;
  min-height: 100vh;
  background: #f8f8f8;
  header {
    .rem(height, 90);
  }
}
</style>
