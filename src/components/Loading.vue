<template>
  <div class="loading-box">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="48px"
      height="60px"
      viewBox="0 0 24 30"
      style="enable-background:new 0 0 50 50"
      xml:space="preserve"
    >
      <rect
        x="0"
        y="7.6416"
        width="4"
        height="14.7168"
        fill="#FF6700"
        opacity="0.2"
      >
        <animate
          attributeName="opacity"
          attributeType="XML"
          values="0.2; 1; .2"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="height"
          attributeType="XML"
          values="10; 20; 10"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="y"
          attributeType="XML"
          values="10; 5; 10"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
      </rect>
      <rect
        x="8"
        y="5.1416"
        width="4"
        height="19.7168"
        fill="#FF6700"
        opacity="0.2"
      >
        <animate
          attributeName="opacity"
          attributeType="XML"
          values="0.2; 1; .2"
          begin="0.15s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="height"
          attributeType="XML"
          values="10; 20; 10"
          begin="0.15s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="y"
          attributeType="XML"
          values="10; 5; 10"
          begin="0.15s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
      </rect>
      <rect
        x="16"
        y="7.3584"
        width="4"
        height="15.2832"
        fill="#FF6700"
        opacity="0.2"
      >
        <animate
          attributeName="opacity"
          attributeType="XML"
          values="0.2; 1; .2"
          begin="0.3s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="height"
          attributeType="XML"
          values="10; 20; 10"
          begin="0.3s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="y"
          attributeType="XML"
          values="10; 5; 10"
          begin="0.3s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Loading",
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="less" scoped>
.loading-box {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2000;
  background: #f8f8f8;
  line-height: 100vh;
}
</style>
