import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image'
import { withStyles } from '@material-ui/core/styles';
// import Slider , { Range } from 'rc-slider'
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
import InfoIcon from '@material-ui/icons/Info';
import VisaIcon from '../images/visa.svg'
import MastercardIcon from '../images/mastercard.svg'
import AmexIcon from '../images/amex.svg'
import DiscoverIcon from '../images/discover.svg'
import ToggleNetwork from '../components/ToggleNetwork';
import SelectIssuer from '../components/SelectIssuer';
import SelectRewards from '../components/SelectRewards';
import LogoBlue from '../images/plastic-list-logo-blue.svg'
import AdjustedAnnualFeeInfo from '../components/AdjustedAnnualFeeInfo'
import withMobileDialog from '@material-ui/core/withMobileDialog';

import styled, {ThemeProvider} from 'styled-components'
import theme from '../layouts/theme'
import media from '../layouts/media'
import MuiMultipleSelect from '../components/MuiMultipleSelect';

import 'rc-slider/assets/index.css'
import 'rc-tooltip/assets/bootstrap.css';
import '../assets/sliderStyles.css'
import Slider from 'rc-slider'
// import Tooltip from 'rc-tooltip';
import Tooltip from '@material-ui/core/Tooltip';

import Select from 'react-select';

import { IssuerOptions } from '../data/Options'

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

// const handle = (props) => {
//     const { value, dragging, index, ...restProps } = props;
//     return (
//       <Tooltip
//         prefixCls="rc-slider-tooltip"
//         overlay={value}
//         visible={dragging}
//         placement="top"
//         key={index}
//       >
//         <Handle value={value} {...restProps} />
//       </Tooltip>
//     );
//   };

const RefineItem = styled.div`
    
    margin: 0px 0 30px 0;
    padding: 0 0 0px 0;
`

const RefineItemLabel = styled.span`
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
`

const RefineItemSwitch = styled(RefineItem)`
    margin: 0px 0 10px 0;

`

const DialogInner = styled.div`
    padding: 10px;
    overflow-x: hidden;
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

const SelectIssuerContainer = styled.div`
    margin: 10px 0 0 0;
