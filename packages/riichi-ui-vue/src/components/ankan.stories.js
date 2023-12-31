import Ankan from './ankan.vue'

export default {
  title: 'Components/Calls/Ankan',
  component: Ankan,
  tags: ['autodocs'],
  args: {
  }
}

const Template = (args) => ({
  components: { Ankan },
  setup() {
    return { args };
  },
  template: `<ankan v-bind="args"/>`
})

export const Base = Template.bind()
Base.args = {
  tile: '1m'
}