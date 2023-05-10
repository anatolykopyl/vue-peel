# Dynamic Examples

## Dragging

Allowing the user to drag the effect by mouse or touch.

<script setup>
  import { ref, onMounted } from "vue";
  import Peel from '../../dist/vue-peel'
  import '../../dist/style.css'

  const peel = ref(null)

  onMounted(() => {
    peel.value.peel.setPeelPosition(250, 250);
    peel.value.peel.handleDrag((event, x, y) => {
      peel.value.peel.setPeelPosition(x, y);
    });
  })
</script>

<div class="peelWrapper">
  <Peel
    ref="peel"
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

<style scoped>
@import '../style.scss';
</style>
