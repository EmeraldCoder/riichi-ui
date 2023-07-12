<script setup>
import { computed } from 'vue'

const props = defineProps({
  value: {
    type: Number,
    required: true
  },
  small: {
    type: Boolean,
    required: false,
    default: false
  }
})

const numberOfDots = computed(() => {
  if (props.value === 100) return 6
  if (props.value === 1000) return 1
  if (props.value === 5000) return 5
  if (props.value === 10000) return 9
  return 0
})
</script>

<template>
  <span class="riichi-tenbou" :class="{ 'riichi-tenbou--small': small, 'riichi-tenbou--hyaku': value === 100, 'riichi-tenbou--sen': value === 1000, 'riichi-tenbou--go-sen': value === 5000, 'riichi-tenbou--ichi-man': value === 10000 }">
    <span class="riichi-tenbou__dot" v-for="i in numberOfDots" :key="i"></span>
  </span>
</template>

<style lang="scss">
@import 'riichi-ui-css/src/tenbou.scss';
</style>