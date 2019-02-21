import React from 'react';
import { Link } from 'gatsby';

import Container from '../components/Container';
import Layout from '../components/Layout';
import PayPalButton from '../components/PayPalButton';
import SEO from '../components/SEO';

const CLIENT = {
  sandbox: process.env.GATSBY_PAYPAL_SANDBOX,
  production: process.env.GATSBY_PAYPAL_PRODUCTION,
};

const ENV = process.env.NODE_ENV === 'production' ? 'production' : 'sandbox';

const onSuccess = payment => console.log('Successful payment!', payment);

const onError = error =>
  console.log('Erroneous payment OR failed to load script!', error);

const onCancel = data => console.log('Cancelled payment!', data);

const Subscribe = () => (
  <Layout>
    <SEO title="Subscribe To Bakery Boxes" />

    <Container isFullViewportHeight>
      <h1>Subscribe To Bakery Boxes</h1>

      <PayPalButton
        client={CLIENT}
        env={ENV}
        commit={true}
        currency={'USD'}
        total={100}
        onSuccess={onSuccess}
        onError={onError}
        onCancel={onCancel}
      />

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

      <Link to="/" style={{ color: 'blue' }}>
        Go back to the homepage
      </Link>
    </Container>
  </Layout>
);

export default Subscribe;
