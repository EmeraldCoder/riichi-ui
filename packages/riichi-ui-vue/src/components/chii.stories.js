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
  tile: '1m',
  fromTile: '2m'
}