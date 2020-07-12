<template>
  <ul class="footer">
    <div class="one-px"></div>
    <li
      class="item"
      v-for="(item, key) in navList"
      :key="key"
      @click="switchIndex(item, key)"
    >
      <i :class="[item.icons]" :style="getStyle(item)"></i>
      <span>{{ item.label }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "FooterNav",
  components: {},
  data() {
    return {
      acitveIndex: 0,
      navList: [
        {
          label: "首页",
          path: "/home",
          icons: "icon iconfont icon-canyindianmeishidian",
          activeColor: "#F56C6C",
          defaultColor: "#554455",
          index: 0
        },
        {
          label: "圈子",
          path: "/friends",
          icons: "icon iconfont icon-heart",
          activeColor: "#F56C6C",
          defaultColor: "#554455",
          index: 1
        },
        {
          label: "购物车",
          path: "/cart",
          icons: "icon iconfont icon-bussiness",
          activeColor: "#F56C6C",
          defaultColor: "#554455",
          index: 2
        },
        {
          label: "我的",
          path: "/about",
          icons: "icon iconfont icon-ic_friendlist",
          activeColor: "#F56C6C",
          defaultColor: "#554455",
          index: 3
        }
      ]
    };
  },
  methods: {
    getStyle(item) {
      let obj = {
        background:
          item.index === this.acitveIndex ? item.activeColor : "white",
        color: item.index === this.acitveIndex ? "white" : item.defaultColor,
        textShadow:
          item.index === this.acitveIndex ? "2px 2px 5px #d00f0f" : "none"
      };
      return obj;
    },
    switchIndex(item, key) {
      if (this.acitveIndex == key) {
        return false;
      }
      this.acitveIndex = key;
      this.gotoAddress(item.path);
    },
    gotoAddress(path) {
      this.$router.push(path);
    }
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
@import "@/assets/css/mixin.less";
.footer {
  width: 100%;
  .rem(height, 110);
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-flow: row nowrap;
  background-color: white;
  .rem(padding-top, 4);
  .rem(padding-bottom, 4);
  .one-px {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    .rem(height, 1);
    background: #ddd;
  }
  li {
    width: 25%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    .rem(line-height, 42);
    span {
      .rem(font-size, 28);
    }
    i {
      display: inline-block;
      .rem(width, 60);
      .rem(height, 60);
      .rem(line-height, 60);
      .rem(font-size, 50);
      border-radius: 50%;
      background: white;
    }
  }
}
</style>
