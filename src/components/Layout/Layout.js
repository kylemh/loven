import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import { PageHeader, PageContent, PageFooter } from './Page'
import Container from '../Container'

import './Layout.css'

const Layout = ({ backgroundImageSource, children, isFullViewportHeight }) => (
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

        <Container
          backgroundImageSource={backgroundImageSource}
          isFullViewportHeight={isFullViewportHeight}
        >
          <h1>{data.site.siteMetadata.title}</h1>
        </Container>

        <PageContent>{children}</PageContent>

        <PageFooter />
      </>
    )}
  />
)

Layout.propTypes = {
  backgroundImageSource: PropTypes.string,
  children: PropTypes.node.isRequired,
  isFullViewportHeight: PropTypes.bool,
}

Layout.defaultProps = {
  backgroundImageSource: null,
  isFullViewportHeight: false,
}

export default Layout
