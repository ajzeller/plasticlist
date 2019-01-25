import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import theme from '../layouts/theme'
import media from '../layouts/media'
import RefineDialog from '../components/RefineDialog';
import TuneIcon from '@material-ui/icons/Tune'

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
    max-width: 1000px;
    display: grid;
    justify-items: right;
    align-items: center;
    grid-template-columns: 100px 1fr;
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
            age: '',
            name: 'hai',
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
                        Sort By
                    </InputLabel>
                    <Select
                        value={this.state.age}
                        onChange={this.handleChange}
                        input={
                        <FilledInputStyled
                            disableUnderline={true} 
                            labelWidth={this.state.labelWidth}
                            name="age"
                            id="filled-age-simple"
                        />
                        }
                    >
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value={"PlasticRank"}>PlasticRank</MenuItem>
                        <MenuItem value={"BonusValue"}>Bonus Value</MenuItem>
                        <MenuItem value={"LowestAnnualFee"}>Lowest Annual Fee</MenuItem>
                        <MenuItem value={"LowestRequiredSpending"}>Lowest Required Spending</MenuItem>
                    </Select>
                </FormControl>

                <RefineDialog 
                    open={this.state.open}
                    onClose={this.handleClose}
                />
            </RefineMenuContainer>
        )
    }
}

RefineMenuWrapper.propTypes = {
    classes: PropTypes.object.isRequired,
  };

// export default RefineMenuWrapper
export default withStyles(styles)(RefineMenuWrapper);
