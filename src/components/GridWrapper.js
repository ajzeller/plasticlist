import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import media from '../layouts/media'

import CardPanel from '../components/CardPanel'
import RefineMenuWrapper from '../components/RefineMenuWrapper'

const panelStyle = {
  border: '1px solid grey',
  borderRadius: '10px',
  margin: '20px',
}

const GridContainer = styled.div`
    margin: auto auto 20px auto;
    display: grid;
    
    /* grid-gap: 8px; */
    ${media.giant`grid-gap: 15px;`}    
    ${media.desktop`grid-gap: 15px;`}    
    ${media.tablet`grid-gap: 15px;`}
    ${media.phone`grid-gap: 8px;`}

    ${media.panelColumns7`
      grid-template-columns: repeat(6,1fr);
      max-width: 1600px;
      padding: 10px;
      grid-gap: 10px;
    `}

    ${media.panelColumns6`
      grid-template-columns: repeat(5,1fr);
      padding: 10px;
      grid-gap: 10px;
    `}

    ${media.panelColumns5`
      grid-template-columns: repeat(5,1fr);
      padding: 10px;
      grid-gap: 10px;
    `}

    ${media.panelColumns4`
      grid-template-columns: repeat(4,1fr);
      grid-gap: 10px;
    `}

    ${media.panelColumns3`
      grid-template-columns: repeat(3,1fr);
      grid-gap: 10px;
      padding: 10px;
    `}

    ${media.panelColumns2`
      grid-template-columns: repeat(2,1fr);
      grid-gap: 8px;
      padding: 8px;
    `}
/* 

    @media (max-width: 600px) {
      grid-template-columns: 1fr 1fr;
      max-width: 500px;
    }

    @media (min-width: 601px) and (max-width: 1000px) {
      grid-template-columns: 1fr 1fr 1fr;
      max-width: 600px;

    }

    @media (min-width: 1001px) and (max-width: 1600px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media (min-width: 1601px) {
      grid-template-columns: repeat(5,1fr);
    } */

    /* ${media.giant`grid-template-columns: 1fr 1fr 1fr 1fr;`} */
    /* ${media.desktop`grid-template-columns: 1fr 1fr 1fr 1fr;`} */
    /* ${media.tablet`grid-template-columns: 1fr 1fr 1fr;`} */
    /* ${media.phone`grid-template-columns: 1fr 1fr;`} */

    justify-items: center;
`

class GridWrapper extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    // }
  }

  render() {


    return (
      <GridContainer>
        {/* {console.log('testing props')} */}

        {/* {console.log(this.props.data)} */}

        {this.props.data.map((edge, i) => (
          <CardPanel
            cardName={edge.node.data.cardName}
            cardIssuer={edge.node.data.cardIssuer}
            network={edge.node.data.network}
            cardColor={edge.node.data.colorPrimary}
            requiredSpend={edge.node.data.requiredSpend}
            requiredSpendWindow={edge.node.data.requiredSpendWindowDays}
            bonusValue={edge.node.data.bonusValue}
            bonusValuePoints={edge.node.data.bonusValuePoints}
            annualFeeAfterFirstYear={edge.node.data.annualFeeAfterFirstYear}
            annualFeeFirstYear={edge.node.data.annualFeeFirstYear}
            adjustedAnnualFee={edge.node.data.adjustedAnnualFee}
            cardType={edge.node.data.cardType}
            cashBack={edge.node.data.cashBackPercent}
            cardRank={i + 1}
            cardDescription={edge.node.data.perks}
            imgName={edge.node.data.imgName}
            showAdjustedAnnualFee = {this.props.showAdjustedAnnualFee}

          />
        ))}
      </GridContainer>
    )
  }
}

export default GridWrapper
