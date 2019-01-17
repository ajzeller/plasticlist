import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import styled, {ThemeProvider} from 'styled-components'
import theme from '../layouts/theme'
import media from '../layouts/media'


import Image from '../components/image'
import SEO from '../components/seo'
import GridWrapper from '../components/GridWrapper'

// Load IBM Plex Sans typeface
require('typeface-ibm-plex-sans')
require('typeface-lekton')
require('typeface-share-tech-mono')




const Container = styled.div`
  color: ${props => props.theme.greyText};
  font-family: 'IBM Plex Sans',
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  ${media.desktop`background-color: blue;`}
  ${media.giant`background-color: #fff;`}
  ${media.tablet`background-color: green;`}
  ${media.phone`background-color: red;`}
`

const IndexPage = ({ data }) => (
  <Layout>
    <ThemeProvider theme={theme}>
      <div>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <GridWrapper data ={data}>
        <Container theme={theme}>
            <h1>testing styled components</h1>
          </Container>

          {/* <h1>Here's some credit cards:</h1>
          
          
          {console.log(data.allAirtable)}

          {data.allAirtable.edges.map((edge, i) => (
            <div>
              <h3>{edge.node.data.card_name}</h3>
              <h4>{edge.node.data.card_issuer}</h4>
              <h5>{edge.node.data.network}</h5>
            </div>
        
          
          // <Link to={edge.node.data.Path} key={i}>
          // </Link>
          ))} */}
          
        </GridWrapper>

        {/* <Link to="/page-2/">Go to page 2</Link> */}
      </div>
    </ThemeProvider>
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    allAirtable(filter: { table: { eq: "Credit_Cards" } }) {
      edges {
        node {
          data {
            card_name
            network
            card_issuer
            color_primary
            required_spend
            bonus_value
            required_spend_window_days
            cash_back_percent
            card_type
            foreign_tx_fee_waived
            annual_fee_after_first_year
          }
        }
      }
    }
  }
`