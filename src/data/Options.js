import theme from '../layouts/theme'

export const IssuerOptions = [
    {value: 'Chase', label: 'Chase', color: theme.ultimateRewards, img_name: 'chase' },
    {value: 'AMEX', label: 'American Express', color: theme.amexRewards, img_name: 'amex' },
    {value: 'Discover', label: 'Discover', color: theme.discoverRewards, img_name: 'discover' },
    {value: 'CapitalOne', label: 'Capital One', color: theme.capitalOneSparkBiz, img_name: 'capitalOne' },
    {value: 'Barclays', label: 'Barclays', color: theme.ultimateRewards, img_name: 'barclayCard' },
    {value: 'Wells Fargo', label: 'Wells Fargo', color: theme.ultimateRewards, img_name: 'wellsFargo' },
    {value: 'Citi', label: 'Citi', color: theme.ultimateRewards, img_name: 'citi' },
    {value: 'Bank of America', label: 'Bank of America', color: theme.ultimateRewards, img_name: 'bankOfAmerica' },

]

export const RewardsOptions = [
    {value: 'ultimaterewards', label: 'Chase Ultimate Rewards', color: theme.ultimateRewards},
    {value: 'membershiprewards', label: 'Amex Membership Rewards', color: theme.amexRewards},
    {value: 'thankyoupoints', label: 'Citi ThankYou Points', color: theme.citiRewards},
    {value: 'mileageplan', label: 'Alaska Mileage Plan', color: theme.alaskaRewards},
    {value: 'aadvantage', label: 'American Aadvantage', color: theme.americanRewards},
    {value: 'mileageplus', label: 'United MileagePlus', color: theme.alaskaRewards},
]

export const NetworkOptions = [
    {id: 'VISA', img_name: 'visa'},
    {id: 'AMEX', img_name: 'Amex'},
    {id: 'MasterCard', img_name: 'Mastercard'},
    {id: 'Discover', img_name: 'Discover'},
]