import React, { useState } from 'react';
import { Link } from 'gatsby';

import Container from '../components/Container';
import { Button } from '../components/Button';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import AddressForm from '../components/AddressForm/AddressForm';
import styles from '../styles/pages/subscribe.module.scss';

const Subscribe = () => {
  const [isFormOpen, setFormExistence] = useState(false);

  const renderForm = () => setFormExistence(true);

  return (
    <Layout>
      <SEO title="Subscribe To Bakery Boxes" />

      <Container isFullViewportHeight>
        <h1>Subscribe To Bakery Boxes</h1>

        <br />

        <p>
          Delicious and fresh baker's choice treats made from local ingredients
          delivered to your door the first Sunday of every month. Each box
          contains a unique, seasonal pastry and educational information on
          different exceptionalities we work with in our kitchen.
        </p>

        <p>
          Subscriptions are $30 a month, billed monthly. Some, but not all, may
          contain nuts or alcohol. Sorry, no substitutions or alterations to
          ingredients at this time. A month may be skipped or reallocated if
          emailed 7 days prior to delivery. Subscriptions automatically renew.
          You may cancel at any time.
        </p>

        <p className={styles.oddParagraph}>
          Current delivery locations include <b>New Orleans</b>, <b>Metairie</b>
          , and <b>Gretna</b>.
        </p>

        {!isFormOpen ? (
          <Button
            className={styles.showFormButton}
            onClick={renderForm}
            theme="secondary"
          >
            Subscribe Now
          </Button>
        ) : (
          <AddressForm />
        )}

        <Link to="/">Go back to the homepage</Link>
      </Container>
    </Layout>
  );
};

export default Subscribe;
