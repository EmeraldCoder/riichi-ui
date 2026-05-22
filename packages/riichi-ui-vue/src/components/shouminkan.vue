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
    required: true
  },
  kanTile: {
    type: String,
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
    <template v-for="(tile, i) in tiles">
      <tile-group v-if="i === sidedTileIndex" :key="`tile-group-${i}`" stacked>
        <tile :tile="kanTile" :small="small" sided/>
        <tile :tile="tile" :small="small" sided/>
      </tile-group>

      <tile v-else :key="`tile-${i}`" :tile="tile" :small="small"/>
    </template>
  </tile-group>
</template>