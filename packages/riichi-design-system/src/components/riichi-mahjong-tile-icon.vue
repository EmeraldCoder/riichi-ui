<template>
  <svg viewBox="0 0 300 400" :width="116" :height="156">
    <use :xlink:href="`https://cdn.phil.moe/riichi/riichi-tile-sprite.svg#${svgStoreKey}`" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps(['tile'])

// #TODO: could be nice to do some validation if the tile string is valid or not
const svgStoreKey = computed(() => `t${props.tile?.trim().toLowerCase()}`)
</script>
