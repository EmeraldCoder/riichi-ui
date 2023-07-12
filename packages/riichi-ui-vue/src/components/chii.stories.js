import Chii from './chii.vue'

export default {
  title: 'Chii',
  component: Chii,
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
  tile: '1m',
  fromTile: '2m'
}