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
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Slide from '@material-ui/core/Slide';
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
    `

const CardDialogInner = styled.div`
    /* padding: 10px; */
    /* margin: 0 0 70px 0; */
    height: 100%;
    background-color: ${theme.mediumGreyBackground};


`

const CardDialogUpper = styled.div`
    max-height: 15vw;
    display: grid;
    grid-template-columns: 2fr 2fr;
    grid-template-rows: 100px;
    background-color: ${theme.white};
    padding: 0 10px;

`

const LogoContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px 50px;
`

const IssuerLogo = styled.img`
    max-width: 75%;
    max-height:50px;
`

const LayeredBackground = styled.div`
    background-color: ${theme.mediumGreyBackground};
    top: 100px;
    z-index: 200;
    padding: 50px 0 0 0;
`

const CardImage = styled.img`
    /* width: 40vw; */
    /* margin: 10px 20px; */
    /* max-height: 100px; */
    width: 40vw;
    max-width: 300px;
    margin: 10px 10px 10px 0;
    display: block;
    z-index: 100;
    justify-self: flex-end;
`

const IconButtonClose = styled(IconButton)`

`

const DialogHeader = styled.div`
    display: grid;
    justify-items: flex-end;
    background-color: ${theme.white};
`

const CardDialogBottomNav = styled.div`
    position: absolute;
    width: 100%;
    bottom: 10px;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    /* margin: 0 0 10px 0; */
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
    margin: 15px 0;
    color: ${theme.trueBlack};
`

const NetWorkIcon = styled.img`
    width: 50px;
    margin: 10px 0;
`


const SubPanel = styled.div`
    background-color: ${theme.white};
    box-shadow: ${theme.panelShadow};
    border-radius: ${theme.panelRadius};
    padding: 10px;
    margin: 10px;
`

const SubPanelTitle = styled.div`
    font-size: 0.8em;
    text-transform: uppercase;
    text-align: left;
    margin: 5px 0px 10px 5px;
    color: ${theme.black};
`

const CardType = styled.div`
    font-size: 0.8em;
    text-transform: uppercase;
    text-align: center;
    padding: 8px 10px;
    border-radius: 30px;
    margin: 5px 5px;
    color: ${theme.white};
    background-color: ${theme.primary};
    display: inline;
    box-shadow: ${theme.panelShadow};

`

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
        console.log(networkLogo)

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
                        <CardImage src={withPrefix(`/img/${this.props.imgName}.png`)} />

                        
                        <LogoContainer>

                            <IssuerLogo src={withPrefix(`/img/issuers/${issuerLogo}.png`)} />


                            {/* <NetWorkIcon src={`Visa`} />  */}



                            {this.props.network == 'VISA' && <NetWorkIcon src={Visa} /> }
                            {this.props.network === 'AMEX' && <NetWorkIcon src={Amex} /> }
                            {this.props.network === 'MasterCard' && <NetWorkIcon src={Mastercard} /> }
                            {this.props.network === 'Discover' && <NetWorkIcon src={Discover} /> }

                        </LogoContainer>
                    </CardDialogUpper>

                    <LayeredBackground>
                            <Title>{this.props.cardName}</Title>

                            <CardType>{this.props.cardType}</CardType>

                        <SubPanel>
                            <SubPanelTitle>Bonus Value</SubPanelTitle>
                            <span>${this.props.bonusValue}</span> 

                        </SubPanel>

                        <SubPanel>
                            <SubPanelTitle>Required Spending</SubPanelTitle>
                                Spend ${this.props.requiredSpend} over {this.props.requiredSpendWindow} days

                            <SubPanelTitle>Annual Fee</SubPanelTitle>
                            <span>${this.props.annualFee}</span> first year
                            <span>${this.props.annualFee}</span> after
                            
                        </SubPanel>

                        <SubPanel>
                            <SubPanelTitle>Perks</SubPanelTitle>

                            <InfoItem>
                                <ReactMarkdown source={this.props.cardDescription} />
                            </InfoItem>

                        </SubPanel>

                        



                    </LayeredBackground>
    
                    <Button variant="contained" color="primary" >
                        Learn More and Apply
                    </Button>

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
