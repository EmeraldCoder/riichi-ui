<script setup>
import TileIcon from './tile-icon.vue'

const props = defineProps({
  tile: {
    type: String,
    required: false
  },
  reversed: {
    type: Boolean,
    required: false,
    default: false
  },
  sided: {
    type: Boolean,
    required: false,
    default: false
  },
  small: {
    type: Boolean,
    required: false,
    default: false
  },
  xSmall: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<template>
  <span class="riichi-tile" :class="{ 'riichi-tile--reversed': props.reversed, 'riichi-tile--sided': props.sided, 'riichi-tile--small': props.small, 'riichi-tile--x-small': props.xSmall }">
    <TileIcon :tile="props.tile"/>
  </span>
</template>

<style lang="scss">
@import '@emeraldcoder/riichi-ui-css/src/components/tile.scss';
</style>