import React from 'react';
import { Link } from 'gatsby';

import Container from '../components/Container';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Subscribe = () => (
  <Layout>
    <SEO title="Subscribe To Bakery Boxes" />

    <Container isFullViewportHeight>
      <h1>Subscribe To Bakery Boxes</h1>

      {/* <p>
        Being more than just a bakery also extends to our product. We don't make
        the goods until you buy in - nothing is sitting on a window sill for
        hours. We deliver it right to your home immediately after baking it. The
        catch is that we only deliver once a month, on a non-refundable 12-month
        subscription basis.
      </p> */}

      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
);

export default Subscribe;
