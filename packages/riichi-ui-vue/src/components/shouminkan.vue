<script setup>
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
</script>

<template>
  <tile-group>
    <template v-for="(_, i) in 3">
      <tile-group v-if="i === from" :key="`tile-group-${i}`" stacked>
        <tile v-for="(_, j) in 2" :tile="tile" :key="`tile-${i}.${j}`" :small="small" sided/>
      </tile-group>

      <tile v-else :key="`tile-${i}`" :tile="tile" :small="small"/>
    </template>
  </tile-group>
</template>