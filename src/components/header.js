import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import theme from '../layouts/theme'
import logo from '../images/plastic-list-logo-1.svg'
import logo2 from '../images/plastic-list-logo-2.svg'
import { SortAmountDown, Filter } from 'styled-icons/fa-solid'
import { AccountCircle, Lock } from 'styled-icons/material'
import { SliderAlt } from 'styled-icons/boxicons-regular'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import RefineDialog from '../components/RefineDialog';

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
  grid-template-columns: 65px 1fr 40px 50px;
  padding: 0 10px;
  /* grid-gap: 10px; */
  /* justify-items: center; */
  align-items: center;
  height: 70px;
`

const LogoImage = styled.img`
  justify-self: center;

  height: 60px;
  margin: 0px 0px 0px 0px;
`

const LogoText = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  color: ${theme.white};
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: 0px;
  margin: 0px 0px 0px 15px;

  span {
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#fff),
      to(#e0e0e0)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    /* text-shadow: 0px 0px 1px rgba(0, 0, 0, 1); */
  }
`

const ShinyText = styled.span`
  background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(#fff),
        to(#e0e0e0)
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      /* text-shadow: 0px 0px 1px rgba(0, 0, 0, 1); */
    }
`

const IconButtonWrapper = styled.button`
  /* width: 25px; */
  text-transform: uppercase;
  color: ${theme.white};
  font-weight: 600;
  margin-left: 15px;
  font-size: 16px;
  background: none;
  padding: 0px;
  border: none;
  /* background-color: ${theme.greyBorderDark}; */
`

const SettingsIconWrapper = styled(IconButtonWrapper)`
  /* font-size: 20px; */
  height: 50px;
`

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuClicked: false,
      clickCount: 1,
      name: "menu",
      open: false,
    }

    this.handleMenuClick = this.handleMenuClick.bind(this);

  }

  handleMenuClick(param) {
    this.setState({
      menuClicked: !this.state.menuClicked,
    })
    console.log(param)
  }

  handleSettingsClick() {
    this.setState({
      open: !this.state.open,
    })
  }

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = value => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <HeaderContainer>
          <HeaderInnerContainer>
            <LogoImage src={logo} />
            <LogoText to="/">
              <span>{this.props.siteTitle}</span>
            </LogoText>
            <SettingsIconWrapper onClick={() => this.handleSettingsClick()}><SliderAlt /></SettingsIconWrapper>
            <IconButtonWrapper onClick={() => this.handleMenuClick(this.state.name)}>
              <ShinyText>
                {this.state.name}
              </ShinyText>
            </IconButtonWrapper>
          </HeaderInnerContainer>
        </HeaderContainer>
        <RefineDialog 
          open={this.state.open}
          onClose={this.handleClose}
        />
      </div>

      
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
