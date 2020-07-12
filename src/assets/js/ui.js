import Vue from "vue";
// import { Button } from "mint-ui";
import {
  Cell,
  CellGroup,
  Swipe,
  SwipeItem,
  Lazyload,
  Toast
  // Other
} from "vant";
/*
 * mint-ui按需引入ui组件
 */
// Vue.component("MtButton", Button);
/*
 * vant按需引入UI组件
 */
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Toast);
Vue.use(Lazyload, {
  lazyComponent: true
});