`

class RefineDialog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            spendingBounds: [ 0 , 10000 ],
            cashBackBounds: [ 0 , 10 ],
        }
 
    }

 

    handleClose = () => {
        this.props.onClose();
    };

    handleSliderChange(state) {
        console.log(state)
    }

    // onBonusChange = (value) => {
    //     console.log(value);
    //     this.setState({
    //       bonusBounds: value
    //     });
    //   } 

    

    render() {
            const { onClose, ...other } = this.props;
            const { fullScreen } = this.props;
            // const mobile = window.innerWidth < 500
            // console.log(mobile)


        return (

            <DialogContainer
                onClose={this.handleClose} 
                aria-labelledby="RefineDialog" 
                TransitionComponent={Transition}

                // { mobile && fullScreen }
                fullScreen={fullScreen}
                // contentStyle={{width: "100%", maxWidth: "none"}}
                // maxWidth="sm"
                {...other} >
                <DialogInner>
                    
                    <DialogHeader>
                        <LogoImage src={LogoBlue} />
                        <IconButtonClose color="inherit" onClick={this.handleClose} aria-label="Close">
                            <ExpandMoreIcon />
                        </IconButtonClose>
                    </DialogHeader>

                    <RefineItem>
                        <RefineItemLabel>Network</RefineItemLabel>

                        <ToggleNetwork 
                            Visa = {this.props.Visa}
                            Mastercard = {this.props.Mastercard}
                            Amex = {this.props.Amex}
                            Discover = {this.props.Discover} 
                            handleNetworkToggle = {this.props.handleNetworkToggle}

                        />

                        {/* <NetworkIconsContainer>
                            <CardBrandIcon src={VisaIcon} />
                            <CardBrandIcon src={MastercardIcon} />
                            <CardBrandIcon src={AmexIcon} />
                            <CardBrandIcon src={DiscoverIcon} />
                        </NetworkIconsContainer> */}

                    </RefineItem>

                    <RefineItemSwitch>
                        <RefineItemLabel>Personal Card</RefineItemLabel><SwitchWrapper checked={this.props.personalCard} id="personal" color="primary" onToggle={() => {this.props.handleSwitchToggle("personalCard")}} />
                        <RefineItemLabel>Business Card</RefineItemLabel><SwitchWrapper checked={this.props.businessCard} id="business" color="primary" onToggle={() => {this.props.handleSwitchToggle("businessCard")}} />
                    </RefineItemSwitch>

                    

                    <RefineItem>
                        <RefineItemLabel>Bonus Value</RefineItemLabel>
                        {/* <SliderContainer >
                            <Range 
                                min={0} 
                                max={2000} 
                                defaultValue={this.props.bonusBounds} 
                                marks={{ 0:0, 500: '$500', 1000: "$1k", 1500: '$1.5k', 2000: '$2k' }} 
                                tipFormatter={value => `${value}`} 
                                // step={null}
                                trackStyle={[ { backgroundColor: theme.primary } , { borderColor: theme.primary } ]}
                                // activeDotStyle={[{ borderColor: theme.primary } , { borderColor: theme.primary }]}
                                railStyle={[ { backgroundColor: theme.primary } ]}
                                handleStyle={[{ borderColor: theme.primary, backgroundColor: theme.primary }, {borderColor: theme.primary, backgroundColor: theme.primary }]}
                                // handle={handle}
                                onChange ={ this.props.onBonusChange}
                                // onChange={() => { this.handleSliderChange(this.state.bounds[1]) } }
                            />
                        </SliderContainer> */}

                    </RefineItem>

                    <RefineItem>
                        <RefineItemLabel>Annual Fee</RefineItemLabel>
                        {/* <SliderContainer>
                            <Range 
                                min={0} 
                                max={1000} 
                                defaultValue={this.props.feeBounds} 
                                marks={{ 0:0, 250: '$250', 500: '$500', 750: '$750', 1000: '$1k' }} 
                                // tipFormatter={value => `${value}%`} 
                                // step={null} 
                                trackStyle={[ { backgroundColor: theme.primary }]}
                                railStyle={[{ backgroundColor: theme.primary }]}
                                handleStyle={[{ borderColor: theme.primary, backgroundColor: theme.primary }, {borderColor: theme.primary, backgroundColor: theme.primary }]}
                                onChange ={ this.props.onFeeChange}
                                // handleStyle={[{ backgroundColor: 'yellow' }, { backgroundColor: 'gray' }]}


                            />
                        </SliderContainer> */}

                    </RefineItem>

                    <RefineItem>
                        <RefineItemLabel>Minimum Required Spending</RefineItemLabel>
                        {/* <SliderContainer>
                            <Range 
                                min={0} 
                                max={10000} 
                                defaultValue={this.props.spendingBounds} 
                                marks={{ 0:0 , 2500: "2.5k", 5000: "5k", 7500: "7.5k", 10000: "10k" }} 
                                tipFormatter={value => `${value}%`} 
                                // step={null} 
                                trackStyle={[ { backgroundColor: theme.primary }]}
                                railStyle={[ { backgroundColor: theme.primary }]}
                                handleStyle={[{ borderColor: theme.primary, backgroundColor: theme.primary }, {borderColor: theme.primary, backgroundColor: theme.primary }]}
                                onChange ={ this.props.onSpendingChange}
                            />
                        </SliderContainer> */}

                    </RefineItem>

                    <RefineItem>
                        <RefineItemLabel>Cash Back</RefineItemLabel>
                        {/* <SliderContainer>
                            <Range 
                                min={0} 
                                max={50} 
                                defaultValue={this.props.cashBackBounds} 
                                marks={{ 0:0 , 10: "1%", 20: "2%", 30: "3%", 40: "4%", 50: '5%' }} 
                                tipFormatter={value => `${value}%`} 
                                // step={null} 
                                trackStyle={[ { backgroundColor: theme.primary }]}
                                railStyle={[ { backgroundColor: theme.primary }]}
                                handleStyle={[{ borderColor: theme.primary, backgroundColor: theme.primary }, {borderColor: theme.primary, backgroundColor: theme.primary }]}
                                onChange ={ this.props.onCashBackChange}
                            />
                        </SliderContainer> */}

                    </RefineItem>
                    
                    <RefineItemSwitch>
                        <RefineItemLabel>No Foreign TX Fees</RefineItemLabel> <SwitchWrapper checked={this.props.foreignTxFeeWaived} id="foreignTxFeeWaived" color="primary" onToggle={() => {this.props.handleSwitchToggle("foreignTxFeeWaived")}} />
                    </RefineItemSwitch>

                    <RefineItemSwitch>
                        <RefineItemLabel>Show Adjusted Annual Fee</RefineItemLabel> <SwitchWrapper checked={this.props.showAdjustedAnnualFee} id="showAdjustedAnnualFee" color="primary" onToggle={() => {this.props.handleSwitchToggle("showAdjustedAnnualFee")}} />
                        {/* <Tooltip disableFocusListener title="some info">
                            <IconButton>
                                <InfoIcon />
                            </IconButton>
                        </Tooltip> */}
                        {/* <AdjustedAnnualFeeInfo /> */}
                    </RefineItemSwitch>

                    <RefineItem>
                        <RefineItemLabel>Card Issuer</RefineItemLabel>

                        

                        <SelectIssuer />
                        {/* <MuiMultipleSelect /> */}

                    </RefineItem>

                    <RefineItem>
                        <RefineItemLabel>Rewards Program</RefineItemLabel>
                        <SelectRewards onRewardsChange = {this.props.onRewardsChange} />
                    </RefineItem>
                </DialogInner>
            </DialogContainer>
        )
    }

}

RefineDialog.propTypes = {
    // classes: PropTypes.object.isRequired,
    onClose: PropTypes.func,
    // onSwitchClose: PropTypes.func,
  };

export default withMobileDialog()(RefineDialog) 
