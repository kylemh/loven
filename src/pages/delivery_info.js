import React from 'react';

import { Link } from 'gatsby';
import Container from '../components/Container';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import AddressForm from '../components/AddressForm/AddressForm';

const DeliveryInfo = () => (
  <Layout>
    <SEO title="Subscribe To Bakery Boxes" />

    <Container isFullViewportHeight>
      <h1>Subscribe To Bakery Boxes</h1>

      <AddressForm />

      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
);

export default DeliveryInfo;
