import Shouminkan from './shouminkan.vue'

export default {
  title: 'Components/Calls/Shouminkan',
  component: Shouminkan,
  tags: ['autodocs'],
  args: {
  }
}

const Template = (args) => ({
  components: { Shouminkan },
  setup() {
    return { args };
  },
  template: `<shouminkan v-bind="args"/>`
})

export const Base = Template.bind()
Base.args = {
  tiles: ['1m', '1m', '1m'],
  sidedTileIndex: 0,
  kanTile: '1m'
}

export const WithAkaDoraAsKanTile = Template.bind()
WithAkaDoraAsKanTile.args = {
  tiles: ['5m', '5m', '5m'],
  sidedTileIndex: 0,
  kanTile: '0m'
}

export const Small = Template.bind()
Small.args = {
  tiles: ['1m', '1m', '1m'],
  sidedTileIndex: 0,
  kanTile: '1m',
  small: true
}