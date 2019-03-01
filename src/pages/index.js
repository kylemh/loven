import React from 'react';

import styles from '../styles/pages/index.module.scss';

import Logo from '../images/loven-logo.svg';
import ImgSrcCover from '../images/overhead-3-pies.jpg';
import ImgSrcWomanMixingBowl from '../images/mixing-bowl.jpg';
import ImgSrcWorkersPosing from '../images/pie-gang-signs.jpg';
import ImgSrcTwyla from '../images/twyla-in-the-kitchen.jpg';

import { LinkButton } from '../components/Button';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import Section from '../components/Section';
import SEO from '../components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`L'oven`, `Bakeshop`, `New Orleans`]} />
    <Container backgroundImageSource={ImgSrcCover} isFullViewportHeight>
      <img alt="L'oven Logo" src={Logo} className={styles.logo} />

      <span className={styles.ctaParagraph}>
        Spread some L'oven by subscribing to our bakery boxes!
      </span>

      <LinkButton to="/subscribe">Subscribe</LinkButton>
    </Container>
    <Container className={styles.heroBuffer}>
      <Section
        columns={[
          <div className={styles.sectionText}>
            <Heading
              className={styles.mobileCenteredText}
              tag="h2"
              text="Who We Are"
              withUnderline
            />
            <p>
              L’Oven is more than a bakery, it is a business created
              specifically to train and hire people with intellectual and
              developmental disabilities (IDD). We look at all of the abilities
              our employees bring to the table in order to provide delicious
              pastries to the community and gainful employment to our staff. Our
              mission is to integrate people with special needs into the
              community by providing gainful employment with no sacrifice to a
              high-end product.
            </p>
            <p>
              We are offering a subscription service delivered directly to your
              door. A fresh seasonal bakery box delivered on the first Sunday of
              each month!
            </p>
          </div>,
          <img
            className={styles.sectionImage}
            src={ImgSrcWomanMixingBowl}
            alt="Smiling woman mixes ingredients in bowl"
          />,
        ]}
      />
    </Container>
    <Container>
      <Section
        columns={[
          <img
            src={ImgSrcWorkersPosing}
            alt="Two men pose in next to bake stand"
            className={styles.sectionImage}
          />,
          <div className={styles.sectionText}>
            <Heading
              className={styles.mobileCenteredText}
              tag="h2"
              text="Who We Are"
              withUnderline
            />
            <p>
              People are at the heart of our pastries. We hire and train people
              with intellectual and developmental disabilities to perform tasks
              from pastry production, customer service, dishwashing, machine
              maintenance, and inventory management. Our kitchen utilizes
              volunteer job coaches to assist in vocational training for our
              employees. We make handmade pastries using quality ingredients,
              sourcing local, seasonal ingredients as much as possible. Baked
              with love, always.
            </p>
          </div>,
        ]}
      />
    </Container>

    <Container>
      <Heading tag="h2" text="How We Do It" withUnderline />

      <Section
        columns={[
          <p className={styles.sectionText}>
            L’Oven was envisioned by pastry chef and special education teacher
            Twyla Mount. After struggling to find opportunity for her students
            within the New Orleans school system, Mount decided to advocate for
            people with special needs in New Orleans by creating alternative
            pathways to successful lives and gainful employment. In the state of
            Louisiana, 70% to 80% of adults with intellectual and developmental
            disabilities are unemployed. Of the 20 to 30% of employed
            individuals, the majority are underemployed and are subject to
            subminimum wage provisions allows employers to page a wage below the
            federal minimum to workers with disabilities. Twyla has combined her
            skill of educating people with special needs with her professional
            training in pastry to create L’Oven Bakeshop.
          </p>,
          <p className={styles.sectionText}>
            Twyla Mount is both an accomplished special education teacher and
            pastry chef. While receiving her BA in Educational Sociology at
            Hampshire College in Massachusetts she began her training in French
            patisserie. She is a licensed special education teacher and strong
            advocate for her students. Twyla has worked as a pastry chef at
            Satsuma Café and a continued her training under Chef Beth Biundo at
            Beth Biundo Sweets. Twyla envisioned L’Oven Bakeshop as a platform
            for people with exceptionalities to advocate for their willingness
            and ability to work.
          </p>,
        ]}
      />

      <div className={styles.bigImage}>
        <img
          src={ImgSrcTwyla}
          alt="Twyla working in the kitchen with two other women"
        />
      </div>
    </Container>
  </Layout>
);

export default IndexPage;
