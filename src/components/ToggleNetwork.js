import React from 'react';
import styled, {ThemeProvider} from 'styled-components'
import VisaIcon from '../images/visa.svg'
import MastercardIcon from '../images/mastercard.svg'
import AmexIcon from '../images/amex.svg'
import DiscoverIcon from '../images/discover.svg'
import VisaIconUnselected from '../images/VISA_unselected.svg'
import MastercardIconUnselected from '../images/Mastercard_unselected.svg'
import AmexIconUnselected from '../images/Amex_unselected.svg'
import DiscoverIconUnselected from '../images/Discover_unselected.svg'


import theme from '../layouts/theme'
import media from '../layouts/media'

const CardBrandIcon = styled.img`
    width: 70px;
    margin: 0px;
    /* box-shadow: ${theme.panelShadow}; */
`

const NetworkIconsContainer = styled.div`
    display: grid;
    grid-gap: 0px;
    margin: 10px 10px 10px 10px;
    justify-items: center;
    grid-template-columns: repeat(4, 1fr);
`

const Button = styled.button`
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    transition: all 0.5s ease;
`


class ToggleNetwork extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Visa: true,
            Mastercard: true,
            Amex: true,
            Discover: true, 
        }

        // this.handleClick = this.handleClick.bind(this);

    }

    handleClick = (network) => {
        this.setState( {
            [network]: !this.state[network],
        })

        console.log(network)
    }

    render() {
        return (
                <NetworkIconsContainer>
                    <Button onClick={ () => {this.handleClick("Visa")}}><CardBrandIcon src={this.state.Visa ? VisaIcon : VisaIconUnselected} /></Button>
                    <Button onClick={ () => {this.handleClick("Mastercard")}}><CardBrandIcon src={this.state.Mastercard ? MastercardIcon : MastercardIconUnselected} /></Button>
                    <Button onClick={ () => {this.handleClick("Amex")}}><CardBrandIcon src={this.state.Amex ? AmexIcon : AmexIconUnselected} /></Button>
                    <Button onClick={ () => {this.handleClick("Discover")}}><CardBrandIcon src={this.state.Discover ? DiscoverIcon : DiscoverIconUnselected} /></Button>
                </NetworkIconsContainer>
        )
    }
}

export default ToggleNetwork 