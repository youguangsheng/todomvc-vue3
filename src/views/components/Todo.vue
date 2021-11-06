<script lang="tsx">
import { defineComponent, reactive } from "vue";
import TodoHeader from "./TodoHeader.vue";
import TodoItem from "./TodoItem.vue";

interface TODO {
  id: number;
  todoName: string;
  isComplete: boolean;
}
export default defineComponent({
  name: "Todos",
  components: { TodoHeader, TodoItem },
  setup() {
    type TODOS = Array<TODO>;
    let todos = reactive<TODOS>([]);
    function getTodo(input: string): void {
      const todo: TODO = {
        id: todos.length + 1,
        todoName: input,
        isComplete: false
      };
      todos.push(todo);
    }

    function todoItemChange(id: number, val: boolean): void {
      const index = todos.findIndex(todo => todo.id === id);
      todos[index].isComplete = val;
    }

    return () => (
      <div class="todo-container">
        <todo-header onTodoChange={getTodo}></todo-header>
        <section class="todo-body">
          {todos.map(todo => {
            return (
              <todo-item
                key={todo.id}
                todo={todo}
                onTodoItemChange={todoItemChange}
              ></todo-item>
            );
          })}
        </section>
      </div>
    );
  }
});
</script>

<style scoped lang="scss">
.todo-container {
  padding: 20px;
  border-radius: 10px;
  background: #fff;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}
</style>
