import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout isFullViewportHeight>
    <SEO title="Home" keywords={[`L'oven`, `Bakeshop`, `New Orleans`]} />

    <Link to="/subscriptions/">Go to subscriptions</Link>
  </Layout>
);

export default IndexPage;
