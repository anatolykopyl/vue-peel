<script setup>
  import { ref } from 'vue';
  import Peel, { corners } from '../../dist/vue-peel';
  import '../../dist/style.css';

  const peel = ref();
  const peelPath = ref();
  const peelPathBez = ref();

  function handleDrag({ amountClipped }) {
    if (amountClipped === 1) {
      peel.value.peel.removeEvents();
    }
  }

  function handleDragPath({ x }) {
    const t = (x - peelPath.value.peel.width) / -peelPath.value.peel.width;
    peelPath.value.peel.setTimeAlongPath(t);
  }

  function handleDragPathBez({ x }) {
    const t = (x - peelPathBez.value.peel.width) / (-peelPathBez.value.peel.width * 2)
    peelPathBez.value.peel.setTimeAlongPath(t);
  }
</script>

# Dynamic Examples

## Dragging

Allowing the user to drag the effect by mouse or touch. This can be done by setting the `drag` prop.

<div class="peelWrapper">
  <Peel
    class="peelContainer"
    drag
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
  <Peel drag>
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
  import Peel from 'vue-peel'
  import 'vue-peel/style.css'
</script>
```

## Dragging Heart

Dragging works on custom shapes as well. Note that the corner point can be set anywhere, allowing the effect to precisely follow the mouse cursor.

<div class="peelWrapper">
  <Peel
    class="peelContainer heart"
    drag
    :options="{
      path: {
        d: 'M101.260605,31.4241113 C122.403839,-11.2687842 173.108983,1.11145064 183.007355,11.8447551 C237.311569,70.7295532 142.521446,119.347653 101.260608,174.571349 C51.8099036,119.347653 -39.0680406,68.307428 18.4502396,11.8447553 C33.183089,-2.61770866 77.7850024,-11.2687842 101.260605,31.4241113 Z'
      }
    }"
    :corner="{ x: 101, y: 175 }"
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
  <Peel
    class="heart"
    drag
    :options="options"
    :corner="{ x: 101, y: 175 }"
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
</template>

<script setup>
  import Peel from 'vue-peel'
  import 'vue-peel/style.css'

  const options = {
    path: {
      d: 'M101.260605,31.4241113 C122.403839,-11.2687842 173.108983,1.11145064 183.007355,11.8447551 C237.311569,70.7295532 142.521446,119.347653 101.260608,174.571349 C51.8099036,119.347653 -39.0680406,68.307428 18.4502396,11.8447553 C33.183089,-2.61770866 77.7850024,-11.2687842 101.260605,31.4241113 Z'
    }
  }
</script>
```

## Constraining

The peeling effect can be constrained at any point. This can be thought of as a point 
on the layers that are connected and cannot be torn apart:

<div class="peelWrapper">
  <Peel
    class="peelContainer yellow"
    drag
    :constraints="[corners.BOTTOM_LEFT]"
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
  <Peel
    class="yellow"
    drag
    :constraints="[corners.BOTTOM_LEFT]"
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
</template>

<script setup>
  import Peel, { corners } from 'vue-peel'
  import 'vue-peel/style.css'
</script>
```

## Page turning effect

Any number of corners can be constrained. Most often this is used to create a book-like effect, which there is a shortcut for:

<div class="peelWrapper">
  <Peel
    class="peelContainer book"
    drag
    mode="book"
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
  <Peel
    class="book"
    drag
    mode="book"
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
</template>

<script setup>
  import Peel from 'vue-peel'
  import 'vue-peel/style.css'
</script>
```

## Fade threshold

The top layer can be faded out past a threshold which represents the clipped area of the top layer.

<div class="peelWrapper">
  <Peel
    class="peelContainer plum"
    drag
    :fade-threshold="0.9"
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
  <Peel
    class="plum"
    drag
    :fade-threshold="0.9"
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
</template>

<script setup>
  import Peel from 'vue-peel'
  import 'vue-peel/style.css'
</script>
```

## Fading out

Using the `amountClipped` property gives you greater control over behavior, such as stopping the effect after the top layer has been removed.

<div class="peelWrapper">
  <Peel
    class="peelContainer plum"
    drag
    :fade-threshold="0.9"
    @drag="handleDrag"
    ref="peel"
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
  <Peel
    class="purple"
    drag
    :fade-threshold="0.9"
    @drag="handleDrag"
    ref="peel"
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
</template>

<script setup>
  import { ref } from 'vue'
  import Peel from 'vue-peel'
  import 'vue-peel/style.css'

  const peel = ref()

  function handleDrag({ amountClipped }) {
    if (amountClipped === 1) {
      peel.value.peel.removeEvents()
    }
  }
</script>
```

## Setting a peel path

Sometimes you want the peel animation to follow an exact path rather than being unrestricted. The `peel-path` property and `setTimeAlongPath` method can accomplish this.

<div class="peelWrapper">
  <Peel
    class="peelContainer aqua"
    @drag="handleDragPath"
    ref="peelPath"
    :peel-path="[200, 200, -200, -200]"
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
  <Peel
    class="aqua"
    @drag="handleDrag"
    ref="peel"
    :peel-path="[200, 200, -200, -200]"
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
</template>

<script setup>
  import { ref } from 'vue'
  import Peel from 'vue-peel'
  import 'vue-peel/style.css'

  const peel = ref()

  function handleDrag({ x }) {
    const t = (x - peel.value.peel.width) / -peel.value.peel.width
    peel.value.peel.setTimeAlongPath(t)
  }
</script>
```

## Peel path as a bezier curve

Sometimes you want the peel animation to follow an exact path rather than being unrestricted. The `peel-path` property and `setTimeAlongPath` method can accomplish this.

<div class="peelWrapper">
  <Peel
    class="peelContainer book"
    @drag="handleDragPathBez"
    ref="peelPathBez"
    :peel-path="[150, 200, 50, 60, -70, 210, -150, 200]"
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
  <Peel
    class="book"
    @drag="handleDrag"
    ref="peel"
    :peel-path="[150, 160, 50, 60, -70, 210, -150, 160]"
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
</template>

<script setup>
  import { ref } from 'vue'
  import Peel from 'vue-peel'
  import 'vue-peel/style.css'

  const peel = ref()

  function handleDrag({ x }) {
    const t = (x - peel.value.peel.width) / (-peel.value.peel.width * 2)
    peel.value.peel.setTimeAlongPath(t)
  }
</script>
```

<!-- Animating a peel path -->

<!-- Fading a peel path -->

<style lang="scss">
@import '../style.scss';
</style>
