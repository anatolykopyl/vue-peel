<script setup>
  import Peel, { corners } from '../../dist/vue-peel';
  import '../../dist/style.css';
</script>

# Static Examples

## Simple

Simplest possible example. 3 slots define the 3 layers used.

<div class="peelWrapper">
  <Peel
    class="peelContainer"
    :peel-position="{ x: 80, y: 120 }"
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
  <Peel :peel-position="{ x: 80, y: 120 }">
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

## Corner

Any corner can be used for the peel effect:

<div class="peelWrapper">
  <Peel
    class="peelContainer yellow"
    :options="{
      corner: corners.TOP_LEFT
    }"
    :peel-position="{ x: 80, y: 120 }"
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
    :options="{
      corner: corners.TOP_LEFT
    }"
    :peel-position="{ x: 80, y: 120 }"
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

## Shadows

The shadow effects can be controlled through various options:

<div class="peelWrapper">
  <Peel
    class="peelContainer purple"
    :options="{
      topShadow: false,
      backShadowSize: .12,
      bottomShadowDarkAlpha: 1,
      bottomShadowLightAlpha: .4,
    }"
    :peel-position="{ x: 150, y: 0 }"
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
    :options="{
      topShadow: false,
      backShadowSize: .12,
      bottomShadowDarkAlpha: 1,
      bottomShadowLightAlpha: .4,
    }"
    :peel-position="{ x: 150, y: 0 }"
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

## Reflection

Adding a back reflection gives the peel a shiny effect:

<div class="peelWrapper">
  <Peel
    class="peelContainer azure"
    :options="{
      backReflection: true,
      backReflectionAlpha: .3
    }"
    :peel-position="{ x: 150, y: 0 }"
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
    class="azure"
    :options="{
      backReflection: true,
      backReflectionAlpha: .3
    }"
    :peel-position="{ x: 150, y: 0 }"
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

## Circle

SVG shapes can also be used for clipping effects:

<div class="peelWrapper">
  <Peel
    class="peelContainer aqua"
    :options="{
      circle: {
        cx: 100,
        cy: 100,
        r: 100
      }
    }"
    :peel-position="{ x: 100, y: 80 }"
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
    :options="{
      circle: {
        cx: 100,
        cy: 100,
        r: 100
      }
    }"
    :peel-position="{ x: 100, y: 80 }"
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

## Path

More complex shapes such as paths can create custom shapes:

<div class="peelWrapper">
  <Peel
    class="peelContainer heart"
    :options="{
       path: {
        d: 'M101.260605,31.4241113 C122.403839,-11.2687842 173.108983,1.11145064 183.007355,11.8447551 C237.311569,70.7295532 142.521446,119.347653 101.260608,174.571349 C51.8099036,119.347653 -39.0680406,68.307428 18.4502396,11.8447553 C33.183089,-2.61770866 77.7850024,-11.2687842 101.260605,31.4241113 Z'
      }
    }"
    :peel-position="{ x: 150, y: 0 }"
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
    :options="{
       path: {
        d: 'M101.260605,31.4241113 C122.403839,-11.2687842 173.108983,1.11145064 183.007355,11.8447551 C237.311569,70.7295532 142.521446,119.347653 101.260608,174.571349 C51.8099036,119.347653 -39.0680406,68.307428 18.4502396,11.8447553 C33.183089,-2.61770866 77.7850024,-11.2687842 101.260605,31.4241113 Z'
      }
    }"
    :peel-position="{ x: 150, y: 0 }"
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

<style scoped lang="scss">
@import '../style.scss';
</style>
