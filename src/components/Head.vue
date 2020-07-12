<template>
  <header id="head_top">
    <!-- logo图片 -->
    <slot name="logo"></slot>
    <!-- 搜素框 -->
    <slot name="search"></slot>
    <!-- 返回 -->
    <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
      <i class="iconfont icon-left-tongyong"></i>
    </section>
    <!-- 登录 -->
    <router-link
      :to="userInfo ? '/profile' : '/login'"
      v-if="signinUp"
      class="head_login"
    >
      <svg class="user_avatar" v-if="userInfo">
        <use
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xlink:href="#user"
        ></use>
      </svg>
      <span class="login_span" v-else>登录</span>
    </router-link>
    <!-- 头部标题 -->
    <section class="title_head ellipsis" v-if="headTitle">
      <span class="title_text">{{ headTitle }}</span>
    </section>
    <slot name="edit"></slot>
    <slot name="msite-title"></slot>
    <slot name="changecity"></slot>
    <slot name="changeLogin"></slot>
  </header>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  mounted() {
    //获取用户信息
    // this.getUserInfo();
  },
  props: ["signinUp", "headTitle", "goBack"],
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    ...mapActions(["getUserInfo"]),
  }
};
</script>

<style lang="less" scoped>
@import "@/assets/css/mixin.less";

#head_top {
  background-color: @headBg;
  position: fixed;
  width: 100%;
  .rem(height, 90);
  z-index: 100;
  left: 0;
  top: 0;
}
.head_goback {
  position: absolute;
  left: 0;
  top: 0;
  .rem(width, 90);
  .rem(height, 90);
  .rem(line-height, 90);
  i {
    color: #ffffff;
    .rem(font-size, 42);
    font-weight: bold;
  }
}
.head_login {
  position: absolute;
  .rem(right, 20);
  top: 0;
  .rem(line-height, 90);
  .login_span {
    color: #fff;
  }
  .user_avatar {
    fill: #fff;
  }
}
.title_head {
  width: 50%;
  margin: 0 auto;
  .rem(line-height, 90);
  text-align: center;
  .title_text {
    color: #fff;
    text-align: center;
    font-weight: bold;
    .rem(font-size, 36);
  }
}
</style>
