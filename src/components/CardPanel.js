import React from 'react'
import { Link , withPrefix } from 'gatsby'

import styled, { css }  from 'styled-components'
import theme from '../layouts/theme'
import { CcVisa, CcAmex, CcDiscover, CcMastercard } from 'styled-icons/fa-brands'
import BusinessIcon from '@material-ui/icons/BusinessCenter';
import Visa from '../images/visa.svg'
import Mastercard from '../images/Mastercard_white.svg'
import Discover from '../images/discover_white.svg'
import Amex from '../images/amex.svg'
import CardDialog from '../components/CardDialog'

import media from '../layouts/media'
import Options, { NetworkOptions, IssuerOptions } from '../data/Options'

const panelBackgroundColor = (props) => {
    return props.theme[props.cardColor]
}

const Panel = styled.div`
    font-family: share tech mono;
    /* font-size: 16px; */
    display: grid;
    /* border: 1px solid ${theme.greyBorderLight}; */
    /* margin: 10px; */
    /* width: 100%; */
    padding: 5px 8px;
    border-radius: 10px;
    min-height: 110px;
    width: 100%;
    height: 100%;
    color: ${theme.white};
    /* text-shadow: ${theme.panelTextShadow}; */

    /* color: ${ props => (props.cardColor  === 'amexGold' && props.theme.amexGold) }; */
    background-color: none;
    background-image: ${ props => panelBackgroundColor(props) };
    box-shadow: ${theme.panelShadow};
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        box-shadow: ${theme.panelShadowHover};
        transform: scale(1.02);

    }

    ${media.panelColumns7`
        font-size: 24px;
        min-height: 180px;
    `}

    ${media.panelColumns6`
        font-size: 24px;
        min-height: 160px;
    `}

    ${media.panelColumns5`
        font-size: 20px;
        min-height: 140px;
    `}

    ${media.panelColumns4`
        font-size: 18px;
        min-height: 140px;
    `}

    ${media.panelColumns3`
        font-size: 18px;
        min-height: 140px;
    `}

    ${media.panelColumns2`
        font-size: 16px;
        min-height: 110px;
    `}

    `

const PanelWrapper = styled.div`

    width: 100%;

    ${media.panelColumns7`
        font-size: 24px;
        min-height: 180px;
    `}

    ${media.panelColumns6`
        font-size: 24px;
        min-height: 160px;
    `}

    ${media.panelColumns5`
        font-size: 20px;
        min-height: 140px;
    `}

    ${media.panelColumns4`
        font-size: 18px;
        min-height: 140px;
    `}

    ${media.panelColumns3`
        font-size: 18px;
        min-height: 140px;
    `}

    ${media.panelColumns2`
        font-size: 16px;
        min-height: 110px;
    `}

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
    font-size: 0.8em;

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
    color: ${theme.white};
`

const Label = styled.span`
    color: ${theme.greyText};
    /* text-transform: uppercase; */
    font-size: 0.8em;
    font-weight: 700;
`

const ContainerBonus = styled.div`
    text-transform: uppercase;
    color: ${theme.white};
`

const NetworkBrand = styled.div`
    width: 30px;
    align-self: flex-end;
    /* justify-self: right; */
`

const ContainerBottomRight = styled.div`
    display: grid;
    /* grid-template-columns: 1fr 40px; */

    ${media.giant`grid-template-columns: 1fr 50px;`}
    ${media.desktop`grid-template-columns: 1fr 50px;`}
    ${media.tablet`grid-template-columns: 1fr 40px;`}
    ${media.phone`grid-template-columns: 1fr 35px;`}
    align-items: center;
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

const CardType = styled.svg`
        height: 15px;
        width: 15px;
        color: ${theme.greyBorderLight};
        /* vertical-align: middle; */
`

const NetWorkIcon = styled.img`
    width: 90%;

    margin: 2px auto 5px auto;
`

const IssuerLogo = styled.img`
    max-width: 50px;
    margin: 0px 10px 0px 0px;
    align-self: flex-end;
    border-radius: 5px;
    background-color: white;
`

class CardPanel extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            open: false,
        }
    }

    handlePanelClick() {
        this.setState({ open: !this.state.open });
        // this.setState({
        //     open: !this.state.open,
        // })
      }
    
      handleClose = value => {
        this.setState({ open: false });
      };

      IssuerImg(issuer) {
        const optionQuery = IssuerOptions.filter(option => option.value === issuer )
        return optionQuery[0].img_name
    }

    render(){

        const issuerLogo = this.IssuerImg(this.props.cardIssuer)

        return(

            <PanelWrapper>
                <Panel cardColor = {this.props.cardColor} onClick={() => this.handlePanelClick()}>
                    <CardUpper >
                        <CardRank>{this.props.cardRank}</CardRank>


                        
                        <CardIssuer>  
                            {/* <IssuerLogo src={withPrefix(`/img/issuers/${issuerLogo}.png`)} /> */}
                            <span>{this.props.cardIssuer}</span>
                        </CardIssuer>
                    </CardUpper>
    
                        <CardName><span>{this.props.cardName}</span></CardName>
    
                    <CardLower >
                        <ContainerCardLowerLeft>
                            <ContainerSpend>
                                    <Label>SPEND</Label> ${this.props.requiredSpend/1000}k                        
                            </ContainerSpend>
    
                            <ContainerBonus>
                                <Label>Bonus Value</Label> ${this.props.bonusValue}
    
                            </ContainerBonus>
    
                        </ContainerCardLowerLeft>
                        
                        <ContainerCardLowerRight>
                            <AnnualFee>
                            ${this.props.showAdjustedAnnualFee ? this.props.adjustedAnnualFee : this.props.annualFeeAfterFirstYear}<Label>/yr</Label>
                            </AnnualFee>
    
                            <ContainerBottomRight>
                                <CardType>{this.props.cardType == 'Business' && <BusinessIcon /> } </CardType>
    
                                {/* <NetworkBrand> */}
                                    {this.props.network == 'VISA' && <NetWorkIcon src={Visa} /> }
                                    {this.props.network === 'AMEX' && <NetWorkIcon src={Amex} /> }
                                    {this.props.network === 'MasterCard' && <NetWorkIcon src={Mastercard} /> }
                                    {this.props.network === 'Discover' && <NetWorkIcon src={Discover} /> }
                                {/* </NetworkBrand>  */}
                            
                            </ContainerBottomRight>
                        
                        </ContainerCardLowerRight>
    
                    </CardLower>
    
                </Panel>

                    <CardDialog 
                        open={this.state.open}
                        {...this.props}
                        onClose={this.handleClose} 
                        // cardName={this.props.cardName}
                        // cardIssuer={this.props.cardIssuer}
                        // network={this.props.network}
                        // cardColor={this.props.cardColor}
                        // requiredSpend={this.props.requiredSpend}
                        // requiredSpendWindow={this.props.requiredSpendWindow}
                        // bonusValue={this.props.bonusValue}
                        // annualFee={this.props.annualFee}
                        // cardType={this.props.cardType}
                        // cardRank={this.props.cardRank}
                        // cardDescription={this.props.cardDescription}
                        // imgName={this.props.imgName}
                    />
            </PanelWrapper>


        )
    }
}

export default CardPanel