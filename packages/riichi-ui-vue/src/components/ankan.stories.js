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
  tiles: ['1m', '1m', '1m', '1m']
}

export const Small = Template.bind()
Small.args = {
  tiles: ['1m', '1m', '1m', '1m'],
  small: true
}