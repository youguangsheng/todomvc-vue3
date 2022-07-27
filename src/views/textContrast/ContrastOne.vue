<!-- 动画效果一 -->
<template>
  <div class="h100 rela block-1">
    <div id="left-side" class="side">
      <h2 class="title">
        前端开发
        <span class="fancy">南城FE</span>
      </h2>
    </div>
    <div id="right-side" class="side">
      <h2 class="title">
        前端开发
        <span class="fancy">南城FE</span>
      </h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/*
  一个绿色盒子，一个蓝色盒子，
  其中绿色盒子使用定位的层级z-index高于蓝色盒子；
  通过改变蓝色盒子的宽度覆盖绿色盒子；
  盒子里面的文字内容宽度固定，
  否则两端文本不能刚好重叠

*/
.block-1 {
  --yellow: #d4fc79;
  --blue: #a1c4fd;
  --dark: #333;
}
.block-1 {
  background-color: var(--dark);
  margin: 0px;
  border-radius: 5px;
}
.side {
  display: grid;
  height: 100%;
  overflow: hidden;
  place-items: center;
  position: absolute;
  width: 100%;

  .title {
    font-size: 34px;
    margin: 0px 10vw;
    text-align: center;
    width: 80vw;
  }

  .fance {
    font-size: 38px;
    line-height: 0.8em;
  }
}

#left-side {
  background-color: var(--blue);
  width: 60%;
  animation: run 2s infinite alternate-reverse linear;
  z-index: 2;

  .title {
    color: #fff;
  }

  .fancy {
    color: var(--yellow);
  }
}

#right-side {
  background-color: var(--yellow);

  .title {
    color: var(--dark);
  }

  .fancy {
    color: #fff;
  }

  @keyframes run {
    100% {
      width: 40%;
    }
  }
}
</style>
