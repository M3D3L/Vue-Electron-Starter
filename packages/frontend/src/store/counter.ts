import { defineStore } from 'pinia'

interface CounterState {
  count: number;
}

export const useCounterStore = defineStore({
  id: 'counter',
  state: (): CounterState => ({
    count: 1,
  }),
  actions: {
    increment(this: CounterState): void {
      if (this.count < 25) {
        this.count++;
      } else {
        alert('Too much Pina! I am taking all your Pina away!');
        this.count = 0;
      }
    },
    decrement(this: CounterState): void {
      if (this.count > 0) {
        this.count--;
      }
    },
  },
});
