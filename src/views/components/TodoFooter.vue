<script lang="tsx">
import { TODO } from "./type";
import {
  defineComponent,
  ref,
  reactive,
  PropType,
  computed,
  onMounted
} from "vue";
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

    let active = ref<string>("all");
    const tabs = reactive<string[]>(["all", "active", "complete"]);
    function handleTabChange(tab: string): void {
      active.value = tab;
      emit("change", tab);
    }
    onMounted(() => {
      window.addEventListener("hashchange", () => {
        const hashUrl = window.location.hash;
        const url = hashUrl.slice(2);
        if (url === active.value) return;
        if (hashUrl === "#/") {
          active.value = "all";
          return;
        }
        handleTabChange(url);
      });
    });

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
