<template>
  <div class="tile" :class="{ 'reversed': isReversed }">
    <riichi-mahjong-tile-icon :tile="tile" class="tile-icon"></riichi-mahjong-tile-icon>
  </div>
</template>

<script setup>
import RiichiMahjongTileIcon from './riichi-mahjong-tile-icon.vue'

defineProps(['tile', 'isReversed'])
</script>

<style scoped>
.tile {
  display: inline-block;
  padding: 5px;
  background: #fff;
  border: 1px solid #1b5e20;
  border-radius: 5px;
}

.tile.reversed {
  background: #388e3c;
}
.tile.reversed .tile-icon {
  visibility: hidden;
}
</style>