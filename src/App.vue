<template>
  <van-button type="primary" @click="totest">主要按钮</van-button>
  <van-button type="success" @click="tohome">成功按钮</van-button>
  <van-button type="success" @click="tothree">three</van-button>
  <router-view />
</template>

<script setup lang="ts">
const router = useRouter();
function tohome() {
  router.push("/home");
}
function totest() {
  router.push("/test");
}
function tothree() {
  router.push("/three");
}
console.log(12345);
</script>

<style lang="scss">
@import "./assets/app.scss";
</style>
