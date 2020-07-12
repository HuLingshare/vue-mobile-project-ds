var swiper = [
  {
    src: require("../images/1.jpg"),
    color: "rgba(248, 208, 210, 0.2)"
  },
  {
    src: require("../images/2.png"),
    color: "rgba(36, 34, 76, 0.2)"
  },
  {
    src: require("../images/3.png"),
    color: "rgba(242, 136, 73, 0.2)"
  },
  {
    src: require("../images/4.png"),
    color: "rgba(137, 48, 27, 0.2)"
  },
  {
    src: require("../images/5.png"),
    color: "rgba(245, 237, 254, 0.2)"
  },
  {
    src: require("../images/6.png"),
    color: "rgba(5, 33, 59, 0.2)"
  },
  {
    src: require("../images/7.png"),
    color: "rgba(65, 48, 172, 0.2)"
  },
  {
    src: require("../images/8.png"),
    color: "rgba(45, 93, 141, 0.2)"
  },
  {
    src: require("../images/9.png"),
    color: "rgba(64, 150, 177, 0.2)"
  },
  {
    src: require("../images/10.png"),
    color: "rgba(169, 151, 245, 0.2)"
  }
];
// 定义存放生成随机数的数组
var array = new Array();
// 循环N次生成随机数
for (let i = 0; ; i++) {
  // 只生成10个随机数
  if (array.length < 10) {
    generateRandom(10);
  } else {
    break;
  }
}
// 生成随机数的方法
function generateRandom(count) {
  var rand = Math.floor(Math.random() * count);
  for (var i = 0; i < array.length; i++) {
    if (array[i] == rand) {
      return false;
    }
  }
  array.push(rand);
}

var arr1 = array.splice(0, 5);
var swipeList = [];
arr1.forEach(item => {
  swipeList.push(swiper[item]);
});

// nav
let lightColorList = [
  "#ff9800",
  "#06c1ae",
  "#f07c6b",
  "#5eb4f2",
  "#f8c346",
  "#e8643a",
  "#4caf50",
  "#39cdf0"
];
let deepColorList = [
  "#c37b12",
  "#0f8378",
  "#c94a37",
  "#318dcf",
  "#c59219",
  "#b54522",
  "#16901b",
  "#1f96b3"
];
var navList = [
  {
    label: "自助餐",
    icon: "icon-canyin3",
    txtShcolor: deepColorList[0],
    bgColor: lightColorList[0]
  },
  {
    label: "中餐",
    icon: "icon-canyin",
    txtShcolor: deepColorList[1],
    bgColor: lightColorList[1]
  },
  {
    label: "快餐",
    icon: "icon-canyin1",
    txtShcolor: deepColorList[2],
    bgColor: lightColorList[2]
  },
  {
    label: "西餐",
    icon: "icon-canyincanju",
    txtShcolor: deepColorList[3],
    bgColor: lightColorList[3]
  },
  {
    label: "生鲜",
    icon: "icon-jinkoushengxianmeishi",
    txtShcolor: deepColorList[4],
    bgColor: lightColorList[4]
  },
  {
    label: "生鲜",
    icon: "icon-jinkoushengxianmeishi",
    txtShcolor: deepColorList[5],
    bgColor: lightColorList[5]
  },
  {
    label: "生鲜",
    icon: "icon-jinkoushengxianmeishi",
    txtShcolor: deepColorList[6],
    bgColor: lightColorList[6]
  },
  {
    label: "饮品",
    icon: "icon-leimucumeishi",
    txtShcolor: deepColorList[7],
    bgColor: lightColorList[7]
  }
];

var goods = [
  {
    name: "帝诺西饼（财大店）",
    tag: "甜品店",
    star: "5",
    char1: "环境特别好，精致美味",
    char2: "满25减5;8.5折",
    price: "18",
    num: "970",
    address: "洪山区南湖大道光谷时尚城商业步行街",
    picUrl: require("../images/homeGood1.jpg"),
    id: 1
  },
  {
    name: "美食一家（佛山店）(喜马拉雅游乐园对面)",
    tag: "海鲜自助餐厅",
    star: "5",
    char1: "环境特别好，菜很精致",
    char2: "满25减5;8.5折",
    price: "18",
    num: "970",
    address: "硅谷中心人才街",
    picUrl: require("../images/homeGood2.jpg"),
    id: 2
  },
  {
    name: "雨玲珑，花芬芳",
    tag: "高档酒楼",
    star: "5",
    char1: "吃过的人都说好",
    char2: "满18减5",
    price: "18",
    num: "970",
    address: "御灵街道长江一号14号",
    picUrl: require("../images/homeGood3.jpg"),
    id: 3
  },
  {
    name: "千层塔",
    tag: "高档连锁酒楼",
    star: "5",
    char1: "高逼格",
    char2: "满480减50;满250减20;满1000打8折;会员7.5折",
    price: "18",
    num: "1980",
    address:
      "平地起英雄汇长安街壹号平地起英雄汇长安街壹号平地起英雄汇长安街壹号",
    picUrl: require("../images/homeGood4.jpg"),
    id: 4
  },
  {
    name: "帝诺西饼（财大店）",
    tag: "甜品店",
    star: "5",
    char1: "环境特别好，精致美味, 网红餐厅",
    char2: "满25减5;8.5折",
    price: "18",
    num: "970",
    address: "洪山区南湖大道光谷时尚城商业步行街",
    picUrl: require("../images/homeGood5.jpg"),
    id: 5
  },
  {
    name: "美食一家（佛山店）",
    tag: "海鲜自助餐厅",
    star: "5",
    char1: "环境特别好，菜很精致",
    char2: "满25减5;8.5折",
    price: "18",
    num: "970",
    address: "硅谷中心人才街",
    picUrl: require("../images/homeGood6.jpg"),
    id: 6
  },
  {
    name: "雨玲珑，花芬芳",
    tag: "高档酒楼",
    star: "5",
    char1: "吃过的人都说好",
    char2: "满18减5",
    price: "18",
    num: "970",
    address: "御灵街道长江一号14号",
    picUrl: require("../images/homeGood7.jpg"),
    id: 7
  },
  {
    name: "千层塔",
    tag: "高档连锁酒楼",
    star: "5",
    char1: "高逼格",
    char2: "满480减50",
    price: "18",
    num: "1980",
    address: "平地起英雄汇长安街壹号",
    picUrl: require("../images/homeGood8.jpg"),
    id: 8
  },
  {
    name: "雨玲珑，花芬芳",
    tag: "高档酒楼",
    star: "5",
    char1: "吃过的人都说好",
    char2: "满18减5",
    price: "18",
    num: "970",
    address: "御灵街道长江一号14号",
    picUrl: require("../images/homeGood9.jpg"),
    id: 9
  },
  {
    name: "千层塔",
    tag: "高档连锁酒楼",
    star: "5",
    char1: "高逼格",
    char2: "满480减50",
    price: "18",
    num: "1980",
    address: "平地起英雄汇长安街壹号",
    picUrl: require("../images/homeGood10.jpg"),
    id: 10
  }
];
export { swipeList, navList, goods };
