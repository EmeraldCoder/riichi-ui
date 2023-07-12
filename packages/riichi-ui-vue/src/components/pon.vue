<script setup>
import Tile from './tile.vue'
import TileGroup from './tile-group.vue'

defineProps({
  tile: {
    type: String,
    required: true
  },
  from: {
    type: Number,
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
    <tile v-for="(_, i) in 3" :tile="tile" :key="i" :sided="i === from" :small="small"/>
  </tile-group>
</template>