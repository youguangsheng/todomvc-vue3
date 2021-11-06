<script lang="tsx">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "TodoItem",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  props: { todo: { type: Object, default: () => {} } },
  setup(props, { emit }) {
    const todo = reactive(props.todo);
    function onChange() {
      emit("TodoItemChange", todo.id, todo.isComplete);
    }
    return () => {
      return (
        <div class="todo-item">
          <input
            type="checkbox"
            v-model={todo.isComplete}
            onChange={onChange}
          />
          <span class={"todo-name" + (todo.isComplete ? " todo-del" : "")}>
            {todo.todoName}
          </span>
        </div>
      );
    };
  }
});
</script>

<style lang="scss" scoped>
.todo-item {
  padding: 20px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  font-size: 18px;
}

input[type="checkbox"] {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #406eff;
}

.todo-name {
  margin-left: 20px;
}

.todo-del {
  text-decoration: line-through;
}
</style>
