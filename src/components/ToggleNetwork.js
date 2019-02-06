import React from 'react';
import styled, {ThemeProvider} from 'styled-components'
import VisaIcon from '../images/Visa_blue.svg'
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
                    <Button id="Visa" onClick={ () => {this.props.handleNetworkToggle("Visa") } }><CardBrandIcon src={this.props.Visa ? VisaIcon : VisaIconUnselected} /></Button>
                    <Button id="Mastercard" onClick={ () => {this.props.handleNetworkToggle("Mastercard") } }><CardBrandIcon src={this.props.Mastercard ? MastercardIcon : MastercardIconUnselected} /></Button>
                    <Button id="Amex" onClick={ () => {this.props.handleNetworkToggle("Amex") } }><CardBrandIcon src={this.props.Amex ? AmexIcon : AmexIconUnselected} /></Button>
                    <Button id="Discover" onClick={ () => {this.props.handleNetworkToggle("Discover") } }><CardBrandIcon src={this.props.Discover ? DiscoverIcon : DiscoverIconUnselected} /></Button>
                </NetworkIconsContainer>
        )
    }
}

export default ToggleNetwork 