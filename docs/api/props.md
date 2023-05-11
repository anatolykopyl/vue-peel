<script setup>
  import { ref } from 'vue';
  import Peel, { corners } from '../../dist/vue-peel';
  import '../../dist/style.css';

  const handle = ref();
</script>

# Props

## `options`

The options to pass to the underlying peel.js constructor as listed [here](https://andrewplummer.github.io/peel-js/#options).

## `peelPosition`

```typescript
{ x: number, y: number } | undefined
```

The position of the peel effect. This point is the position of the corner that is being peeled back.

## `corner`

```typescript
{ x: number, y: number } | typeof corners[keyof typeof corners] | undefined
```

The corner for the effect to peel back from. Can be 2 arguments as x,y coordinates or a single argument as a corner id defined in `corners`. Default is the bottom right corner.

## `constraints`

```typescript
Array<{ x: number, y: number } | typeof corners[keyof typeof corners]> | undefined
```

List of constraints on the distance of the peel. This can be thought of as points on the layers that are connected and cannot be torn apart. Typically this only makes sense as a point on the outer edge, such as the left edge of an open book, or the top edge of a calendar. In this case, simply using 2 constraint points (top-left/bottom-left for a book, etc) will create the desired effect. An arbitrary point can also be used with an effect like a thumbtack holding the pages together. Can be 2 arguments as x,y coordinates or a single argument as a corner id defined in `corners`.

## `drag`

```typescript
boolean | undefined
```

A shorthand for setting the `@drag` event to set the peel position to the mouse. The same as:

```vue
// Don't copy-paste this! This is an example of what is under the hood.
<template>
  <Peel
    @drag="drag"
    :peel-position="peelPosition"
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

  const peelPosition = ref({})

  function drag({ x, y }) {
    peelPosition.value = { x, y }
  }
</script>
```

## `handleElement`

```typescript
HTMLElement | undefined
```

Can be specified to allow another element serve as a "hit area" that can be larger or smaller than the element itself.
In this example only the corner is grabbable.

<div class="peelWrapper">
  <Peel
    class="peelContainer"
    drag
    :handle-element="handle"
  >
    <template #top>
      <div class="layer">Top</div>
    </template>
    <template #back>
      <div class="layer">
        Back
        <div 
          ref="handle" 
          class="handle"
        />
      </div>
    </template>
    <template #bottom>
      <div class="layer">Bottom</div>
    </template>
  </Peel>
</div>

```vue
<template>
  <Peel
    drag
    :handle-element="handle"
  >
    <template #top>
      <div class="layer">Top</div>
    </template>
    <template #back>
      <div class="layer">
        Back
        <div 
          ref="handle" 
          class="handle"
        />
      </div>
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

  const handle = ref()
</script>

<style scoped>
.handle {
  border: 1px dashed red;
  position: absolute;
  bottom: -16px;
  left: -16px;
  width: 32px;
  height: 32px;
}
</style>
```

## `mode`

```typescript
"book" | "calendar" | undefined
```

A shortcut for setting predefined `constraints`. Currently `"book"` and `"calendar"`.

## `fadeThreshold`

```typescript
number | undefined
```

A threshold above which the top layer (including the backside) layer will begin to fade out. The threshold is between 0 (no peel) and 1 (top layer is fully peeled off) and is calculated based on the visible clipped area. If a peel path is set, it will use the progress along the path instead.

## `peelPath`

```typescript
number[] | undefined
```

A path along which the peel will follow. This can be a flat line segment (represented by 4 arguments: x1, y1, x2, y2) or a bezier curve (represented by 8 arguments: x1, y1, cp1x, cp1y, cp2x, cp2y, x2, y2 where cp1 and cp2 are the 2 bezier control points, similar to the [bezierCurveTo](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#Cubic_Bezier_curves) canvas method.)

<style lang="scss">
@import '../style.scss';

.handle {
  border: 1px dashed red;
  position: absolute;
  bottom: -16px;
  left: -16px;
  width: 32px;
  height: 32px;
}
</style>
