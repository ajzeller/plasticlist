import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import theme from '../layouts/theme'

const FooterContainer = styled.div`
    padding: 10px 0;
    background-color: ${theme.lightGreyBackground};
`

const FooterInnerContainer = styled.div`
    max-width: 1000px;
    margin: auto;
`  


class Footer extends React.Component {
    constructor() {
        super()

    }

    render() {
        return (
            <FooterContainer>
                <FooterInnerContainer>Made by <a href="https://zeller.io">zeller.io</a></FooterInnerContainer>
            </FooterContainer>
        )
    }
}

        

export default Footer