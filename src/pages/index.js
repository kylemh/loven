import React from 'react';
import { Link } from 'gatsby';

import styles from '../styles/pages/index.module.scss';
import Logo from '../images/loven-logo.svg';
import CoverImageSource from '../images/overhead-3-pies.jpg';
import Layout from '../components/Layout';
import Container from '../components/Container';
import SEO from '../components/seo';
import Button from '../components/Button';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`L'oven`, `Bakeshop`, `New Orleans`]} />

    <Container backgroundImageSource={CoverImageSource} isFullViewportHeight>
      <img alt="L'oven Logo" src={Logo} className={styles.logo} />

      <p className={styles.ctaParagraph}>
        Spread some L'oven by subscribing to our bakery boxes!
      </p>

      <Button>Subscribe</Button>
    </Container>

    <Container>
      <h3>Who We Are</h3>

      <p>
        L’Oven is more than a bakery, it is a business created specifically to
        train and hire people with intellectual and developmental disabilities
        (IDD). We look at all of the abilities our employees bring to the table
        in order to provide delicious pastries to the community and gainful
        employment to our staff. Our mission is to integrate people with special
        needs into the community by providing gainful employment with no
        sacrifice to a high-end product.
      </p>

      <p>
        We are offering a subscription service delivered directly to your door.
        A fresh seasonal bakery box delivered on the first Sunday of each month!
      </p>
    </Container>

    <Container>
      <h3>What We Do</h3>

      <p>
        People are at the heart of our pastries. We hire and train people with
        intellectual and developmental disabilities to perform tasks from pastry
        production, customer service, dishwashing, machine maintenance, and
        inventory management. Our kitchen utilizes volunteer job coaches to
        assist in vocational training for our employees. We make handmade
        pastries using quality ingredients, sourcing local, seasonal ingredients
        as much as possible. Baked with love, always.
      </p>
    </Container>

    <Container>
      <h3>How We Do It</h3>

      <p>
        L’Oven was envisioned by pastry chef and special education teacher Twyla
        Mount. After struggling to find opportunity for her students within the
        New Orleans school system, Mount decided to advocate for people with
        special needs in New Orleans by creating alternative pathways to
        successful lives and gainful employment. In the state of Louisiana, 70%
        to 80% of adults with intellectual and developmental disabilities are
        unemployed. Of the 20 to 30% of employed individuals, the majority are
        underemployed and are subject to subminimum wage provisions allows
        employers to page a wage below the federal minimum to workers with
        disabilities. Twyla has combined her skill of educating people with
        special needs with her professional training in pastry to create L’Oven
        Bakeshop.
      </p>

      <p>
        Twyla Mount is both an accomplished special education teacher and pastry
        chef. While receiving her BA in Educational Sociology at Hampshire
        College in Massachusetts she began her training in French patisserie.
        She is a licensed special education teacher and strong advocate for her
        students. Twyla has worked as a pastry chef at Satsuma Café and a
        continued her training under Chef Beth Biundo at Beth Biundo Sweets.
        Twyla envisioned L’Oven Bakeshop as a platform for people with
        exceptionalities to advocate for their willingness and ability to work.
      </p>
    </Container>
  </Layout>
);

export default IndexPage;
