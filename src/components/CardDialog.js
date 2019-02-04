import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown'
import { withPrefix } from 'gatsby'

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import BusinessIcon from '@material-ui/icons/BusinessCenter';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Slide from '@material-ui/core/Slide';
import Fab from '@material-ui/core/Fab';
// import CardDialogBottomNav from '../components/CardDialogBottomNav'

import Visa from '../images/Visa_blue.svg'
import Mastercard from '../images/mastercard.svg'
import Amex from '../images/amex.svg'
import Discover from '../images/discover.svg'

import styled, {ThemeProvider} from 'styled-components'
import theme from '../layouts/theme'
import media from '../layouts/media'
import Options, { NetworkOptions, IssuerOptions } from '../data/Options'

const CardDialogContainer = styled(Dialog)`
    /* max-width: 50vw; */
    font-family: IBM Plex sans;
    /* font-family: share tech mono; */
    font-weight: 800;
    text-transform: none;
    /* overflow: hidden !important; */
    overflow-x: hidden !important;
    overflow-y: scroll;
    `

const CardDialogInner = styled.div`
    /* padding: 10px; */
    /* margin: 0 0 70px 0; */
    height: 100%;
    background-color: ${theme.mediumGreyBackground};
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c5c5c5' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");



`

const CardDialogUpper = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr;
    grid-template-rows: 120px;
    background-color: ${theme.white};
    padding: 0 10px;

    ${media.giant`
        height: 10vh;
    `}

    ${media.phone`
        height: 8vh;
    `}

`

const LogoContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px 70px;
    align-items: center;
`

const IssuerLogo = styled.img`
    max-width: 75%;
    max-height: 40px;
    margin: 0px 0px 5px 0px;
    align-self: flex-end;
    border-radius: 5px;
`

const LayeredBackground = styled.div`
    /* background-color: ${theme.mediumGreyBackground}; */
    /* background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c5c5c5' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E"); */
    
    top: 130px;
    z-index: 200;
    ${media.giant`
        padding: 70px 4vw 20px 4vw;
    
    `}

    ${media.phone`
        min-height: 84vh;
        padding: 70px 10px 70px 10px;

    `}

`

const CardImage = styled.img`
    /* width: 40vw; */
    /* margin: 10px 20px; */
    /* max-height: 100px; */
    width: 40vw;
    max-width: 250px;
    /* margin: 10px 10px 10px 0; */
    margin: 0px 10px 0 0;
    display: block;
    z-index: 100;
    justify-self: center;
    align-self: center;
    opacity: 0.8;
`

const IconButtonClose = styled(IconButton)`

`

const DialogHeader = styled.div`
    display: grid;
    padding: 10px;
    justify-items: flex-end;
    background-color: ${theme.white};
    /* height: 8vh; */
    ${media.phone`height: 8vh;`}


`

const CardDialogBottomNav = styled.div`
    width: 100%;
    display: grid;
    justify-content: flex-end;
    ${media.phone`
        bottom: 0px;
        position: fixed;
        padding: 10px 10px;
        margin: 0;

    `}

    position: sticky;
    bottom: 20px;
    margin: 0 auto;
    padding: 0px 10px 0px 0;
    /* height: 70px; */
    /* display: fixed; */
`
const InfoItem = styled.div`
    /* text-transform: uppercase; */
    font-size: 12px;
    font-weight: 400;
    margin: 0px 0 0px 0;
    padding: 0 0 0px 0;
    color: ${theme.black};

    & ul {
        margin-bottom: 0px ;

        li {
            margin-bottom: 5px ;
        }
    }
`

const Title = styled.div`
    font-size: 1.5em;
    text-transform: uppercase;
    text-align: center;
    margin: 2vw 0 1vw 0;
    color: ${theme.trueBlack};

    ${media.phone`
        /* margin: 10px 0 0 0; */

    `}
`

const NetWorkIcon = styled.img`
    margin: 0px 10px 0 0;
    opacity: 1;
    border-radius: 30px;
    height: 30px;
    box-shadow: ${theme.panelShadow};
`


const SubPanel = styled.div`
    background-color: rgba(255,255,255,0.75);
    opacity: 1;
    box-shadow: ${theme.panelShadow};
    border-radius: ${theme.panelRadius};
    padding: 10px;
    margin: 10px 0px 0px 0px;
`

