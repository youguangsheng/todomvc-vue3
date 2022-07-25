<!-- Vue3+vueuse实现放大镜 -->
<template>
  <div>
    <p>{{ isOutside }}</p>
    <p>X: {{ elementX }}</p>
    <p>Y: {{ elementY }}</p>
  </div>
  <div class="goods-image">
    <div class="middle" ref="target">
      <img :src="images" alt="" />
      <!-- 移动遮罩 -->
      <div class="layer" ref="target" v-show="!isOutside"></div>
    </div>
    <!-- 显示在右侧后放大的区域 -->
    <div class="large" :style="{ backgroundImage: `url(${images})` }" v-show="!isOutside"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import { useMouseInElement } from '@vueuse/core';

const images = ref(
  'https://pic2.zhimg.com/v2-236fed3031d3e9b2d184d0c617ce42ba_1440w.jpg?source=172ae18b'
);
const target = ref(null);

// isOutside 是否进入指定区域 进入为false 否则为true
// elementX 鼠标X位置
// elementY 鼠标Y位置
const { isOutside, elementX, elementY } = useMouseInElement(target);

// 遮罩位置移动
const position = computed(() => {
  // 让光标处在中间
  let x = elementX.value - 100;
  let y = elementY.value - 100;

  // 边界处理
  x = x < 0 ? 0 : x;
  y = y < 0 ? 0 : y;
  x = x > 200 ? 200 : x;
  y = y > 200 ? 200 : y;

  return { x, y };
});

onMounted(() => {});
</script>

<style lang="scss" scoped>
.goods-image {
  margin: 100px auto;
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;
  z-index: 500;

  .middle {
    width: 400px;
    height: 400px;
    background: #f5f5f5;
    position: relative;
    cursor: move;

    img {
      width: 400px;
      height: 400px;
    }

    .layer {
      width: 200px;
      height: 200px;
      background: rgba(0, 0, 0, 0.2);
      position: absolute;
      left: v-bind('`${position.x}px`');
      top: v-bind('`${position.y}px`');
    }
  }

  .large {
    position: absolute;
    top: 0;
    left: 412px;
    width: 400px;
    height: 400px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    // 放大一倍
    background-size: 800px 800px;
    background-color: #f8f8f8;
    background-position: v-bind('`-${position.x*2}px -${position.y*2}px`');
  }
}
</style>
