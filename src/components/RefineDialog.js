import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image'
import { withStyles } from '@material-ui/core/styles';
import { Range } from 'rc-slider'
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import SwitchWrapper from '../components/SwitchWrapper';
import renderEmpty from 'antd/lib/config-provider/renderEmpty';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import VisaIcon from '../images/visa.svg'
import MastercardIcon from '../images/mastercard.svg'
import AmexIcon from '../images/amex.svg'
import DiscoverIcon from '../images/discover.svg'
import ToggleNetwork from '../components/ToggleNetwork';
import SelectIssuer from '../components/SelectIssuer';
import SelectRewards from '../components/SelectRewards';
import LogoBlue from '../images/plastic-list-logo-blue.svg'



import styled, {ThemeProvider} from 'styled-components'
import theme from '../layouts/theme'
import media from '../layouts/media'

import 'rc-slider/assets/index.css'
import { Select } from 'antd';

const RefineItem = styled.div`
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    margin: 0px 0 30px 0;
    padding: 0 0 0px 0;
`

const RefineItemSwitch = styled(RefineItem)`
    margin: 0px 0 10px 0;

`

const DialogInner = styled.div`
    padding: 10px;
    /* margin: 0px auto; */
`

const SliderContainer = styled.div`
    width: 100%;
    margin: 10px 0px 40px 0px;
    padding: 0 25px;
`

const CardBrandIcon = styled.img`
    width: 50px;
    margin: 0px;
    box-shadow: ${theme.panelShadow};
`

const NetworkIconsContainer = styled.div`
    display: grid;
    grid-gap: 0px;
    margin: 10px;
    justify-items: center;
    grid-template-columns: repeat(4, 1fr);
`

const DialogHeader = styled.div`
    display: grid;
    grid-template-columns: 9fr 1fr;
    justify-items: flex-start;
    align-items: center;
    margin: 0 0 10px 0;
`

function Transition(props) {
    return <Slide direction="up" {...props} />;
  }

const DialogContainer = styled(Dialog)`
    /* max-width: 50vw; */
`

const IconButtonClose = styled(IconButton)`
    text-align: right;
`

const LogoImage = styled.img`
    height: 35px;
    margin: 0;
`

class RefineDialog extends React.Component {
    constructor(props) {
        super(props)

    }

    handleToggle = value => {
        // this.props.onSwitchClose(value)
        console.log(value)

      }

    handleClose = () => {
        this.props.onClose();
    };

    render() {
            const { onClose, ...other } = this.props;

        return (

            <DialogContainer
                onClose={this.handleClose} 
                aria-labelledby="simple-dialog-title" 
                TransitionComponent={Transition}
                fullScreen
                maxWidth="sm"
                {...other} >
                <DialogInner>
                    <DialogHeader>
                        <LogoImage src={LogoBlue} />
                        <IconButtonClose color="inherit" onClick={this.handleClose} aria-label="Close">
                            <ExpandMoreIcon />
                        </IconButtonClose>
                    </DialogHeader>

                    <RefineItem>
                        Network

                        <ToggleNetwork />

                        {/* <NetworkIconsContainer>
                            <CardBrandIcon src={VisaIcon} />
                            <CardBrandIcon src={MastercardIcon} />
                            <CardBrandIcon src={AmexIcon} />
                            <CardBrandIcon src={DiscoverIcon} />
                        </NetworkIconsContainer> */}

                    </RefineItem>

                    <RefineItem>
                        Card Issuer
                        <SelectIssuer />
                    </RefineItem>

                    <RefineItem>
                        Bonus Value
                        <SliderContainer>
                            <Range 
                                min={0} 
                                max={2000} 
                                defaultValue={[0, 2000]} 
                                marks={{ 0:0, 500: '$500', 1000: "$1k", 1500: '$1.5k', 2000: '$2k' }} 
                                tipFormatter={value => `${value}%`} 
                                // step={null} 
                                trackStyle={[ { backgroundColor: theme.primary }]}
                                railStyle={[ { backgroundColor: theme.primary }]}
                                // handleStyle={[{ backgroundColor: 'yellow' }, { backgroundColor: 'gray' }]}


                            />
                        </SliderContainer>

                    </RefineItem>

                    <RefineItem>
                        Annual Fee
                        <SliderContainer>
                            <Range 
                                min={0} 
                                max={1000} 
                                defaultValue={[0, 1000]} 
                                marks={{ 0:0, 250: '$250', 500: '$500', 750: '$750', 1000: '$1k' }} 
                                tipFormatter={value => `${value}%`} 
                                // step={null} 
                                trackStyle={[ { backgroundColor: theme.primary }]}
                                railStyle={[ { backgroundColor: theme.primary }]}
                                // handleStyle={[{ backgroundColor: 'yellow' }, { backgroundColor: 'gray' }]}


                            />
                        </SliderContainer>

                    </RefineItem>

                    <RefineItem>
                        Minimum Required Spending
                        <SliderContainer>
                            <Range 
                                min={0} 
                                max={10000} 
                                defaultValue={[0, 10000]} 
                                marks={{ 0:0 , 2500: "2.5k", 5000: "5k", 7500: "7.5k", 10000: "10k" }} 
                                tipFormatter={value => `${value}%`} 
                                // step={null} 
                                trackStyle={[ { backgroundColor: theme.primary }]}
                                railStyle={[ { backgroundColor: theme.primary }]}
                                // handleStyle={[{ backgroundColor: 'yellow' }, { backgroundColor: 'gray' }]}


                            />
                        </SliderContainer>

                    </RefineItem>

                    <RefineItem>
                        Cash Back
                        <SliderContainer>
                            <Range 
                                min={0} 
                                max={10} 
                                defaultValue={[0, 10]} 
                                marks={{ 0:0 , 2: "2%", 4: "4%", 6: "6%", 8: "8%", 10: '10%' }} 
                                tipFormatter={value => `${value}%`} 
                                // step={null} 
                                trackStyle={[ { backgroundColor: theme.primary }]}
                                railStyle={[ { backgroundColor: theme.primary }]}
                                // handleStyle={[{ backgroundColor: 'yellow' }, { backgroundColor: 'gray' }]}


                            />
                        </SliderContainer>

                    </RefineItem>
                    
                    <RefineItemSwitch>
                        No Foreign Transaction Fees <SwitchWrapper color="primary" onToggle={this.handleToggle} />
                    </RefineItemSwitch>

                    <RefineItem>
                        Rewards Program
                        <SelectRewards />
                    </RefineItem>
                </DialogInner>
            </DialogContainer>
        )
    }

}

RefineDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    onClose: PropTypes.func,
    // onSwitchClose: PropTypes.func,
  };

export default RefineDialog