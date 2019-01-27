import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown'

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Slide from '@material-ui/core/Slide';


import styled, {ThemeProvider} from 'styled-components'
import theme from '../layouts/theme'
import media from '../layouts/media'

const CardDialogContainer = styled(Dialog)`
    /* max-width: 50vw; */
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

    render() {

        const { onClose, ...other } = this.props;
        const { fullScreen } = this.props;
            
        return (
            <CardDialogContainer
                onClose={this.handleClose} 
                aria-labelledby="CardDialog" 
                TransitionComponent={Transition}
                fullScreen={fullScreen}
                maxWidth='lg'
                {...other}>
                <h1>{this.props.cardName}</h1>

                <ReactMarkdown source={this.props.cardDescription} />
                

            </CardDialogContainer>

        )
    }
}

CardDialog.propTypes = {
    onClose: PropTypes.func,
  };

export default withMobileDialog()(CardDialog) 
