import './index.scss'

export default {
  title: 'Tile Icons',
  tags: ['autodocs']
}

export const Basic = () => {
  return `<span class="riichi-tile-icon riichi-tile-icon--1m"></span>`
}

export const List = () => {
  const tileKeys = []
  for (let i = 1; i <= 9; i++) tileKeys.push(`${i}m`)
  for (let i = 1; i <= 9; i++) tileKeys.push(`${i}p`)
  for (let i = 1; i <= 9; i++) tileKeys.push(`${i}s`)
  for (let i = 1; i <= 7; i++) tileKeys.push(`${i}z`)

  const div = document.createElement('div')
  div.style = 'display: flex; gap: 5px; flex-wrap: wrap;'

  tileKeys.forEach(tileKey => {
    const tileDiv = document.createElement('div')
    tileDiv.style = 'border: 1px solid silver;'

    const iconSpan = document.createElement('span')
    iconSpan.className = `riichi-tile-icon riichi-tile-icon--${tileKey}`
    tileDiv.appendChild(iconSpan)

    const titleDiv = document.createElement('div')
    titleDiv.innerText = tileKey
    titleDiv.style = 'text-align: center; font-weight: bold; font-family: sans-serif; border-top: 1px solid silver;'
    tileDiv.appendChild(titleDiv)

    div.appendChild(tileDiv)
  })

  return div
}