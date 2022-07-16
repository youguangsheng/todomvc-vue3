<script lang="tsx">
import { defineComponent } from 'vue';
import useCounterStore from '@/store/counter';

export default defineComponent({
  name: 'Counter',
  setup() {
    const counterStore = useCounterStore();

    return () => (
      <div class="counter">
        <div>use pinia make counter</div>
        <div class="show">counter: {counterStore.$state.counter}</div>
        <div>
          <button class="button">increatment</button>
          <button class="button">decreatment</button>
        </div>
      </div>
    );
  }
});
</script>

<style lang="scss" scoped>
.counter {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10%;
  color: #333;
  font-size: 20px;
}

.show {
  margin: 20px;
  font-size: 30px;
}

.button {
  padding: 10px;
  border: 1px solid #c0c0c0;
  border-radius: 3px;
  color: #f0f0f0;
  background-color: #409eff;
  cursor: pointer;

  & + & {
    margin-left: 20px;
  }

  &:active {
    opacity: 0.5;
  }
}
</style>
