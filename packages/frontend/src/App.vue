<script setup lang="ts">
import { computed } from 'vue';
import Counter from './components/Counter.vue'
import { useCounterStore } from './store/counter';

const counterStore = useCounterStore();

const count = computed(() => counterStore.count);

if (window.isElectron) {
  const { useZoomFactor } = window.electron
  const { update: updateZoomFactor } = useZoomFactor()

  setTimeout(() => {
    updateZoomFactor()
  }, 200);

  window.addEventListener('resize', () => {
    updateZoomFactor()
  })
}
</script>

<template>
  <div class="min-h-screen text-5xl w-full bg-teal-500 text-center grid content-center">
    <h1 class=" text-white hover:underline font-bold">Vue Electron Tailwind Pinia Starter</h1>
    <ul class="flex flex-wrap text-center max-w-3xl mx-auto mt-4">
      <li v-for="i of count" class="text-white relative">🍍</li>
    </ul>
    <Counter />
  </div>
  <!-- <Paint /> -->
</template>