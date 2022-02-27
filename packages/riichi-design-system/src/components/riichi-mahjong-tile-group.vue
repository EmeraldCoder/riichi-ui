<template>
  <div class="tile-group">
    <riichi-mahjong-tile v-for="(tile, tileIndex) of tiles" :key="tileIndex" :tile="tile" />
  </div>
</template>

<script setup>
import RiichiMahjongTile from './riichi-mahjong-tile.vue'

defineProps(['tiles'])
</script>

<style scoped>
.tile-group {
  display: flex;
}
</style>