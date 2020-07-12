<template>
  <div class="home">
    <header>
      <Head signin-up="true">
        <div slot="logo" class="location">
          <i class="iconfont icon-ic_locate_line"></i>
        </div>
        <div slot="search" class="search-wrap">
          <i class="iconfont icon-search"></i>
          <input class="search-input" placeholder="请输入商家或美食名称" />
        </div>
      </Head>
    </header>
    <div class="swipe-wrap">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, key) in swipeList" :key="key">
          <div :style="getStyle(item)" class="pic-con"></div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <nav class="nav clear">
      <div class="td left" v-for="(item, key) in navList" :key="key">
        <i
          :class="['iconfont', item.icon]"
          :style="{
            background: item.bgColor,
            textShadow: '0.01rem 0.01rem 0.03rem' + item.txtShcolor
          }"
        ></i>
        <span class="title">{{ item.label }}</span>
      </div>
    </nav>
    <main class="goods">
      <lazy-component>
        <div class="wrap clear">
          <div
            v-for="(good, key) in goods"
            :key="good.id"
            :data-key="key"
            class="cell left"
          >
            <div class="cell-con">
              <div
                class="pic"
                :style="{ backgroundImage: `url(${good.picUrl})` }"
              ></div>
              <div class="con">
                <h5 class="title text-left ellipsis">{{ good.name }}</h5>
                <p class="addrArea text-left ellipsis">{{ good.address }}</p>
                <p class="charArea text-left ellipsis">
                  <span class="text-red">{{ good.star }}分</span>
                  <b>|</b>
                  <span>{{ good.char1 }}</span>
                </p>
                <p class="tags clear ellipsis">
                  <small v-for="(it, index) in getTag(good.char2)" :key="index">
                    {{ it }}
                  </small>
                </p>
                <p class="priceArea text-left">
                  <i>人均</i>
                  <small> &nbsp;¥ </small>
                  <span>{{ good.price }}</span>
                  <b>|</b>
                  <i>起</i>
                  <i>月售 {{ good.num }}</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </lazy-component>
    </main>
  </div>
</template>

<script>
import { swipeList, navList, goods } from "@/assets/js/data.js";
import Head from "@/components/Head.vue";

export default {
  name: "",
  components: { Head },
  data() {
    return {
      swipeList: swipeList,
      navList: navList,
      goods: goods,
      conditions: [
        {
          label: "全部"
        }
      ]
    };
  },
  methods: {
    getStyle(item) {
      let shadowx = window.px2rem(10) + "rem";
      let shadowb = window.px2rem(20) + "rem";
      let shadow = `${shadowx} ${shadowx} ${shadowb} ${item.color}`;
      let obj = {
        backgroundImage: `url(${item.src})`,
        boxShadow: shadow
      };
      return obj;
    },
    getTag(str) {
      let arr = str.split(";");
      return arr;
    }
  },
  mounted() {
    this.$store.dispatch("changeLoading");
  }
};
</script>

<style lang="less" scoped>
@import "@/assets/css/mixin.less";

.home {
  width: 100%;
  min-height: 100vh;
  background: #f8f8f8;
  header {
    .rem(height, 90);
  }
  .swipe-wrap {
    .rem(height, 300);
  }
  .location {
    position: absolute;
    top: 0;
    .rem(left, 20);
    .rem(width, 90);
    .rem(height, 90);
    color: white;
    i {
      .rem(line-height, 90);
      color: white;
      .rem(font-size, 42);
    }
  }
  .search-wrap {
    width: 65%;
    .rem(height, 70);
    background: rgba(255, 255, 255, 0.5);
    .rem(border-radius, 40);
    .rem(margin-top, 10);
    border: 1px solid white;
    .rem(border-width, 1);
    margin: 0 auto;
    .rem(line-height, 70);
    text-align: left;
    i {
      vertical-align: top;
      color: white;
      .rem(font-size, 42);
      .rem(margin-left, 20);
      .rem(margin-right, 10);
    }
    input {
      background: transparent;
      vertical-align: top;
      width: calc(~"100% - 124px");
    }
  }
  .my-swipe .van-swipe-item {
    .rem(height, 300);
    text-align: center;
    background: transparent;
    .rem(padding, 20);
    .rem(padding-bottom, 20);
    position: relative;
    background: white;
    .pic-con {
      position: relative;
      z-index: 2;
      width: 100%;
      height: 100%;
      .rem(border-radius, 32);
      background-size: cover;
      background-repeat: no-repeat;
      background-color: #f8f8f8;
      background-position: center center;
    }
  }
  .nav {
    width: 100%;
    .rem(height, 280);
    background: white;
    .rem(padding-top, 20);
    .td {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      align-items: center;
      width: 25%;
      .rem(height, 120);
      .rem(margin-bottom, 20);
      i {
        display: inline-block;
        .rem(width, 72);
        .rem(height, 72);
        border-radius: 50%;
        color: #fff;
        .rem(line-height, 72);
        .rem(font-size, 46);
      }
      .title {
        .rem(height, 48);
        .rem(line-height, 48);
        .rem(font-size, 24);
        color: #333;
      }
    }
  }
  .goods {
    width: 100%;
    .rem(margin-top, 20);
    .wrap {
      width: 100%;
      .rem(padding-left, 10);
      .rem(padding-right, 10);
    }
    .cell {
      width: 50%;
      .rem(padding, 10);
      .cell-con {
        background: white;
        .rem(border-radius, 24);
        overflow: hidden;
        box-shadow: 6px 6px 10px rgba(125, 125, 125, 0.1);
      }
      .pic {
        width: 100%;
        .rem(height, 180);
        background-size: cover;
        background-repeat: no-repeat;
        background-color: #f8f8f8;
        background-position: center center;
      }
      .con {
        width: 100%;
        .rem(padding, 20);
        .rem(font-size, 20);
        h5 {
          color: #333;
          .rem(font-size, 28);
        }
        .addrArea {
          color: #888;
          .rem(font-size, 18);
        }
        .charArea {
          color: #666;
          .rem(line-height, 36);
          span {
            .rem(font-size, 20);
            color: #444;
          }
          .text-red {
            color: @redText;
          }
        }
        .tags {
          .rem(margin-bottom, 10);
          .rem(height, 24);
          overflow: hidden;
          small {
            float: left;
            .rem(font-size, 14);
            border: 0 solid lighten(@redText, 40%);
            .rem(border-width, 1);
            .rem(border-radius, 6);
            color: @redText;
            .rem(padding-left, 6);
            .rem(padding-right, 6);
            background: lighten(@redText, 48%);
            .rem(margin-right, 8);
            .rem(margin-bottom, 4);
            position: relative;
            .rem(line-height, 20);
          }
        }
        .priceArea {
          .rem(font-size, 20);
          color: @redText;
          small {
            .rem(font-size, 18);
          }
          span {
            color: @redText;
          }
          i {
            .rem(font-size, 18);
          }
        }
      }
    }
  }
  b {
    .rem(font-size, 18);
    margin: 0 18px;
    color: #ddd;
  }
  .text-left {
    text-align: left;
  }
}
</style>
