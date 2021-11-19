<script lang="tsx">
import { TODO } from "./type";
import { defineComponent, ref, reactive, PropType, computed } from "vue";
export default defineComponent({
  name: "TodoFooter",
  props: { todos: { type: Array as PropType<TODO[]>, default: () => [] } },
  emits: {
    clearCompleted: null,
    change: (tab: string) => !!tab
  },
  setup(props, { emit }) {
    const todos = ref(props.todos);
    const completeTodoLength = computed(() => {
      return todos.value.filter((todo: TODO) => todo.isComplete).length;
    });

    let active = ref<string>("All");
    const tabs = reactive<string[]>(["All", "Active", "complete"]);
    function handleTabChange(tab: string): void {
      active.value = tab;
      emit("change", tab);
    }

    function clearCompleted() {
      emit("clearCompleted");
    }

    return () => (
      <div class="todo-footer">
        <div class="todo-footer__item">
          {completeTodoLength.value} item left
        </div>
        <div class="todo-footer__tabs">
          {tabs.map(tab => (
            <div
              class={
                "todo-footer__tabs--item" +
                (active.value === tab ? " active" : "")
              }
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </div>
          ))}
        </div>
        <div class="todo-footer__item" onClick={clearCompleted}>
          clear completed
        </div>
      </div>
    );
  }
});
</script>

<style lang="scss" scoped>
.todo-footer {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__tabs {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &--item {
      margin: 0 5px;
      padding: 5px 10px;
      cursor: pointer;
      box-sizing: border-box;
    }

    .active {
      border: 1px solid #c0c0c0;
      border-radius: 5px;
    }
  }
}
</style>
