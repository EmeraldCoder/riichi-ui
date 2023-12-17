import TileGroup from './tile-group.vue'
import Tile from './tile.vue'

export default {
  title: 'Tile Group',
  component: TileGroup,
  tags: ['autodocs'],
  args: {
  }
}

const Template = (args) => ({
  components: { TileGroup, Tile },
  setup() {
    return { args };
  },
  template: `<tile-group v-bind="args">
    <tile tile="1m"/>
    <tile tile="2m"/>
    <tile tile="3m"/>
  </tile-group>`
})

export const Base = Template.bind()

const TemplateWithSidedTile = (args) => ({
  components: { TileGroup, Tile },
  setup() {
    return { args };
  },
  template: `<tile-group v-bind="args">
    <tile tile="1m"/>
    <tile tile="2m" sided/>
    <tile tile="3m"/>
  </tile-group>`
})
export const WithSidedTile = TemplateWithSidedTile.bind()

const TemplateWithReversedTile = (args) => ({
  components: { TileGroup, Tile },
  setup() {
    return { args };
  },
  template: `<tile-group v-bind="args">
    <tile reversed/>
    <tile tile="1m"/>
    <tile tile="1m"/>
    <tile reversed/>
  </tile-group>`
})
export const WithReversedTile = TemplateWithReversedTile.bind()

const TemplateWithStackedTile = (args) => ({
  components: { TileGroup, Tile },
  setup() {
    return { args };
  },
  template: `<tile-group v-bind="args">
    <tile tile="1m"/>
    <tile-group stacked>
      <tile tile="1m" sided/>
      <tile tile="1m" sided/>
    </tile-group>
    <tile tile="1m"/>
  </tile-group>`
})
export const WithStackedTile = TemplateWithStackedTile.bind()

const TemplateWithSmallTiles = (args) => ({
  components: { TileGroup, Tile },
  setup() {
    return { args };
  },
  template: `<div style="display: flex; gap: 15px;">
    <tile-group>
      <tile tile="1m" small/>
      <tile tile="1m" small/>
      <tile tile="1m" small/>
    </tile-group>

    <tile-group>
      <tile tile="1m" small/>
      <tile tile="1m" small sided/>
      <tile tile="1m" small/>
    </tile-group>

    <tile-group>
      <tile small reversed/>
      <tile tile="1m" small/>
      <tile tile="1m" small/>
      <tile small reversed/>
    </tile-group>

    <tile-group>
      <tile tile="1m" small/>
      <tile-group stacked>
        <tile tile="1m" small sided/>
        <tile tile="1m" small sided/>
      </tile-group>
      <tile tile="1m" small/>
    </tile-group>
  </div>`
})
export const WithSmallTiles = TemplateWithSmallTiles.bind()

const TemplateWithExtraSmallTiles = (args) => ({
  components: { TileGroup, Tile },
  setup() {
    return { args };
  },
  template: `<div style="display: flex; gap: 15px;">
    <tile-group>
      <tile tile="1m" x-small/>
      <tile tile="1m" x-small/>
      <tile tile="1m" x-small/>
    </tile-group>

    <tile-group>
      <tile tile="1m" x-small/>
      <tile tile="1m" x-small sided/>
      <tile tile="1m" x-small/>
    </tile-group>

    <tile-group>
      <tile x-small reversed/>
      <tile tile="1m" x-small/>
      <tile tile="1m" x-small/>
      <tile x-small reversed/>
    </tile-group>

    <tile-group>
      <tile tile="1m" x-small/>
      <tile-group stacked>
        <tile tile="1m" x-small sided/>
        <tile tile="1m" x-small sided/>
      </tile-group>
      <tile tile="1m" x-small/>
    </tile-group>
  </div>`
})
export const WithExtraSmallTiles = TemplateWithExtraSmallTiles.bind()