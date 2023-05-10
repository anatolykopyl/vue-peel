<script setup lang="ts">
import { ref, onMounted } from 'vue';
import createPeel from './peel';

const props = defineProps<{
  options?: {

  }
}>();

const Peel = createPeel();

const peelRef = ref<HTMLElement | null>(null)
const peel = ref<Omit<typeof Peel, 'Corners' | 'Defaults'> | null>(null);

onMounted(() => {
  peel.value = new Peel(peelRef.value as HTMLElement, props.options);
});

defineExpose({ peel });
</script>

<template>
  <div ref="peelRef" class="peel">
    <div class="peel-top">
      <slot name="top"></slot>
    </div>
    <div class="peel-back">
      <slot name="back"></slot>
    </div>
    <div class="peel-bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<style>
@import './peel.css';
</style>
