import React from 'react'
import Layout from '../components/layout'
import styled, {ThemeProvider} from 'styled-components'
import theme from '../layouts/theme'
import media from '../layouts/media'


import Image from '../components/image'
import SEO from '../components/seo'
import GridWrapper from '../components/GridWrapper'



class DataHandler extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        data: this.props.data
    }

  }

  render() {
    return (
      <Layout>
        <ThemeProvider theme={theme}>
          <div>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <GridWrapper data={this.state.data}></GridWrapper>

          </div>
        </ThemeProvider>
      </Layout>
    )
  }
}

export default DataHandler