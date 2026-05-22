<script setup>
import Tile from './tile.vue'
import TileGroup from './tile-group.vue'

const props = defineProps({
  tiles: {
    type: Array,
    required: true
  },
  sidedTileIndex: {
    type: Number,
    required: false,
    default: 0
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
    <tile v-for="(tile, i) in tiles" :tile="tile" :key="tile" :sided="i === sidedTileIndex" :small="small"/>
  </tile-group>
</template>