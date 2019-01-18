import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Img from "gatsby-image"
import styled from 'styled-components'
import theme from '../layouts/theme'
import logo from '../images/plastic-list-logo-1.svg'
import logo2 from '../images/plastic-list-logo-2.svg'



const HeaderContainer = styled.div`
  font-family: share tech mono;
  /* font-family: IBM Plex sans; */
  /* background-color: ${theme.greyPanelBackground}; */
  background-color: ${theme.black};
  border-bottom: 2px solid ${theme.greyBorderDark};
  width: 100vw;
  margin: auto;
  /* box-shadow: ${theme.panelShadow}; */
  min-height: 70px;
  font-weight: 100;
`

const HeaderInnerContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  display: grid;
  grid-template-columns: 80px 1fr;
  /* justify-items: center; */
  align-items: center;
  height: 70px;
`

const LogoImage = styled.img`
    justify-self: center;

    height: 60px;
    margin: 0px 0px;
`

const LogoText = styled(Link)`
    text-transform: uppercase;
    text-decoration: none;
    color: ${theme.white};
    font-weight: 600;
    font-size: 1.5rem;
    letter-spacing: 0px;

    span {
        background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#E0E0E0));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        /* text-shadow: 0px 0px 1px rgba(0, 0, 0, 1); */

    }
`

class Header extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <HeaderContainer>
        <HeaderInnerContainer>
          <LogoImage src={logo} /> 
          <LogoText to="/"><span>{this.props.siteTitle}</span></LogoText>
        </HeaderInnerContainer>

      </HeaderContainer>
    )
  }
}

// const Header = ({ siteTitle }) => (
//   <div
//     style={{
//       fontFamily: 'IBM Plex Sans',
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </div>
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header