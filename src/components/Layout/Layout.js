import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import { PageHeader, PageContent, PageFooter } from '../Page'
import HeroBanner from '../HeroBanner'

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

        <HeroBanner title={data.site.siteMetadata.title} />

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
