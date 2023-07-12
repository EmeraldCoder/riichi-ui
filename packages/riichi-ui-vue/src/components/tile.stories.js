import Tile from './tile.vue'

export default {
  title: 'Tile',
  component: Tile,
  args: {
    tile: '1p'
  }
}

const Template = (args) => ({
  components: { Tile },
  setup() {
    return { args };
  },
  template: '<tile v-bind="args" />'
})

export const Base = Template.bind()

export const Reversed = Template.bind()
Reversed.args = {
  tile: undefined,
  reversed: true
}

export const Sided = Template.bind()
Sided.args = {
  sided: true
}

export const Small = Template.bind()
Small.args = {
  small: true
}

export const ExtraSmall = Template.bind()
ExtraSmall.args = {
  xSmall: true
}