<template>
  <div class="todos">
    <div class="todos-title">todos</div>
    <div class="todos-mask">
      <div class="todos-body">
        <todo-comp></todo-comp>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoComp from "./todos/index.vue";
export default defineComponent({
  name: "Home",
  components: { TodoComp }
});
</script>

<style scoped lang="scss">
.todos {
  width: 100%;
  height: 100%;
  position: relative;

  &-title {
    color: rgb(231, 71, 43);
    font-size: 100px;
    font-weight: 700;
    padding: 50px;
    text-align: center;
  }

  &-body {
    width: 600px;
    margin: 200px auto;
    z-index: 10;
  }

  &-mask {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(240, 240, 240, 0.8);
  }
}
</style>
