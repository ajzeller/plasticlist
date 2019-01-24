import React from 'react'
import Layout from '../components/layout'
import styled, {ThemeProvider} from 'styled-components'
import theme from '../layouts/theme'
import media from '../layouts/media'


import Image from '../components/image'
import SEO from '../components/seo'
import GridWrapper from '../components/GridWrapper'
import RefineMenuWrapper from '../components/RefineMenuWrapper'

const MainContainer = styled.div`
    max-width: 1000px;
    margin: auto;
`

class DataWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        data: this.props.data
    }

  }

  render() {
    return (
        <ThemeProvider theme={theme}>
          <MainContainer>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <RefineMenuWrapper />
            <GridWrapper data={this.state.data}></GridWrapper>
            {this.props.children}
          </MainContainer>
        </ThemeProvider>
    )
  }
}

export default DataWrapper