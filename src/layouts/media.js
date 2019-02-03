// these sizes are arbitrary and you can set them to whatever you wish
import { css } from 'styled-components'

const sizes = {
  giant: 4000,
  desktop: 1600,
  tablet: 768,
  phone: 420,
  panelColumns2: 500,
  panelColumns3: 800,
  panelColumns4: 1000,
  panelColumns5: 1200,
  panelColumns6: 1600,
  panelColumns7: 4000,
}

// iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export default media