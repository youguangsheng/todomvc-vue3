<script lang="tsx">
import { defineComponent, ref, onMounted } from "vue";
export default defineComponent({
  name: "TodoHeader",
  setup(props, { emit }) {
    const todoInput = ref<string>("");
    function emitTodoInput(e: KeyboardEvent): void {
      if (e.key === "Enter") {
        if (!todoInput.value.trim()) return;
        emit("todo-change", todoInput.value);
        todoInput.value = "";
      }
    }
    onMounted(() => {
      window.addEventListener("keypress", emitTodoInput, false);
    });
    return () => (
      <header class="todo-header">
        <input
          class="todo-input"
          placeholder="请输入"
          v-model={todoInput.value}
        />
      </header>
    );
  }
});
</script>

<style lang="scss" scoped>
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
</style>
