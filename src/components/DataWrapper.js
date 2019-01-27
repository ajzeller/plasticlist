import React from 'react'
import Layout from '../components/layout'
import styled, {ThemeProvider} from 'styled-components'
import theme from '../layouts/theme'
import media from '../layouts/media'


import Image from '../components/image'
import SEO from '../components/seo'
import GridWrapper from '../components/GridWrapper'
import RefineMenuWrapper from '../components/RefineMenuWrapper'


const MainContainer = styled.div`
    /* max-width: 1000px; */
    margin: auto;
`

class DataWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        data: this.props.data,
        refinedData: this.props.data,
        sortBy: 'plasticScoreNormalized'
    }
    this.compareBy.bind(this);
    this.sortBy.bind(this);
  }

  compareBy(key) {
    return function (a, b) {
      if (key == 'plasticScoreNormalized' || key == 'bonusValue')
      {
        // console.log('plasticScore or bonusValue')
        // orderes from greatest to least
        if (a.node.data[key] < b.node.data[key]) return 1;
        if (a.node.data[key] > b.node.data[key]) return -1;
        return 0;          
      } else {
        // console.log('NOT plasticScore or bonusValue')
        if (a.node.data[key] < b.node.data[key]) return -1;
        if (a.node.data[key] > b.node.data[key]) return 1;
        return 0;
    };
      }
      // orders from least to greatest
      
  }
 
  sortBy(key) {
    let arrayCopy = [...this.props.data];
    console.log(key)
    arrayCopy.sort(this.compareBy(key));
    this.setState({refinedData: arrayCopy}
      );
  }

  handleSort = event => {
    this.setState({ [event.target.name]: event.target.value }, 
    () => { this.sortBy(this.state.sortBy) }
    )
  }

  componentDidMount() {
    this.sortBy(this.state.sortBy) // sorts grid by default sorting parameter on first paint
  }

  render() {



    return (
        <ThemeProvider theme={theme}>
          <MainContainer>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <RefineMenuWrapper sortBy={this.state.sortBy} handleChange={this.handleSort} />
            
            <GridWrapper data={this.state.refinedData} sortBy={this.state.sortBy} ></GridWrapper>
            {this.props.children}
          </MainContainer>
        </ThemeProvider>
    )
  }
}

export default DataWrapper