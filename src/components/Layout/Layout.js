import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import { PageHeader, PageContent, PageFooter } from './Page'
import Container from '../Container'

import './Layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <PageHeader />

        <Container isFullViewportHeight>
          <h1>{data.site.siteMetadata.title}</h1>
        </Container>

        <PageContent>{children}</PageContent>

        <PageFooter />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
