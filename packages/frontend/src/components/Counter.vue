<script lang="ts">
import { computed, defineComponent, provide } from "vue";
import { useCounterStore } from "../store/counter";

export default defineComponent({
  name: "Counter",
  setup() {
    const counterStore = useCounterStore();

    const count = computed(() => counterStore.count);
    const increment = () => counterStore.increment();
    const decrement = () => counterStore.decrement();

    return {
      count,
      increment,
      decrement,
    };
  },
});
</script>

<template>
  <div class="flex justify-center pt-8 text-xl">
    <button
      class="bg-teal-600 hover:bg-teal-700 w-8 h-8 mt-2 text-white font-bold rounded"
      @click="decrement()"
    >
      -
    </button>
    <span class="text-4xl text-white px-4">{{ count }}</span>
    <button
      class="bg-teal-600 hover:bg-teal-700 w-8 h-8 mt-2 text-white font-bold rounded"
      @click="increment()"
    >
      +
    </button>
  </div>
</template>