import Pon from './pon.vue'

export default {
  title: 'Pon',
  component: Pon,
  args: {
  }
}

const Template = (args) => ({
  components: { Pon },
  setup() {
    return { args };
  },
  template: `<pon v-bind="args"/>`
})

export const Base = Template.bind()
Base.args = {
  tile: '1m',
  from: 0
}
