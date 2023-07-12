<script setup>
import { computed } from 'vue'
import Tile from './tile.vue'
import TileGroup from './tile-group.vue'

const props = defineProps({
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

// from adjustment because usually shimocha is index 2, but in a kan we need to side the index 3
const adjustedFrom = computed(() => props.from === 2 ? 3 : props.from)
</script>

<template>
  <tile-group>
    <tile v-for="(_, i) in 4" :tile="tile" :key="i" :sided="i === adjustedFrom" :small="small"/>
  </tile-group>
</template>