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
        sortedData: this.props.data,
        filteredData: this.props.data,
        sortBy: 'plasticScoreNormalized',
        bonusBounds: [ -1 , 2000 ],
        feeBounds: [ -1 , 1000],
        spendingBounds: [ -1 , 10000 ],
        cashBackBounds: [ -1 , 50 ],
        foreignTxFeeWaived: false,
        showAdjustedAnnualFee: false,
        Visa: true,
        Mastercard: true,
        Amex: true,
        Discover: true, 
        personalCard: true,
        businessCard: true,
        cardIssuer: {
          'Chase': true,
          'AMEX': true,
          'Discover': true,
          'CapitalOne': true,
          'Barclays': true,
          'Wells Fargo': true,
          'Citi': true,
          'Bank of America': true,
        },
        rewardsProgram: {
          'ultimaterewards': true,
          'membershiprewards': true,
          'thankyoupoints': true,
          'mileageplan': true,
          'aadvantage': true,
          'mileageplus': true,
        }
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

  onBonusChange = (value) => {
    // console.log(value);
    this.setState({
      bonusBounds: value
    }, () => {
      this.filterCards()
    })
  }

  onFeeChange = (value) => {
    // console.log(value);
    this.setState({
        feeBounds: value
    }, () => {
      this.filterCards()
    })
} 

onSpendingChange = (value) => {
  // console.log(value);
  this.setState({
      spendingBounds: value
  }, () => {
    this.filterCards()
  })
}  

onCashBackChange = (value) => {
  // console.log(value);
  this.setState({
      cashBackBounds: value
  }, () => {
    this.filterCards()
  })
}  

onRewardsChange = (value) => {
  let programs = Object.values(value)
  // console.log(programs)

  this.setState({
    rewardsProgram: {
      ...this.state.rewardsProgram,
      'ultimaterewards': 'updated'
    }
  })

  Object.keys(this.state.rewardsProgram).forEach(key => {
    this.setState({
      rewardsProgram: {
        ...this.state.rewardsProgram,
        'ultimaterewards': key
      }
    },
    console.log(key)
    
    )

      

  //   for (let id of value) {

  //     console.log(id.value)

  //     if (id.value == key) {
  //       console.log(id.value + ' match')
  //     //   this.setState({
  //     //     rewardsProgram: {
  //     //       [id.value]: true,
  //     //     }
  //     //   },
  //     //   console.log(this.state.rewardsProgram)

  //     // )

  //     } else {
  //       console.log(id.value + ' mismatch')
  //   }
  // }

  console.log(this.state.rewardsProgram)

    
    // const id = value[key].value
    // this.setState({
    //   rewardsProgram: {
    //     // ...this.state.rewardsProgram,
    //     [id]: true
    //   }
    // },
    // )
    // console.log(key)
    // console.log(value[key].value)
  })
  // console.log(value)
}

handleSwitchToggle = (id) => {
  this.setState( {
    [id]: !this.state[id],
  }, () => { 
    // console.log(` toggle value: ${this.state[id]} `)
    this.filterCards()
  })

  console.log(id)

}

handleNetworkToggle = (id) => {
  this.setState( {
    [id]: !this.state[id],
  }, () => { 
    // console.log(` toggle value: ${this.state[id]} `)
    this.filterCards()
  })
  console.log(id)
}

onIssuerChange = (id) => {

}

onReset() {
    
}
 
  sortBy(key) {
    let arrayCopy = this.state.filteredData;
    // console.log(key)
    arrayCopy.sort(this.compareBy(key));
    this.setState({filteredData: arrayCopy}
      );
  }

  handleSort = event => {
    this.setState({ [event.target.name]: event.target.value }, 
    () => { this.sortBy(this.state.sortBy) }
    )
  }

  

  filterCards() {

    const filterConditions = 
      {
        bonusBounds: this.state.bonusBounds,
        feeBounds: this.state.feeBounds,
        spendingBounds: this.state.spendingBounds,
        cashBackBounds: this.state.cashBackBounds,
        foreignTxFeeWaived: this.state.foreignTxFeeWaived,
        networks: {
          VISA: this.state.Visa,
          MasterCard: this.state.Mastercard,
          AMEX: this.state.Amex,
          Discover: this.state.Discover,        
        },
        cardTypes: {
          Personal: this.state.personalCard,
          Business: this.state.businessCard,
        }
      }

    let arrayCopy = this.state.data.filter(function(obj){
      for ( var key in filterConditions) {
        switch (key) {
          case "bonusBounds":
            if(obj.node.data.bonusValue < filterConditions.bonusBounds[0] ||
              obj.node.data.bonusValue > filterConditions.bonusBounds[1]) {
              return false
            }          
          break

          case "feeBounds": 
            if (obj.node.data.annualFeeAfterFirstYear < filterConditions.feeBounds[0] ||
              obj.node.data.annualFeeAfterFirstYear > filterConditions.feeBounds[1]) {
              return false
            }
          break

          case "spendingBounds":
            if (obj.node.data.requiredSpend < filterConditions.spendingBounds[0] ||
              obj.node.data.requiredSpend > filterConditions.spendingBounds[1]) {
              return false
            }
          break

          case "cashBackBounds":
            if (obj.node.data.cashBackPercent*10 < filterConditions.cashBackBounds[0] ||
              obj.node.data.cashBackPercent*10 > filterConditions.cashBackBounds[1]) {
              return false
            }
          break

          case "foreignTxFeeWaived":
          console.log(obj.node.data.cardName)
            if ( filterConditions.foreignTxFeeWaived ){
              // console.log(filterConditions.foreignTxFeeWaived)
              if (!obj.node.data.foreignTxFeeWaived) {
                return false
              }
            }

          break

          case "networks":
            for (var networkOption in filterConditions.networks) {
              if ( !filterConditions.networks[networkOption] && obj.node.data.network == networkOption ) {
                return false
              }
            }

          break

          case "cardTypes":
            for (var cardType in filterConditions.cardTypes) {
              if ( !filterConditions.cardTypes[cardType] && obj.node.data.cardType == cardType ) {
                return false
              }
            }
          break

        }
        // if condition not met return false
    }

      return true

    });
    this.setState(
      {filteredData: arrayCopy},

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
            <RefineMenuWrapper 
              sortBy={this.state.sortBy} 
              handleChange={this.handleSort} 
              onBonusChange = {this.onBonusChange}
              onFeeChange = {this.onFeeChange}
              onSpendingChange = {this.onSpendingChange}
              onCashBackChange = {this.onCashBackChange}
              handleNetworkToggle = {this.handleNetworkToggle}
              handleSwitchToggle = {this.handleSwitchToggle}
              onRewardsChange = {this.onRewardsChange}

              bonusBounds = {this.state.bonusBounds}
              feeBounds = {this.state.feeBounds}

              spendingBounds = {this.state.spendingBounds}
              cashBackBounds = {this.state.cashBackBounds}
              foreignTxFeeWaived = {this.state.foreignTxFeeWaived}
              showAdjustedAnnualFee = {this.state.showAdjustedAnnualFee}
              Visa = {this.state.Visa}
              Mastercard = {this.state.Mastercard}
              Amex = {this.state.Amex}
              Discover = {this.state.Discover}
              personalCard = {this.state.personalCard}
              businessCard = {this.state.businessCard}

              />

            <GridWrapper 
              data={this.state.filteredData} 
              sortBy={this.state.sortBy} 
              showAdjustedAnnualFee = {this.state.showAdjustedAnnualFee}              
              ></GridWrapper>
            {this.props.children}
          </MainContainer>
         </ThemeProvider>
    )
  }
}

export default DataWrapper