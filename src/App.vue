<template>
  <van-button type="primary" @click="totest">主要按钮</van-button>
  <van-button type="success" @click="tohome">成功按钮</van-button>
  <van-button type="success" @click="tothree">three</van-button>
  <!-- <div class="ased">12345</div> -->
  <router-view />
  <!-- <ComTest /> -->
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
</script>

<style lang="scss">
@import "./assets/app.scss";
</style>
