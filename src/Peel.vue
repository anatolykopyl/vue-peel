<script setup lang="ts">
import { ref, onMounted } from 'vue';
import createPeel from './peel';

const props = defineProps<{
  options?: {

  }
}>();

const Peel = createPeel();

const peelRef = ref<HTMLElement | null>(null)
let peel: Omit<ReturnType<typeof createPeel>, 'Corners' | 'Defaults'> | null = null;

onMounted(() => {
  peel = new Peel(peelRef.value as HTMLElement, props.options);
});

defineExpose({ peel });
</script>

<template>
  <div ref="peelRef">
    <slot name="top"></slot>
    <slot name="back"></slot>
    <slot name="bottom"></slot>
  </div>
</template>

<style scoped>
@import './peel.css';
</style>
