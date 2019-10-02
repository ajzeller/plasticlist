import React from 'react';
import styled, {ThemeProvider} from 'styled-components'
import theme from '../layouts/theme'
import media from '../layouts/media'

import Select from 'react-select';

import { RewardsOptions } from '../data/Options'

const SelectRewardsContainer = styled.div`
    margin: 10px 0 0 0;
`

class SelectRewards extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <SelectRewardsContainer>
        <Select
          defaultValue={[
            RewardsOptions[0], 
            RewardsOptions[1], 
            RewardsOptions[2], 
            RewardsOptions[3], 
            RewardsOptions[4], 
            RewardsOptions[5],
          ]}
          isMulti
          name="colors"
          options={RewardsOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={ (value) => {this.props.onRewardsChange(value)} }
        />
    </SelectRewardsContainer>
    )
  }
}

export default SelectRewards