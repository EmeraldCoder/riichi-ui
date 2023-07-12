<script setup>
import { computed } from 'vue'

const props = defineProps({
  tile: {
    type: String,
    required: false
  }
})

const cssClassname = computed(() => props.tile == null ? 'riichi-tile-icon' : `riichi-tile-icon riichi-tile-icon--${props.tile.toLowerCase()}`)
</script>

<template>
  <span :class="cssClassname"></span>
</template>

<style lang="scss">
@import 'riichi-ui-css/src/tile-icon.scss';
</style>