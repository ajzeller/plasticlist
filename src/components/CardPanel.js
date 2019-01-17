import React from 'react'
import { Link } from 'gatsby'
import styled, { css }  from 'styled-components'
import theme from '../layouts/theme'
import { CcVisa, CcAmex, CcDiscover, CcMastercard } from 'styled-icons/fa-brands'
import Visa from '../images/visa.svg'


const panelBackgroundColor = (props) => {
    return props.theme[props.cardColor]
}

const Panel = styled.div`
    font-family: share tech mono;
    font-size: 16px;
    display: grid;
    /* border: 1px solid ${theme.greyBorderLight}; */
    /* margin: 10px; */
    /* width: 100%; */
    padding: 5px 8px;
    border-radius: 10px;
    min-height: 110px;
    color: ${theme.white};
    /* text-shadow: ${theme.panelTextShadow}; */

    /* color: ${ props => (props.cardColor  === 'amexGold' && props.theme.amexGold) }; */
    background-color: #F9A021;
    background-image: ${ props => panelBackgroundColor(props) };
    box-shadow: ${theme.panelShadow};
`

const CardUpper = styled.div`
    display: grid;
    grid-template-columns: 1fr 10fr;
    height: 1.5rem;
    justify-items: right;
    align-items: center;
`

const CardLower = styled.div`
    font-size: 0.8em;
    margin: 5px 0 0 0;
    display: grid;
    grid-template-columns: 2fr 1fr;
    word-spacing: -2px;
    text-shadow: none;
`

const CardRank = styled.div`
     /* text-decoration: underline; */
    /* border-bottom: 4px solid ${theme.white}; */
    justify-self: left;
`

const CardIssuer = styled.div`
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.7em;
`   

const CardName = styled.div`
    font-family: share tech mono;
    justify-self: center;
    text-align: center;
    margin: 0px 0;
    font-size: 0.9em;
    line-height: 1em;
    text-transform: uppercase;
    font-weight: 600;
    /* height: 20px; */

    span {
        background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#E0E0E0));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        /* text-shadow: 0px 0px 1px rgba(0, 0, 0, 1); */

    }
`

const ContainerSpend = styled.div`
    /* font-size: 1rem; */
    text-transform: uppercase;
    color: ${theme.white};
`

const Label = styled.span`
    color: ${theme.greyText};
    font-size: 0.5rem;
    font-weight: 700;
`

const ContainerBonus = styled.div`
    text-transform: uppercase;
    color: ${theme.white};
`

const NetworkBrand = styled.div`
    width: 20px;
    align-self: flex-end;
    /* justify-self: right; */
`
const ContainerCardLowerLeft = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-content: left;
`

const ContainerCardLowerRight = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    /* grid-template-rows: 2rem 4rem; */
    justify-items: right;
    align-items: end;
    /* height: 50px; */
`

const AnnualFee = styled.div`
    background-color: rgba(0, 0, 0, 0.25);
    padding: 0px 3px;
    height: 20px;
    margin: 0 0 0px 0;
    border-radius: 0.4rem;
`

class CardPanel extends React.Component {
    constructor([props]){
        super(props)
        // this.setState(

        // )
    }

    render(){
        return(
            <Panel cardColor = {this.props.cardColor}>
            <CardUpper >
                <CardRank>{this.props.cardRank}</CardRank>
                <CardIssuer>{this.props.cardIssuer}</CardIssuer>
            </CardUpper>

                <CardName><span>{this.props.cardName}</span></CardName>

            <CardLower >
                <ContainerCardLowerLeft>
                    <ContainerSpend>
                            <Label>Spend</Label> ${this.props.requiredSpend/1000}k                        
                    </ContainerSpend>

                    <ContainerBonus>
                        <Label>Bonus Value</Label> ${this.props.bonusValue}

                    </ContainerBonus>

                </ContainerCardLowerLeft>
                
                <ContainerCardLowerRight>
                    <AnnualFee>
                     ${this.props.annualFee}<Label>/yr</Label>
                    </AnnualFee>
                    
                    <NetworkBrand>
                        {this.props.network == 'VISA' && <CcVisa /> }
                        {this.props.network == 'AMEX' && <CcAmex/> }
                        {this.props.network == 'MasterCard' && <CcMastercard/> }
                        {this.props.network == 'Discover' && <CcDiscover/> }
                    </NetworkBrand> 
                </ContainerCardLowerRight>

            </CardLower>
                
            </Panel>

            // <Panel />
        )
    }
}

export default CardPanel