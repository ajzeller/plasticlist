import React from 'react';
import styled, {ThemeProvider} from 'styled-components'
import theme from '../layouts/theme'
import media from '../layouts/media'

import Select from 'react-select';

import { IssuerOptions } from '../data/Options'

const SelectIssuerContainer = styled.div`
    margin: 10px 0 0 0;
`

 const SelectIssuer = () => (
     
    <SelectIssuerContainer>
        <Select
        //   defaultValue={[IssuerOptions[0], IssuerOptions[1]]}
          isMulti
          name="colors"
          options={IssuerOptions}
          className="basic-multi-select"
          classNamePrefix="select"
        />
    </SelectIssuerContainer>
  );

  export default SelectIssuer