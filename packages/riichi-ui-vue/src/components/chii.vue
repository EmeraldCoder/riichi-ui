<script setup>
import { computed } from 'vue'
import Tile from './tile.vue'
import TileGroup from './tile-group.vue'

const props = defineProps({
  tile: {
    type: String,
    required: true
  },
  fromTile: {
    type: String,
    required: true
  },
  small: {
    type: Boolean,
    required: false,
    default: false
  }
})

const tiles = computed(() => {
  const tileNumber = parseInt(props.tile[0])

  const chiiTiles = [
    props.tile,
    `${tileNumber + 1}${props.tile[1]}`,
    `${tileNumber + 2}${props.tile[1]}`
  ]

  // chii are always called from kamicha, so ensure that the called tile is always placed first
  return [props.fromTile, ...chiiTiles.filter(x => x !== props.fromTile)]
})
</script>

<template>
  <tile-group>
    <tile v-for="(tile, i) in tiles" :tile="tile" :key="tile" :sided="i === 0" :small="small"/>
  </tile-group>
</template>