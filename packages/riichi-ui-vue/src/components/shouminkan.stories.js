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
  tile: '1m',
  from: 0
}