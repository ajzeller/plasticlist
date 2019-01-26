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
    // this.setState = {

    // }
  }

  render() {
    return (
      <GridContainer>
        {console.log('testing props')}

        {console.log(this.props.data.allAirtable)}



        {this.props.data.allAirtable.edges.map((edge, i) => (
          <CardPanel
            cardName={edge.node.data.card_name}
            cardIssuer={edge.node.data.card_issuer}
            network={edge.node.data.network}
            cardColor={edge.node.data.color_primary}
            requiredSpend={edge.node.data.required_spend}
            requiredSpendWindow={edge.node.data.required_spend_window_days}
            bonusValue={edge.node.data.bonus_value}
            cardRank={i + 1}
            annualFee={edge.node.data.annual_fee_after_first_year}
            cardType={edge.node.data.card_type}

          />
        ))}
      </GridContainer>
    )
  }
}

export default GridWrapper