const SubPanelTitle = styled.div`
    font-size: 0.75em;
    text-transform: uppercase;
    text-align: left;
    margin: 0px 0px 5px 0px;
    color: ${theme.darkGreytext};
`

const CardType = styled.div`
    font-size: 0.8em;
    text-transform: uppercase;
    height: 30px;
    line-height: 30px;
    padding: 0px 12px;
    text-align: center;
    vertical-align: middle;
    /* padding: 8px 10px; */
    border-radius: 30px;
    margin: 0px 10px 0px 0px;
    color: ${theme.black};
    background-color: ${theme.white};
    /* background-color: #2f88cc; */
/* background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c9c9c9' fill-opacity='0.54' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E"); */
    display: block;
    opacity: 0.5;
    max-width: 100px;
    box-shadow: ${theme.panelShadow};

    svg {
        height: 15px;
    }
`

const TagContainer = styled.div`
    height: 30px;
    margin: 15px 0 0 0;
    display: grid;
    grid-template-columns: 50px 1fr;
    align-self: flex-start;
`

const BonusGrid = styled.div`
    /* display: grid; */
    /* grid-template-columns: 1fr 1fr; */
`

const panelBackgroundColor = (props) => {
    return props.theme[props.cardColor]
}

const ApplyButton = styled(Fab)`
    height: 40px !important;
    color: ${theme.white} !important;
    /* margin: 0 auto; */
    /* float: right; */
    /* max-height */
    /* box-shadow: ${theme.panelShadow}; */
    /* border-radius: 20px; */
    background-image: ${ props => panelBackgroundColor(props) } !important;
`

const ValueEmphasis = styled.span`
    font-size: 20px;
    color: ${theme.trueBlack};
`

const PanelTextSmall = styled.span`
    /* height: 30px; */
    display: inline-block;
    text-transform: uppercase;
    color: #A4A4A4;
    font-size: 10px;
    line-height: 10px;
    font-weight: 400;
    text-align: left;
    /* vertical-align: middle; */
    /* max-width: 50px; */
    margin: 5px 5px 0px 5px;
`

const CardGridFirstRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
`   

const CardGridSecondRow = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 10px;
`   

const PanelSubGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
`

const RequiredSpendingGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
`   

const AnnualFeeGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
`

const CashBackGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
`

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Transition(props) {
    return <Slide direction="up" {...props} />;
  }

class CardDialog extends React.Component {
    constructor(props) {
        super(props)
    }

    handleClose = () => {
        this.props.onClose();
    };

    NetworkIconImg(network) {
        const optionQuery = NetworkOptions.filter(option => option.id === network )
        return optionQuery[0].img_name
    }

    IssuerImg(issuer) {
        const optionQuery = IssuerOptions.filter(option => option.value === issuer )
        return optionQuery[0].img_name
    }


