<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import createPeel from './peel';
import { corners } from './constants'

type TCoords = { x: number, y: number };

const props = defineProps<{
  handleElement?: HTMLElement;
  peelPosition?: TCoords;
  corner?: TCoords | typeof corners[keyof typeof corners];
  constraints?: Array<TCoords | typeof corners[keyof typeof corners]>;
  drag?: boolean;
  mode?: "book" | "calendar";
  fadeThreshold?: number;
  peelPath?: number[];
  options?: {
    path?: string;
  };
}>();

const emit = defineEmits<{
  (event: 'drag', value: { event: DragEvent, x: number, y: number, amountClipped: number }): void;
}>();

const Peel = createPeel();

const peelRef = ref<HTMLElement | null>(null)
const peel = ref<any | null>(null);

function setDragHandlers() {
  peel.value.removeEvents();
  peel.value.dragEventsSetup = false;
  peel.value.dragHandlers = [];

  peel.value.handleDrag(
    (event: DragEvent, x: number, y: number) => emit(
      "drag", 
      { event, x, y, amountClipped: peel.value.getAmountClipped() },
    ),
    props.handleElement,
  );

  if (props.drag) {
    peel.value.handleDrag(
      (_: DragEvent, x: number, y: number) => peel.value.setPeelPosition(x, y),
      props.handleElement,
    );
  }
}

onMounted(() => {
  peel.value = new Peel(peelRef.value as HTMLElement, props.options);

  setDragHandlers();

  if (props.peelPosition) {
    peel.value.setPeelPosition(props.peelPosition.x, props.peelPosition.y);
  }

  if (props.corner) {
    if (props.corner.hasOwnProperty('x') && props.corner.hasOwnProperty('y')) {
      const { x, y } = props.corner as TCoords;
      peel.value.setCorner(x, y);
    } else {
      peel.value.setCorner(props.corner);
    }
  }

  if (props.constraints) {
    props.constraints.forEach((constraint) => {
      peel.value.addPeelConstraint(constraint);
    });
  }

  if (props.mode) {
    peel.value.setMode(props.mode);
  }

  if (props.fadeThreshold) {
    peel.value.setFadeThreshold(props.fadeThreshold);
  }

  if (props.peelPath) {
    peel.value.setPeelPath(...props.peelPath);
  }
});

watch(
  () => props.handleElement,
  (handle) => {
    if (handle) {
      setDragHandlers();
    }
  },
);

watch(
  () => props.peelPosition,
  (pos) => {
    if (pos) {
      peel.value.setPeelPosition(pos.x, pos.y);
    }
  },
);

watch(
  () => props.corner, 
  (pos) => {
    if (pos) {
      if (pos.hasOwnProperty('x') && pos.hasOwnProperty('y')) {
        const { x, y } = props.corner as TCoords;
        peel.value.setCorner(x, y);
      } else {
        peel.value.setCorner(props.corner);
      }
    }
  },
);

watch(
  () => props.constraints, 
  (constraints) => {
    if (constraints) {
      peel.value.constraints = [];
      constraints.forEach((constraint) => {
        peel.value.addPeelConstraint(constraint);
      });
    }
  },
);

watch(
  () => props.mode, 
  (mode) => {
    if (mode) {
      peel.value.setMode(mode);
    }
  },
);

watch(
  () => props.fadeThreshold, 
  (threshold) => {
    if (threshold) {
      peel.value.setFadeThreshold(threshold);
    }
  },
);

watch(
  () => props.peelPath, 
  (path) => {
    if (path) {
      peel.value.setPeelPath(...path);
    }
  },
);

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
