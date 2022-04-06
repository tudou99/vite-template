<template>
  <van-tabs v-model:active="active">
    <van-tab title="标签 1">内容 1</van-tab>
    <van-tab title="标签 2">内容 2</van-tab>
    <van-tab title="标签 3">内容 3</van-tab>
    <van-tab title="标签 4">内容 4</van-tab>
  </van-tabs>
  <van-collapse v-model="activeNames">
    <van-collapse-item title="标题1" name="1">
      代码是写出来给人看的，附带能在机器上运行。
    </van-collapse-item>
    <van-collapse-item title="标题2" name="2">
      技术无非就是那些开发它的人的共同灵魂。
    </van-collapse-item>
    <van-collapse-item title="标题3" name="3">
      在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
    </van-collapse-item>
  </van-collapse>
  <van-dropdown-menu>
    <van-dropdown-item v-model="value1" :options="option1" />
    <van-dropdown-item v-model="value2" :options="option2" />
  </van-dropdown-menu>
  <demo />
</template>

<script lang="ts" setup>
const active = ref(0);
const activeNames = ref(["1"]);
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
</script>
