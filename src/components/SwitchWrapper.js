import React from 'react';
import Switch from '@material-ui/core/Switch';

class SwitchWrapper extends React.Component {
  state = {
    checked: false,
  };

  handleChange = name => event => {
    this.setState(
        { checked: !this.state.checked },
        () => this.props.onToggle(this.state.checked)
        )
    
    

    // pass Switch state up to parent by calling onToggle
    // this.props.onToggle(this.state.checked)

  };

  render() {
    return (
        <Switch 
          color={this.props.color}
          checked={this.state.checked}
          onChange={this.handleChange('checked')}
          value="checked"
        />
    );
  }
}

export default SwitchWrapper;