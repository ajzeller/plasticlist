import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Slider, { Range } from 'rc-slider'

import theme from '../layouts/theme'
import media from '../layouts/media'
import 'rc-slider/assets/index.css'
// import { Button, Switch, Icon, Slider } from 'antd'


const FilterContainer = styled.div`
    margin: 10px;
    border: 1px solid ${theme.greyBorderLight};
    height: 200px;
    border-radius: ${theme.panelRadius};
`

class FilterWrapper extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <FilterContainer>


            </FilterContainer>
        )
    }
}

export default FilterWrapper