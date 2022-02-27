import { RiichiMahjongTileGroup } from 'riichi-design-system'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/RiichiMahjongTileGroup',
  component: RiichiMahjongTileGroup,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    tiles: []
  }
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { RiichiMahjongTileGroup },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<riichi-mahjong-tileGroup v-bind="args" />',
})

export const Standard = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Standard.args = {
  tiles: ['1m', '2m', '3m']
}