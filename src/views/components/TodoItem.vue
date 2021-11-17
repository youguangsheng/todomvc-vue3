<script lang="tsx">
import { TODO } from "./type";
import { defineComponent, reactive, PropType } from "vue";
export default defineComponent({
  name: "TodoItem",
  props: { todo: { type: Object as PropType<TODO>, default: () => {} } },
  emits: {
    TodoItemChange: (id: number, isComplete: boolean): boolean => {
      if (id > 0 && isComplete !== undefined) {
        return true;
      } else {
        console.warn("Invalid submit event payload!");
        return false;
      }
    }
  },
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
