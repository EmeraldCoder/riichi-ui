import Chii from './chii.vue'

export default {
  title: 'Components/Calls/Chii',
  component: Chii,
  tags: ['autodocs'],
  args: {
  }
}

const Template = (args) => ({
  components: { Chii },
  setup() {
    return { args };
  },
  template: `<chii v-bind="args"/>`
})

export const Base = Template.bind()
Base.args = {
  tiles: ['1m', '2m', '3m'],
  sidedTileIndex: 0
}

export const WithoutSidedTileIndex = Template.bind()
WithoutSidedTileIndex.args = {
  tiles: ['1m', '2m', '3m']
}

export const WithCustomSidedTileIndex = Template.bind()
WithCustomSidedTileIndex.args = {
  tiles: ['1m', '2m', '3m'],
  sidedTileIndex: 1
}

export const NotInSequenceOrder = Template.bind()
NotInSequenceOrder.args = {
  tiles: ['2m', '1m', '3m'],
  sidedTileIndex: 0
}

export const Small = Template.bind()
Small.args = {
  tiles: ['1m', '2m', '3m'],
  sidedTileIndex: 0,
  small: true
}
