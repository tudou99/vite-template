<template>
  <van-button type="danger" @click="showPop">危险按钮</van-button>
  <van-count-down millisecond :time="time" format="HH:mm:ss:SS" />
  <!-- 文字较短时，通过设置 scrollable 属性开启滚动播放 -->
  <van-notice-bar scrollable text="米袋虽空——樱花开哉！" />

  <!-- 文字较长时，通过禁用 scrollable 属性关闭滚动播放 -->
  <van-notice-bar
    :scrollable="false"
    text="不会回头的东西有四件：说出口的话、离弦的箭、逝去的生活和失去的机会。"
  />
  <van-tabs v-model:active="active">
    <van-tab title="标签 1">内容 1</van-tab>
    <van-tab title="标签 2">内容 2</van-tab>
    <van-tab title="标签 3">内容 3</van-tab>
    <van-tab title="标签 4">内容 4</van-tab>
  </van-tabs>

  <van-dropdown-menu>
    <van-dropdown-item v-model="value1" :options="option1" />
    <van-dropdown-item v-model="value2" :options="option2" />
  </van-dropdown-menu>
  <van-cell-group>
    <van-cell v-for="item in list" :key="item" :title="item" value="内容" />
    <van-cell title="单元格" value="内容" label="描述信息" />
  </van-cell-group>

  <demo />
</template>

<script setup lang="ts">
const active = ref(0);
const time = ref(30 * 60 * 60 * 1000);
const list = ref([1, 2, 3]);
const value1 = ref(0);
const value2 = ref("a");
const option1 = [
  { text: "全部商品", value: 0 },
  { text: "新款商品", value: 1 },
  { text: "活动商品", value: 2 },
];
const option2 = [
  { text: "默认排序", value: "a" },
  { text: "好评排序", value: "b" },
  { text: "销量排序", value: "c" },
];
function showPop() {
  // console.log(12);
}
</script>
