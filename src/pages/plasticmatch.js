import React from 'react'
import { Link } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../layouts/theme'
import media from '../layouts/media'

import Layout from '../components/layout'
import SEO from '../components/seo'


const PlasticMatch = () => (
  <Layout>
    <SEO title="PlasticMatch" />
    <h1>PlasticMatch Feature coming soon</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PlasticMatch
