import './index.scss'

export default {
  title: 'Tile Groups'
}

export const Basic = () => {
  return `
    <span class="riichi-tile-group">
      <span class="riichi-tile"><span class="riichi-tile-icon riichi-tile-icon--1m"></span></span>
      <span class="riichi-tile"><span class="riichi-tile-icon riichi-tile-icon--2m"></span></span>
      <span class="riichi-tile"><span class="riichi-tile-icon riichi-tile-icon--3m"></span></span>
    </span>
  `
}

export const WithSidedTile = () => {
  return `
    <span class="riichi-tile-group">
      <span class="riichi-tile"><span class="riichi-tile-icon riichi-tile-icon--1m"></span></span>
      <span class="riichi-tile riichi-tile--sided"><span class="riichi-tile-icon riichi-tile-icon--2m"></span></span>
      <span class="riichi-tile"><span class="riichi-tile-icon riichi-tile-icon--3m"></span></span>
    </span>
  `
}

export const WithReversedTiles = () => {
  return `
    <span class="riichi-tile-group">
      <span class="riichi-tile riichi-tile--reversed"><span class="riichi-tile-icon"></span></span>
      <span class="riichi-tile"><span class="riichi-tile-icon riichi-tile-icon--1m"></span></span>
      <span class="riichi-tile"><span class="riichi-tile-icon riichi-tile-icon--1m"></span></span>
      <span class="riichi-tile riichi-tile--reversed"><span class="riichi-tile-icon"></span></span>
    </span>
  `
}

export const WithAllReversedTiles = () => {
  return `
    <span class="riichi-tile-group">
      <span class="riichi-tile riichi-tile--reversed"><span class="riichi-tile-icon"></span></span>
      <span class="riichi-tile riichi-tile--reversed"><span class="riichi-tile-icon"></span></span>
      <span class="riichi-tile riichi-tile--reversed"><span class="riichi-tile-icon"></span></span>
      <span class="riichi-tile riichi-tile--reversed"><span class="riichi-tile-icon"></span></span>
    </span>
  `
}

export const WithStackedTiles = () => {
  return `
    <span class="riichi-tile-group">
      <span class="riichi-tile"><span class="riichi-tile-icon riichi-tile-icon--1m"></span></span>
      <span class="riichi-tile-group riichi-tile-group--stacked">
        <span class="riichi-tile riichi-tile--sided"><span class="riichi-tile-icon riichi-tile-icon--1m"></span></span>
        <span class="riichi-tile riichi-tile--sided"><span class="riichi-tile-icon riichi-tile-icon--1m"></span></span>
      </span>
      <span class="riichi-tile"><span class="riichi-tile-icon riichi-tile-icon--1m"></span></span>
    </span>
  `
}

export const WithSmallTiles = () => {
  return `
    <div style="display: flex; gap: 15px;">
      <span class="riichi-tile-group">
        <span class="riichi-tile riichi-tile--small"><span class="riichi-tile-icon riichi-tile-icon--1m"></span></span>
        <span class="riichi-tile riichi-tile--small"><span class="riichi-tile-icon riichi-tile-icon--1m"></span></span>
        <span class="riichi-tile riichi-tile--small"><span class="riichi-tile-icon riichi-tile-icon--1m"></span></span>
      </span>

      <span class="riichi-tile-group">
        <span class="riichi-tile riichi-tile--small"><span class="riichi-tile-icon riichi-tile-icon--1m"></span></span>
        <span class="riichi-tile riichi-tile--small riichi-tile--sided"><span class="riichi-tile-icon riichi-tile-icon--1m"></span></span>
        <span class="riichi-tile riichi-tile--small"><span class="riichi-tile-icon riichi-tile-icon--1m"></span></span>
      </span>

      <span class="riichi-tile-group">
        <span class="riichi-tile riichi-tile--small riichi-tile--reversed"><span class="riichi-tile-icon"></span></span>
        <span class="riichi-tile riichi-tile--small"><span class="riichi-tile-icon riichi-tile-icon--1m"></span></span>
        <span class="riichi-tile riichi-tile--small"><span class="riichi-tile-icon riichi-tile-icon--1m"></span></span>
        <span class="riichi-tile riichi-tile--small riichi-tile--reversed"><span class="riichi-tile-icon"></span></span>
      </span>

      <span class="riichi-tile-group">
        <span class="riichi-tile riichi-tile--small"><span class="riichi-tile-icon riichi-tile-icon--1m"></span></span>
        <span class="riichi-tile-group riichi-tile-group--stacked">
          <span class="riichi-tile riichi-tile--small riichi-tile--sided"><span class="riichi-tile-icon riichi-tile-icon--1m"></span></span>
          <span class="riichi-tile riichi-tile--small riichi-tile--sided"><span class="riichi-tile-icon riichi-tile-icon--1m"></span></span>
        </span>
        <span class="riichi-tile riichi-tile--small"><span class="riichi-tile-icon riichi-tile-icon--1m"></span></span>
      </span>
    </div>
  `
}

export const WithExtraSmallTiles = () => {
  return `
    <div style="display: flex; gap: 15px;">
      <span class="riichi-tile-group">
        <span class="riichi-tile riichi-tile--x-small"><span class="riichi-tile-icon riichi-tile-icon--1m"></span></span>
        <span class="riichi-tile riichi-tile--x-small"><span class="riichi-tile-icon riichi-tile-icon--1m"></span></span>
        <span class="riichi-tile riichi-tile--x-small"><span class="riichi-tile-icon riichi-tile-icon--1m"></span></span>
      </span>

      <span class="riichi-tile-group">
        <span class="riichi-tile riichi-tile--x-small"><span class="riichi-tile-icon riichi-tile-icon--1m"></span></span>
        <span class="riichi-tile riichi-tile--x-small riichi-tile--sided"><span class="riichi-tile-icon riichi-tile-icon--1m"></span></span>
        <span class="riichi-tile riichi-tile--x-small"><span class="riichi-tile-icon riichi-tile-icon--1m"></span></span>
      </span>

      <span class="riichi-tile-group">
        <span class="riichi-tile riichi-tile--x-small riichi-tile--reversed"><span class="riichi-tile-icon"></span></span>
        <span class="riichi-tile riichi-tile--x-small"><span class="riichi-tile-icon riichi-tile-icon--1m"></span></span>
        <span class="riichi-tile riichi-tile--x-small"><span class="riichi-tile-icon riichi-tile-icon--1m"></span></span>
        <span class="riichi-tile riichi-tile--x-small riichi-tile--reversed"><span class="riichi-tile-icon"></span></span>
      </span>

      <span class="riichi-tile-group">
        <span class="riichi-tile riichi-tile--x-small"><span class="riichi-tile-icon riichi-tile-icon--1m"></span></span>
        <span class="riichi-tile-group riichi-tile-group--stacked">
          <span class="riichi-tile riichi-tile--x-small riichi-tile--sided"><span class="riichi-tile-icon riichi-tile-icon--1m"></span></span>
          <span class="riichi-tile riichi-tile--x-small riichi-tile--sided"><span class="riichi-tile-icon riichi-tile-icon--1m"></span></span>
        </span>
        <span class="riichi-tile riichi-tile--x-small"><span class="riichi-tile-icon riichi-tile-icon--1m"></span></span>
      </span>
    </div>
  `
}