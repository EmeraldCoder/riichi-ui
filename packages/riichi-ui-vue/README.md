# Riichi UI Vue

Vue library designed to facilitate the creation of riichi mahjong-related applications. This library offers a collection of Vue components, providing a foundational layer for building interfaces.

## Getting Started

### Installation

Install the library via your preferred package manager (NPM, Yarn, PNPM, etc...):

```bash
npm install @emeraldcoder/riichi-ui-vue
```

### Implementation

Import the component you want to use:

```js
<script setup>
import { Tile } from '@emeraldcoder/riichi-ui-vue'
</script>
```

Use the imported component in your template:
```html
<template>
  <div>
    <tile :tile="1m"/>
  </div>
</template>
```

## Caution

**Please Note:** This library is currently in progress and subject to changes without prior notice. Use it at your discretion and understanding.

## Credits

The tile images utilized within this library are sourced from <a href="https://github.com/FluffyStuff/riichi-mahjong-tiles" target="_blank">https://github.com/FluffyStuff/riichi-mahjong-tiles</a>

## Additional Resources

- <a href="https://riichi-ui-vue.phil.moe" target="_blank">Documentation</a>
- <a href="https://github.com/EmeraldCoder/riichi-ui/tree/main/packages/riichi-ui-vue" target="_blank">Github Repository</a>
- <a href="https://www.npmjs.com/package/@emeraldcoder/riichi-ui-vue" target="_blank">NPM Package</a>

Feel free to explore and contribute to our repository, and don't hesitate to reach out with any queries or suggestions.