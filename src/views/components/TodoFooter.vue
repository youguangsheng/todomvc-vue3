<script lang="tsx">
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
  name: "TodoFooter",
  setup(props, { emit }) {
    let active = ref<string>("All");

    const tabs = reactive<Array<string>>(["All", "Active", "complete"]);

    function handleTabChange(tab: string): void {
      active.value = tab;
    }

    function clearCompleted() {
      emit("clear");
    }

    return () => (
      <div class="todo-footer">
        <div class="todo-footer__item"> 0 item left</div>
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
