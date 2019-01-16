import React from 'react';
import { Link } from 'gatsby';

import CoverImageSource from '../images/overhead-3-pies.jpg';
import Container from '../components/Container';
import Layout from '../components/Layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`L'oven`, `Bakeshop`, `New Orleans`]} />

    <Container backgroundImageSource={CoverImageSource} isFullViewportHeight>
      <h1>L'Oven Bakeshop</h1>
    </Container>

    <Link to="/subscriptions/">Go to subscriptions</Link>
  </Layout>
);

export default IndexPage;
