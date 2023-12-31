import Tenbou from './tenbou.vue'

export default {
  title: 'Components/Tenbou',
  component: Tenbou,
  tags: ['autodocs'],
  args: {
    value: 100
  }
}

const Template = (args) => ({
  components: { Tenbou },
  setup() {
    return { args };
  },
  template: '<tenbou v-bind="args" />'
})

export const Hyaku = Template.bind()
Hyaku.args = {
  value: 100
}

export const Sen = Template.bind()
Sen.args = {
  value: 1000
}

export const GoSen = Template.bind()
GoSen.args = {
  value: 5000
}

export const IchiMan = Template.bind()
IchiMan.args = {
  value: 10000
}

export const Small = Template.bind()
Small.args = {
  value: 100,
  small: true
}