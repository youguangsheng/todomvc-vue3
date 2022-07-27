<!-- 动画效果四 -->
<template>
  <div class="h100 rela">
    <div class="left-side">
      <div class="text">南城FE</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.left-side {
  height: 100%;
  font-size: 50px;
  background: linear-gradient(90deg, rgb(0, 0, 0) 50%, #fff 50%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    width: 200px;
  }

  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    color: #fff;
    transform: translate(-50%, -50%);
    animation: move 2s infinite linear alternate;
    mix-blend-mode: difference;
  }
}

@keyframes move {
  0% {
    transform: translate(-30%, -50%);
  }
  100% {
    transform: translate(-70%, -50%);
  }
}
</style>
