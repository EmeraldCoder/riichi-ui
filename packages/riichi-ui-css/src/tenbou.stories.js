import './index.scss'

export default {
  title: 'Tenbou',
  tags: ['autodocs']
}

export const Hyaku = () => {
  return `
<span class="riichi-tenbou riichi-tenbou--hyaku">
  <span class="riichi-tenbou__dot"></span>
  <span class="riichi-tenbou__dot"></span>
  <span class="riichi-tenbou__dot"></span>
  <span class="riichi-tenbou__dot"></span>
  <span class="riichi-tenbou__dot"></span>
  <span class="riichi-tenbou__dot"></span>
</span>`
}

export const Sen = () => {
  return `
<span class="riichi-tenbou riichi-tenbou--sen">
  <span class="riichi-tenbou__dot"></span>
</span>`
}

export const GoSen = () => {
  return `
<span class="riichi-tenbou riichi-tenbou--go-sen">
  <span class="riichi-tenbou__dot"></span>
  <span class="riichi-tenbou__dot"></span>
  <span class="riichi-tenbou__dot"></span>
  <span class="riichi-tenbou__dot"></span>
  <span class="riichi-tenbou__dot"></span>
</span>`
}

export const IchiMan = () => {
  return `
<span class="riichi-tenbou riichi-tenbou--ichi-man">
  <span class="riichi-tenbou__dot"></span>
  <span class="riichi-tenbou__dot"></span>
  <span class="riichi-tenbou__dot"></span>
  <span class="riichi-tenbou__dot"></span>
  <span class="riichi-tenbou__dot"></span>
  <span class="riichi-tenbou__dot"></span>
  <span class="riichi-tenbou__dot"></span>
  <span class="riichi-tenbou__dot"></span>
  <span class="riichi-tenbou__dot"></span>
</span>`
}

export const Small = () => {
  return `
<span class="riichi-tenbou riichi-tenbou--small riichi-tenbou--hyaku">
  <span class="riichi-tenbou__dot"></span>
  <span class="riichi-tenbou__dot"></span>
  <span class="riichi-tenbou__dot"></span>
  <span class="riichi-tenbou__dot"></span>
  <span class="riichi-tenbou__dot"></span>
  <span class="riichi-tenbou__dot"></span>
</span>

<span class="riichi-tenbou riichi-tenbou--small riichi-tenbou--sen">
  <span class="riichi-tenbou__dot"></span>
</span>

<span class="riichi-tenbou riichi-tenbou--small riichi-tenbou--go-sen">
  <span class="riichi-tenbou__dot"></span>
  <span class="riichi-tenbou__dot"></span>
  <span class="riichi-tenbou__dot"></span>
  <span class="riichi-tenbou__dot"></span>
  <span class="riichi-tenbou__dot"></span>
</span>

<span class="riichi-tenbou riichi-tenbou--small riichi-tenbou--ichi-man">
  <span class="riichi-tenbou__dot"></span>
  <span class="riichi-tenbou__dot"></span>
  <span class="riichi-tenbou__dot"></span>
  <span class="riichi-tenbou__dot"></span>
  <span class="riichi-tenbou__dot"></span>
  <span class="riichi-tenbou__dot"></span>
  <span class="riichi-tenbou__dot"></span>
  <span class="riichi-tenbou__dot"></span>
  <span class="riichi-tenbou__dot"></span>
</span>`
}