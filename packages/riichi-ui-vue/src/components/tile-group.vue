<script setup>
defineProps({
  stacked: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<template>
  <span class="riichi-tile-group" :class="{ 'riichi-tile-group--stacked': stacked }">
    <slot/>
  </span>
</template>