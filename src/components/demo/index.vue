<template>
  <van-popup
    v-model:show="show"
    position="right"
    :style="{ height: '100%', width: '100%' }"
  >
    <van-search v-model="value" placeholder="请输入搜索关键词" />

    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
  </van-popup>
</template>
<script setup lang="ts">
const show = ref(true);
const value = ref("");
</script>
