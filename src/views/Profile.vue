<template>
  <div class="about profile_page">
    <header>
      <Head go-back="true" :head-title="profiletitle"></Head>
    </header>
    <section>
      <section class="profile-number">
        <router-link :to="{ name: 'userInfo' }" class="myorder">
          <div class="profile-wrap">
            <div class="first-cell">
              <div class="cell left">
                <div class="avtor"></div>
                <div class="name-wrap">
                  <p>古月</p>
                  <p class="telphone">18565615969</p>
                </div>
              </div>
              <span class="myorder-divsvg right">
                <i class="iconfont icon-down-tongyong-copy"></i>
              </span>
            </div>
          </div>
        </router-link>
      </section>
      <section class="info-data">
        <ul class="clear">
          <router-link to="/balance" tag="li" class="info-data-link">
            <span class="info-data-top"
              ><b>{{ parseInt(balance).toFixed(2) }}</b
              >元</span
            >
            <span class="info-data-bottom">我的余额</span>
          </router-link>
          <router-link to="/benefit" tag="li" class="info-data-link">
            <span class="info-data-top"
              ><b>{{ count }}</b
              >个</span
            >
            <span class="info-data-bottom">我的优惠</span>
          </router-link>
          <router-link to="/points" tag="li" class="info-data-link">
            <span class="info-data-top"
              ><b>{{ pointNumber }}</b
              >分</span
            >
            <span class="info-data-bottom">我的积分</span>
          </router-link>
        </ul>
      </section>
      <section class="profile-1reTe">
        <!-- 我的订单 -->
        <router-link :to="{ name: 'order' }" class="myorder">
          <aside>
            <i class="iconfont icon-tongyongleicaidanxiang color1"></i>
          </aside>
          <div class="myorder-div">
            <span>我的订单</span>
            <span class="myorder-divsvg">
              <i class="iconfont icon-down-tongyong-copy"></i>
            </span>
          </div>
        </router-link>
        <!-- 积分商城 -->
        <router-link :to="{ name: 'mall' }" class="myorder">
          <aside>
            <i class="iconfont icon-shouye color2"></i>
          </aside>
          <div class="myorder-div">
            <span>积分商城</span>
            <span class="myorder-divsvg">
              <i class="iconfont icon-down-tongyong-copy"></i>
            </span>
          </div>
        </router-link>
        <!-- 我的收藏 -->
        <router-link :to="{ name: 'favorite' }" class="myorder">
          <aside>
            <i class="iconfont icon-shoucang1 color3"></i>
          </aside>
          <div class="myorder-div">
            <span>我的收藏</span>
            <span class="myorder-divsvg">
              <i class="iconfont icon-down-tongyong-copy"></i>
            </span>
          </div>
        </router-link>
      </section>
      <section class="profile-1reTe">
        <!-- 服务中心 -->
        <router-link :to="{ name: 'service' }" class="myorder">
          <aside>
            <i class="iconfont icon-fuwu1 color4"></i>
          </aside>
          <div class="myorder-div">
            <span>服务中心</span>
            <span class="myorder-divsvg">
              <i class="iconfont icon-down-tongyong-copy"></i>
            </span>
          </div>
        </router-link>
        <router-link :to="{ name: 'address' }" class="myorder">
          <aside>
            <i class="iconfont icon-address color5"></i>
          </aside>
          <div class="myorder-div">
            <span>收货地址</span>
            <span class="myorder-divsvg">
              <i class="iconfont icon-down-tongyong-copy"></i>
            </span>
          </div>
        </router-link>
      </section>
    </section>
  </div>
</template>

<script>
import Head from "@/components/Head.vue";

export default {
  name: "About",
  components: { Head },
  data() {
    return {
      profiletitle: "我的",
      balance: 0, //我的余额
      count: 0, //优惠券个数
      pointNumber: 0, //积分数
      avatar: "" //头像地址
    };
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
.profile-wrap {
  position: relative;
  width: 100%;
  .rem(height, 200);
  background: @headBg;
  .rem(margin-top, 1);
  .first-cell {
    .rem(padding, 20);
    .rem(padding-top, 40);
    .cell {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
    }
    div {
      p {
        .rem(font-size, 36);
        color: white;
        text-align: left;
        text-shadow: 1px 2px 5px rgba(255, 0, 0, 0.2);
      }
    }
    .myorder-divsvg {
      i {
        .rem(line-height, 90);
        color: white;
      }
    }
  }
  .avtor {
    .rem(width, 90);
    .rem(height, 90);
    border: 1px solid white;
    border-radius: 50%;
    background: url("../assets/images/avtor.jpg") no-repeat center center;
    background-size: cover;
    .rem(margin-right, 30);
  }
}
.info-data {
  width: 100%;
  background: white;
  box-sizing: border-box;
  ul {
    .info-data-link {
      // float: left;
      width: 33.33%;
      display: inline-block;
      border-right: 1px solid #f1f1f1;
      .rem(border-right-width, 1);
      span {
        display: block;
        width: 100%;
        text-align: center;
      }
      .info-data-top {
        .rem(padding, 30);
        b {
          .rem(font-size, 50);
          color: #f90;
          display: inline-block;
          font-weight: 700;
          line-height: 1rem;
          font-family: Helvetica Neue, Tahoma;
        }
      }
      .info-data-bottom {
        font-weight: 400;
        padding-bottom: 0.453333rem;
      }
    }
    .info-data-link:nth-of-type(2) {
      .info-data-top {
        b {
          color: #ff5f3e;
        }
      }
    }
    .info-data-link:nth-of-type(3) {
      border: 0;
      .info-data-top {
        b {
          color: #6ac20b;
        }
      }
    }
  }
}
.profile-1reTe {
  margin-top: 0.4rem;
  background: white;
  .myorder {
    display: flex;
    align-items: center;
    aside {
      .rem(width, 60);
      .rem(height, 60);
      .rem(margin-left, 20);
      i {
        .rem(font-size, 42);
        .rem(line-height, 60);
      }
    }
    .myorder-div {
      width: 100%;
      border-bottom: 1px solid #f1f1f1;
      .rem(border-bottom-width, 1);
      .rem(padding-top, 24);
      .rem(padding-bottom, 24);
      .rem(padding-left, 20);
      .rem(padding-right, 20);
      .rem(line-height, 40);
      display: flex;
      justify-content: space-between;
      span {
        display: block;
      }
      .myorder-divsvg {
        i {
          .rem(font-size, 30);
          color: #bbb;
        }
      }
    }
  }
  .myorder:nth-of-type(3) .myorder-div {
    border: 0;
  }
}
.router-slid-enter-active,
.router-slid-leave-active {
  transition: all 0.4s;
}
.router-slid-enter,
.router-slid-leave-active {
  transform: translate3d(2rem, 0, 0);
  opacity: 0;
}
.color1 {
  color: #03a9f4;
  .rem(font-size, 38) !important;
}
.color2 {
  color: #4caf50;
}
.color3 {
  color: #ff9800;
}
.color4 {
  color: #00bcd4;
}
.color5 {
  color: #f44336;
  .rem(font-size, 56) !important;
}
</style>
