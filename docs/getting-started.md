<script setup>
import Peel from '../dist/vue-peel'
import '../dist/style.css'
</script>

# Getting Started

## Installation

```sh
npm install vue-peel
```

## Basic usage

<div class="peelWrapper">
  <Peel
    class="peelContainer"
    drag
    :peel-position="{ x: 150, y: 150 }"
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
    drag
    :peel-position="{ x: 150, y: 150 }"
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
@import './style.scss';
</style>