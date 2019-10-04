import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import theme from '../layouts/theme'


import Header from './header'
import Footer from './Footer'
import DataWrapper from './DataWrapper'
import './layout.css'

const mui_theme = createMuiTheme({
  palette: {
    primary: {main: theme.primary},
    secondary: {main: theme.secondary},
  },
  typography: {
    fontFamily: 'IBM Plex Sans',
  }

}
);

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <MuiThemeProvider theme={mui_theme}>

          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: `0 auto`,
              // maxWidth: 960,
              padding: `0px`,
              paddingTop: 0,
              
            }}
          >
            {children}
            
            <Footer />
          </div>
        </MuiThemeProvider>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
