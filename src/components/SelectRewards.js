import React from 'react';
import styled, {ThemeProvider} from 'styled-components'
import theme from '../layouts/theme'
import media from '../layouts/media'

import Select from 'react-select';

import { RewardsOptions } from '../data/Options'

const SelectRewardsContainer = styled.div`
    margin: 10px 0 0 0;
`

 const SelectRewards = () => (
     
    <SelectRewardsContainer>
        <Select
        //   defaultValue={[IssuerOptions[0], IssuerOptions[1]]}
          isMulti
          name="colors"
          options={RewardsOptions}
          className="basic-multi-select"
          classNamePrefix="select"
        />
    </SelectRewardsContainer>
  );

  export default SelectRewards