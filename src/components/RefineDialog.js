import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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



import styled, {ThemeProvider} from 'styled-components'
import theme from '../layouts/theme'
import media from '../layouts/media'

const RefineItem = styled.div`
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
`

const DialogInner = styled.div`
    margin: 10px;
    /* max-width: 50vw; */
`

function Transition(props) {
    return <Slide direction="up" {...props} />;
  }

const DialogContainer = styled(Dialog)`
    /* max-width: 50vw; */
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
                    <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                        <CloseIcon />
                    </IconButton>
                    <RefineItem>
                        No Foreign Transaction Fees <SwitchWrapper color="primary" onToggle={this.handleToggle} />
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
