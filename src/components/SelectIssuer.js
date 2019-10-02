import React from 'react';
import styled, {ThemeProvider} from 'styled-components'
import theme from '../layouts/theme'
import media from '../layouts/media'

import Select from 'react-select';

// import Select from '@material-ui/core/Select';
// import Checkbox from '@material-ui/core/Checkbox';
// import ListItemText from '@material-ui/core/ListItemText';
// import MenuItem from '@material-ui/core/MenuItem';

// import Input from '@material-ui/core/Input';
import { IssuerOptions  } from '../data/Options'

const SelectIssuerContainer = styled.div`
    margin: 10px 0 0 0;
`

// const names = IssuerOptions

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

class SelectIssuer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <SelectIssuerContainer>
          <Select
            defaultValue={
              [IssuerOptions[0], 
              IssuerOptions[1], 
              IssuerOptions[2], 
              IssuerOptions[3], 
              IssuerOptions[4], 
              IssuerOptions[5],
              IssuerOptions[6],
              IssuerOptions[7],
            ]}
            isMulti
            name="colors"
            options={IssuerOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            // onBlur={event => event.preventDefault()}
          />
      </SelectIssuerContainer>
    )
  }
}

  export default SelectIssuer