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
    max-width: 1000px;
    padding: 5px 5px;
    display: grid;
    grid-gap: 8px;
    ${media.giant`grid-template-columns: 1fr 1fr 1fr 1fr;`}
    ${media.desktop`grid-template-columns: 1fr 1fr 1fr;`}
    ${media.tablet`grid-template-columns: 1fr 1fr;`}
    ${media.phone`grid-template-columns: 1fr 1fr;`}
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
        {console.log('testing props')}

        {console.log(this.props.data)}

        {this.props.data.map((edge, i) => (
          <CardPanel
            cardName={edge.node.data.cardName}
            cardIssuer={edge.node.data.cardIssuer}
            network={edge.node.data.network}
            cardColor={edge.node.data.colorPrimary}
            requiredSpend={edge.node.data.requiredSpend}
            requiredSpendWindow={edge.node.data.requiredSpendWindowDays}
            bonusValue={edge.node.data.bonusValue}
            annualFee={edge.node.data.annualFeeAfterFirstYear}
            cardType={edge.node.data.cardType}
            cardRank={i + 1}
          />
        ))}
      </GridContainer>
    )
  }
}

export default GridWrapper
