<style scoped lang="scss">
@import '../style.scss';

.heart {
  :deep(.peel-top) {
    background-color: #cd5454;
  }
  
  :deep(.peel-back) {
    background-color: #ed8484;
  }
}

</style>

<script setup>
  import { ref, onMounted } from "vue";
  import Peel from '../../dist/vue-peel'
  import '../../dist/style.css'

  const peelDragging = ref(null)
  const peelHeart = ref(null)

  onMounted(() => {
    peelDragging.value.peel.handleDrag((event, x, y) => {
      peelDragging.value.peel.setPeelPosition(x, y);
    });

    peelHeart.value.peel.setCorner(101, 175);
    peelHeart.value.peel.handleDrag((event, x, y) => {
      peelHeart.value.peel.setPeelPosition(x, y);
    });
  });
</script>

# Dynamic Examples

## Dragging

Allowing the user to drag the effect by mouse or touch.

<div class="peelWrapper">
  <Peel
    ref="peelDragging"
    class="peelContainer"
  >
    <template #top>
      <div class="layer">Top</div>
    </template>
    <template #back>
      <div class="layer">Back</div>
    </template>
    <template #bottom>
      <div class="layer">Bottom</div>
    </template>
  </Peel>
</div>

```vue
<template>
  <Peel ref="peelDragging">
    <template #top>
      <div class="layer">Top</div>
    </template>
    <template #back>
      <div class="layer">Back</div>
    </template>
    <template #bottom>
      <div class="layer">Bottom</div>
    </template>
  </Peel>
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import Peel from 'vue-peel'
  import 'vue-peel/style.css'

  const peelDragging = ref(null)

  onMounted(() => {
    peelDragging.value.peel.handleDrag((event, x, y) => {
      peelDragging.value.peel.setPeelPosition(x, y);
    });
  })
</script>
```

## Dragging Heart

Dragging works on custom shapes as well. Note that the corner point can be set anywhere, allowing the effect to precisely follow the mouse cursor.

<div class="peelWrapper">
  <Peel
    ref="peelHeart"
    class="peelContainer heart"
    :options="{
      path: {
        d: 'M101.260605,31.4241113 C122.403839,-11.2687842 173.108983,1.11145064 183.007355,11.8447551 C237.311569,70.7295532 142.521446,119.347653 101.260608,174.571349 C51.8099036,119.347653 -39.0680406,68.307428 18.4502396,11.8447553 C33.183089,-2.61770866 77.7850024,-11.2687842 101.260605,31.4241113 Z'
      }
    }"
  >
    <template #top>
      <div class="layer">Top</div>
    </template>
    <template #back>
      <div class="layer">Back</div>
    </template>
    <template #bottom>
      <div class="layer">Bottom</div>
    </template>
  </Peel>
</div>

```vue
<template>
  <Peel ref="peelHeart" class="heart">
    <template #top>
      <div class="layer">Top</div>
    </template>
    <template #back>
      <div class="layer">Back</div>
    </template>
    <template #bottom>
      <div class="layer">Bottom</div>
    </template>
  </Peel>
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import Peel from 'vue-peel'
  import 'vue-peel/style.css'

  const peelHeart = ref(null)

  onMounted(() => {
    peelHeart.value.peel.setCorner(101, 175);
    peelHeart.value.peel.handleDrag((event, x, y) => {
      peelHeart.value.peel.setPeelPosition(x, y);
    });
  })
</script>
```