import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import theme from '../layouts/theme'
import media from '../layouts/media'
import RefineDialog from '../components/RefineDialog';
import TuneIcon from '@material-ui/icons/Tune'
import SortIcon from '@material-ui/icons/Sort'

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
  });

const RefineMenuContainer = styled.div`
    background-color: ${theme.greyPanelBackground};
    border: 1px solid ${theme.greyBorderLight};
    border-radius: 0rem;
    margin: 0px 0px;
    padding: 0px 0px;
    width: 100vw;
`

const RefineMenuContainerInner = styled.div`
    display: grid;
    justify-items: right;
    align-items: center;
    grid-template-columns: 100px 1fr;
    max-width: 450px;
    margin: auto;

    ${media.giant`max-width: 400px;`}
    ${media.desktop`max-width: 400px;`}
    ${media.tablet`max-width: 100%;`}
    ${media.phone`max-width: 100%;`}

`

const RefineButton = styled(Button)`

`

const RefineIcon = styled(TuneIcon)`
    margin: 0px 5px 0px 0px;
`

const dropdownStyle = {
    margin: "0px 0px 0px 10px",
    height: "50px"
}

const FilledInputStyled = styled(FilledInput)`
    && {
        border-radius: 0rem;
    }
    /* border-top-left-radius: 0px; */
    
    
`

class RefineMenuWrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            labelWidth: 0,
        }
    }

    handleSettingsClick() {
        this.setState({
          open: !this.state.open,
        })
      }
    
      handleClose = value => {
        this.setState({ open: false });
      };

      handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };

    render() {

        const { classes } = this.props;

        return (
            <RefineMenuContainer>
                <RefineMenuContainerInner>
                    <Button onClick={() => this.handleSettingsClick()}>
                        <RefineIcon />
                            Filter
                        </Button>
    
                    <FormControl variant="filled" className={classes.formControl} style={dropdownStyle} >
                        <InputLabel
                            ref={ref => {
                            this.InputLabelRef = ref;
                            }}
                            htmlFor="filled-age-simple"
                        >
                            {/* <SortIcon /> */}
                            Sort By
                        </InputLabel>
                        <Select
                            value={this.props.sortBy}
                            // value={this.state.sortBy}
                            onChange={this.props.handleChange}
                            input={
                            <FilledInputStyled
                                disableUnderline={true} 
                                labelWidth={this.state.labelWidth}
                                name="sortBy"
                                id="filled-age-simple"
                            />
                            }
                        >
                            {/* <MenuItem value="">
                            <em>None</em>
                            </MenuItem> */}
                            <MenuItem value={"plasticScoreNormalized"}>PlasticScore</MenuItem>
                            <MenuItem value={"bonusValue"}>Bonus Value</MenuItem>
                            <MenuItem value={"annualFeeAfterFirstYear"}>Lowest Annual Fee</MenuItem>
                            <MenuItem value={"requiredSpend"}>Lowest Required Spending</MenuItem>
                        </Select>
                    </FormControl>
    
                    <RefineDialog 
                        open={this.state.open}
                        onClose={this.handleClose}
                        onBonusChange = {this.props.onBonusChange}
                        onFeeChange = {this.props.onFeeChange}
                        onSpendingChange = {this.props.onSpendingChange}
                        onCashBackChange = {this.props.onCashBackChange}
                        handleSwitchToggle = {this.props.handleSwitchToggle}
                        handleNetworkToggle = {this.props.handleNetworkToggle}

                        bonusBounds = {this.props.bonusBounds}
                        feeBounds = {this.props.feeBounds}
                        spendingBounds = {this.props.spendingBounds}
                        cashBackBounds = {this.props.cashBackBounds}
                        foreignTxFeeWaived = {this.props.foreignTxFeeWaived}
                        showAdjustedAnnualFee = {this.props.showAdjustedAnnualFee}
                        Visa = {this.props.Visa}
                        Mastercard = {this.props.Mastercard}
                        Amex = {this.props.Amex}
                        Discover = {this.props.Discover}


                    />
                </RefineMenuContainerInner>
            </RefineMenuContainer>
        )
    }
}

RefineMenuWrapper.propTypes = {
    classes: PropTypes.object.isRequired,
  };

// export default RefineMenuWrapper
export default withStyles(styles)(RefineMenuWrapper);
