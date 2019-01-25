import React from 'react'
import { Link } from 'gatsby'
import { Range } from 'rc-slider'

import 'rc-slider/assets/index.css'

import Layout from '../components/layout'
import SEO from '../components/seo'
import FilterWrapper from '../components/FilterWrapper'
import { Button, Switch, Icon, Slider } from 'antd'
import SimpleDialogDemo from '../components/SimpleDialogDemo'

const marks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100°C</strong>,
  },
};

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    {/* <Slider /> */}
    <Range min={0} max={2000} defaultValue={[250, 1500]} marks={{ 0:0, 250: '', 500: 500, 750: 750, 1000: 1000, 1250: 1250, 1500: 1500, 1750: 1750, 2000: 2000 }} tipFormatter={value => `${value}%`} step={null} />
    <br />
    <br />
    <FilterWrapper>


    </FilterWrapper>

      <Switch defaultChecked />

      {/* <Slider marks={marks} defaultValue={37} /> */}

      <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="close" />} defaultChecked />
    <Link to="/">Go back to the homepage</Link>
    <Button>Button</Button>
    <br/>
    <SimpleDialogDemo />


  </Layout>
)

export default SecondPage
