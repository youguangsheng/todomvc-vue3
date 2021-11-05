<template>
  <div class="todo-container">
    <header class="todo-header">
      <input class="todo-input" placeholder="请输入" />
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.todo-container {
  padding: 20px;
  border-radius: 10px;
  background: #fff;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);

  input::-webkit-input-placeholder,
  input::-moz-placeholder,
  input:-ms-input-placeholder {
    font-style: italic;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.4);
  }

  input:focus {
    outline: 0;
  }

  .todo-input {
    font-style: italic;
    width: 100%;
    font-size: 22px;
    padding: 16px 16px 16px 60px;
    border: none;
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  }
}
</style>
