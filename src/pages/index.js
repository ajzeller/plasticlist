import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../layouts/theme'
import media from '../layouts/media'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import Image from '../components/image'
import SEO from '../components/seo'
import GridWrapper from '../components/GridWrapper'
import DataWrapper from '../components/DataWrapper'

// Load IBM Plex Sans typeface
require('typeface-ibm-plex-sans')
require('typeface-lekton')
require('typeface-share-tech-mono')

const Container = styled.div`
  color: ${props => props.theme.greyText};
  font-family: 'IBM Plex Sans';
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
      <DataWrapper data={data.allAirtable.edges} />
      {/* <Link to="/page-2">Go to page 2</Link> */}


      {/* <Layout>
    <ThemeProvider theme={theme}>
      <div>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <GridWrapper data={data}></GridWrapper>

      </div>
    </ThemeProvider>
  </Layout> */}
    </Layout>
)

export default IndexPage

export const query = graphql`
  {
    allAirtable(filter: { table: { eq: "Credit_Cards" } }) {
      edges {
        node {
          data {
            cardName
            network
            cardIssuer
            colorPrimary
            requiredSpend
            bonusValue
            bonusValuePoints
            requiredSpendWindowDays
            cashBackPercent
            cardType
            plasticScoreNormalized
            foreignTxFeeWaived
            annualFeeFirstYear
            annualFeeAfterFirstYear
            adjustedAnnualFee
            perks
            imgName
          }
        }
      }
    }
  }
`
