import Daiminkan from './daiminkan.vue'

export default {
  title: 'Components/Calls/Daiminkan',
  component: Daiminkan,
  tags: ['autodocs'],
  args: {
  }
}

const Template = (args) => ({
  components: { Daiminkan },
  setup() {
    return { args };
  },
  template: `<daiminkan v-bind="args"/>`
})

export const Base = Template.bind()
Base.args = {
  tile: '1m',
  from: 0
}