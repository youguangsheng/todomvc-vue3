<!-- 纯CSS实现四种方式文本反差色效果 -->
<template>
  <div class="flex-d w100 h100">
    <div class="flex1">
      <contrast-one class="margin-20"></contrast-one>
    </div>
    <div class="flex1">
      <contrast-two></contrast-two>
    </div>
    <div class="flex1">
      <contrast-three></contrast-three>
    </div>
    <div class="flex1">
      <contrast-four></contrast-four>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ContrastOne from './textContrast/ContrastOne.vue';
import ContrastTwo from './textContrast/ContrastTwo.vue';
import ContrastThree from './textContrast/ContrastThree.vue';
import ContrastFour from './textContrast/ContrastFour.vue';

// https://juejin.cn/post/7120186462317838372
</script>

<style lang="scss" scoped></style>
