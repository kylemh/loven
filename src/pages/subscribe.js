import React from 'react';

import { Link } from 'gatsby';
import Container from '../components/Container';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import AddressForm from '../components/AddressForm/AddressForm';

const Subscribe = () => (
  <Layout>
    <SEO title="Subscribe To Bakery Boxes" />

    <Container isFullViewportHeight>
      <h1>Subscribe To Bakery Boxes</h1>

      <br />

      <p>
        Fresh, seasonal pastries made from local ingredients delivered to your
        door the first Sunday of every month. A L'Oven Bakeshop Bakery Box
        subscription will get you hand-delivered, delicious pastries while
        giving people with intellectual and developmental disabilities job
        training and employment. Each box contains a unique, seasonal pastry and
        educational information on different exceptionalities we work with in
        our kitchen.
      </p>

      <p>
        Subscriptions are $30 a month, billed monthly. Sorry, no substitutions
        or alterations to ingredients at this time. A month may be skipped or
        reallocated if emailed 7 days prior to delivery.
      </p>

      <AddressForm />

      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
);

export default Subscribe;