    render() {

        const { fullScreen, onClose, ...other } = this.props;
        // const { fullScreen } = this.props;
            
        // set network icon
        let NetworkIconPath
        // {this.props.network === 'VISA' && NetworkIconPath == 'Visa' }
        // {this.props.network === 'AMEX' && NetworkIconPath == 'Amex' }
        // console.log(NetworkOptions)

        // console.log(NetworkIconPath)
        // console.log(this.NetworkIconImg(this.props.network))
        
        const networkLogo = this.NetworkIconImg(this.props.network)
        const issuerLogo = this.IssuerImg(this.props.cardIssuer)
        // console.log(networkLogo)

        return (


            // {this.props.network === 'MasterCard' && <NetWorkIcon src={Mastercard} /> }
            // {this.props.network === 'Discover' && <NetWorkIcon src={Discover} /> }            

            <CardDialogContainer
                onClose={this.handleClose} 
                aria-labelledby="CardDialog" 
                TransitionComponent={Transition}
                fullScreen={fullScreen}
                fullWidth
                maxWidth='md'
                // {...this.props}
                {...other}
                >

                <CardDialogInner>
                    <DialogHeader>
                        <IconButtonClose color="inherit" onClick={this.handleClose} aria-label="Close">
                            <CloseIcon />
                        </IconButtonClose>
                    </DialogHeader>

                    <CardDialogUpper>
                    {/* {this.props.cardRank} */}
                        <CardImage src={withPrefix(`/img/${this.props.imgName}.png`)} />

                        
                        <LogoContainer>

                            <IssuerLogo src={withPrefix(`/img/issuers/${issuerLogo}.png`)} />


                            {/* <NetWorkIcon src={`Visa`} />  */}

                            <TagContainer>
                                {this.props.network == 'VISA' && <NetWorkIcon src={Visa} /> }
                                {this.props.network === 'AMEX' && <NetWorkIcon src={Amex} /> }
                                {this.props.network === 'MasterCard' && <NetWorkIcon src={Mastercard} /> }
                                {this.props.network === 'Discover' && <NetWorkIcon src={Discover} /> }
                                <CardType>{this.props.cardType}</CardType>
                            </TagContainer>

                        </LogoContainer>
                    </CardDialogUpper>

                    <LayeredBackground>
                            <Title>{this.props.cardName}</Title>

                            <CardGridFirstRow>
                                <SubPanel>
                                    <SubPanelTitle>Bonus Value</SubPanelTitle>

                                    <BonusGrid>
                                        <ValueEmphasis>{numberWithCommas(this.props.bonusValuePoints)}</ValueEmphasis>
                                        <PanelTextSmall>Points</PanelTextSmall>
                                    </BonusGrid>

                                    <BonusGrid>
                                        <PanelTextSmall>Equal to</PanelTextSmall>
                                        <ValueEmphasis>${numberWithCommas(this.props.bonusValue)}</ValueEmphasis>
                                    </BonusGrid>
                                    <span></span> 

                                </SubPanel>

                                <SubPanel>
                                    <SubPanelTitle>Required Spending</SubPanelTitle>

                                    <RequiredSpendingGrid>
                                        <ValueEmphasis>${this.props.requiredSpend}</ValueEmphasis>
                                        <PanelTextSmall>In first {this.props.requiredSpendWindow/30} Months</PanelTextSmall>
                                    </RequiredSpendingGrid>
                                </SubPanel>
                            </CardGridFirstRow>

                        <CardGridSecondRow>
                            <SubPanel>
                                <SubPanelTitle>Annual Fee</SubPanelTitle>
                                <AnnualFeeGrid>
                                    <ValueEmphasis>${this.props.annualFeeFirstYear}</ValueEmphasis> 
                                    <ValueEmphasis>${this.props.annualFeeAfterFirstYear}</ValueEmphasis> 
                                    <ValueEmphasis>${this.props.adjustedAnnualFee}</ValueEmphasis> 
    
                                    <PanelTextSmall>first year</PanelTextSmall> 
                                    <PanelTextSmall>after</PanelTextSmall> 
                                    <PanelTextSmall>Adjusted</PanelTextSmall> 
                                </AnnualFeeGrid>
    
                            </SubPanel>
    
                            <SubPanel>
                                <SubPanelTitle>Cash Back</SubPanelTitle>
                                <CashBackGrid>
                                    <ValueEmphasis>{this.props.cashBack}%</ValueEmphasis> 
                                    <PanelTextSmall>Everything</PanelTextSmall>
                                </CashBackGrid> 
                            </SubPanel>
                        </CardGridSecondRow>

                        <SubPanel>
                            <SubPanelTitle>Perks</SubPanelTitle>

                            <InfoItem>
                                <ReactMarkdown source={this.props.cardDescription} />
                            </InfoItem>

                        </SubPanel>

                        


                    </LayeredBackground>
    
                        <CardDialogBottomNav>
                            <ApplyButton variant="extended" cardColor = {this.props.cardColor} >
                                Learn More and Apply
                            </ApplyButton>
                        </CardDialogBottomNav>

                </CardDialogInner>
                
                <CardDialogBottomNav>
                    {/* <IconButtonClose color="inherit" onClick={this.handleClose} aria-label="Close">
                        <CloseIcon />
                    </IconButtonClose> */}

                    {/* <Button variant="contained" color="primary" >
                        Learn More and Apply
                    </Button> */}

                    {/* <IconButtonClose color="inherit" onClick={this.handleClose} aria-label="Close">
                        <FavoriteBorderIcon />
                    </IconButtonClose> */}
                </CardDialogBottomNav>
                

            </CardDialogContainer>

        )
    }
}

CardDialog.propTypes = {
    onClose: PropTypes.func,
  };

export default withMobileDialog()(CardDialog) 
