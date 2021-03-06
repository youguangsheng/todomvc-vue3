<script lang="tsx">
import { defineComponent, reactive, ref, computed } from "vue";
import TodoHeader from "./TodoHeader.vue";
import TodoItem from "./TodoItem.vue";
import TodoFooter from "./TodoFooter.vue";
import { TODO } from "./type";
export default defineComponent({
  name: "Todos",
  components: { TodoHeader, TodoItem, TodoFooter },
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

    const curTab = ref<string>("all");
    const handleChange = (tab: string) => {
      curTab.value = tab;
      location.hash = `/${tab}`;
    };

    const computedTodos = computed(() => {
      if (curTab.value === "active")
        return todos.filter(todo => !todo.isComplete);
      if (curTab.value === "complete")
        return todos.filter(todo => todo.isComplete);
      return todos;
    });

    const clearCompleted = () => {
      for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        if (todo.isComplete) {
          todos.splice(i, 1);
          i--;
        }
      }
    };

    return () => (
      <div class="todo-container">
        <todo-header onTodoChange={getTodo}></todo-header>
        <section class="todo-body">
          {computedTodos.value.map(todo => {
            return (
              <todo-item
                key={todo.id}
                todo={todo}
                onTodoItemChange={todoItemChange}
              ></todo-item>
            );
          })}
        </section>
        <todo-footer
          todos={todos}
          onChange={handleChange}
          onClearCompleted={clearCompleted}
        ></todo-footer>
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
