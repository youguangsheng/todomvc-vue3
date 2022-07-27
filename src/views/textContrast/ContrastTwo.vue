<!-- 动画效果二 -->
<template>
  <div class="h100 rela block-2">
    <div class="out">
      <div class="wrapper">
        <div class="text-wrapper">iPhone 14 Pro</div>
      </div>
      <div class="bg-wrapper">
        <div class="modal"></div>
        <div class="text-wrapper">iPhone 14 Pro</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.out {
  width: 800px;
  height: 100%;
  margin: 0 auto;
  position: relative;
}

.wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
}

.text-wrapper {
  font-size: 40px;
  height: 86px;
  line-height: 86px;
  margin-left: -222px;
  margin-top: -43px;
  width: 444px;
  left: 50%;
  position: absolute;
  text-align: center;
  top: 50%;
  color: #000;
}

.bg-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  animation: run 2s infinite alternate-reverse;

  .text-wrapper {
    font-size: 50px;
    color: aquamarine;
  }

  .modal {
    width: 100%;
    height: 400px;
    background-color: rgb(138, 128, 128);
  }
}

@keyframes run {
  0% {
    clip-path: inset(47.5px 100px);
  }
  100% {
    clip-path: inset(100.5px 350px);
  }
}

@keyframes modal-run {
  50% {
    transform: scale(1.2) translateY(0) translateZ(0);
  }
  100% {
    transform: scale(0.8) translateY(40px) translateZ(0);
  }
}
</style>
