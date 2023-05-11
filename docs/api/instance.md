# Instance

The peel.js instance is exposed and can be accesed from the parent using a template `ref`.
All of the methods and properties can be called or accessed via `peel`. 
This is useful, for example, to access the `removeEvents()` method as illustrated in the [fading out dynamic example](/examples/dynamic.html#fading-out).

See info about the Peel instance in the [peel.js docs](https://andrewplummer.github.io/peel-js/#documentation).

```vue
<template>
  <Peel
    drag
    ref="peel"
  >
    <template #top>
      Top
    </template>
    <template #back>
      Back
    </template>
    <template #bottom>
      Bottom
    </template>
  </Peel>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import Peel from 'vue-peel'
  import 'vue-peel/style.css'

  const peel = ref()

  onMounted(() => {
    peel.value.peel.setMode('book')
  })
</script>
```
