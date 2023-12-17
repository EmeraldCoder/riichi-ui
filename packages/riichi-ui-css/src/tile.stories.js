import './index.scss'

export default {
  title: 'Tiles',
  tags: ['autodocs']
}

export const Basic = () => {
  return `
    <span class="riichi-tile">
      <span class="riichi-tile-icon riichi-tile-icon--1m"></span>
    </span>
  `
}

export const Sided = () => {
  return `
    <span class="riichi-tile riichi-tile--sided">
      <span class="riichi-tile-icon riichi-tile-icon--1m"></span>
    </span>
  `
}

export const Reversed = () => {
  return `
    <span class="riichi-tile riichi-tile--reversed">
      <span class="riichi-tile-icon"></span>
    </span>
  `
}

export const Small = () => {
  return `
    <span class="riichi-tile riichi-tile--small">
      <span class="riichi-tile-icon riichi-tile-icon--1m"></span>
    </span>
  `
}

export const ExtraSmall = () => {
  return `
    <span class="riichi-tile riichi-tile--x-small">
      <span class="riichi-tile-icon riichi-tile-icon--1m"></span>
    </span>
  `
}