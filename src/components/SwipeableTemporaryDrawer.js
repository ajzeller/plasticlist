import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby'
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import Img from 'gatsby-image'
import theme from '../layouts/theme'

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import CardIcon from '@material-ui/icons/CreditCard'
import InfoIcon from '@material-ui/icons/Info'
import FormatLineSpacing from '@material-ui/icons/FormatLineSpacing'
import LogoBlue from '../images/plastic-list-logo-blue.svg'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard'


const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

const IconButtonWrapper = styled.div`
  /* width: 25px; */
  text-transform: uppercase;
  color: ${theme.black};
  font-weight: 600;
  margin-left: 15px;
  font-size: 16px;
  background: none;
  padding: 0px;
  border: none;
  /* background-color: ${theme.greyBorderDark}; */
`

const LogoImage = styled.img`
    max-width: 100px;
`

const ListLink = styled(Link)`
  text-decoration: none;
`

class SwipeableTemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
            
            <ListItem><LogoImage src={LogoBlue} /></ListItem>
            
            <ListLink to='/'>
              <ListItem button key="cards">
                  <ListItemIcon><FormatLineSpacing /></ListItemIcon>
                    <ListItemText primary="Card List" />
              </ListItem>
            </ListLink>
            
            <ListLink to='/plasticmatch'>
              <ListItem button key="plasticmatch">
                <ListItemIcon><CardIcon /></ListItemIcon>
              <ListItemText primary="PlasticMatch" />
              </ListItem>
              </ListLink>

            <ListItem button key="rewards">
              <ListItemIcon><CardGiftcardIcon /></ListItemIcon>
            <ListItemText primary="Rewards Programs" />
            </ListItem>

            <ListItem button key="about">
              <ListItemIcon><InfoIcon /></ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>

          {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <HomeIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
        </List>
        {/* <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </div>
    );

    return (
      <div>
        <IconButtonWrapper>
              <IconButton onClick={this.toggleDrawer('right', true)} color="inherit" aria-label="Menu">
                    <MenuIcon  />
              </IconButton>
        </IconButtonWrapper>

        <SwipeableDrawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer('right', false)}
          onOpen={this.toggleDrawer('right', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwipeableTemporaryDrawer);
