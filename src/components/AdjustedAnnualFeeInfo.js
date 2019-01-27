import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

class AdjustedAnnualFeeInfo extends React.Component {
    constructor(props) {
        super(props)
        this.setState( {
            open: false,
          })
        
        }

        handleTooltipClose = () => {
        this.setState({ open: false });
        };
    
        handleTooltipOpen = () => {
        this.setState({ open: true });
        };

    render() {
        return (
            <Tooltip disableFocusListener title="some info">
                <IconButton>
                    <InfoIcon />
                </IconButton>
            </Tooltip>

        )
    }
}

export default AdjustedAnnualFeeInfo 