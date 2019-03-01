import React from 'react';

import { Link } from 'gatsby';

import Container from '../components/Container';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const ThankYouPage = () => (
  <Layout>
    <SEO title="Thank You" />
    <Container isFullViewportHeight>
      <Heading tag="h1" text="Thank You!" withUnderline />
      <p>
        We have received your payment and you should receive a receipt from
        Stripe in your email inbox. With your help, we'll be able to continue
        baking and teaching our students the keys to success in life.
      </p>

      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
);

export default ThankYouPage;
