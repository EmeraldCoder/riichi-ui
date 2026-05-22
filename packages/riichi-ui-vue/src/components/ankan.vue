<script setup>
import Tile from './tile.vue'
import TileGroup from './tile-group.vue'

defineProps({
  tiles: {
    type: Array,
    required: true
  },
  small: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<template>
  <tile-group>
    <tile v-for="(tile, i) in tiles" :tile="tile" :key="i" :reversed="i === 0 || i === 3" :small="small"/>
  </tile-group>
</template>