import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import Logo from '../../images/loven-logo.svg';
import { LinkButton } from '../Button';
import styles from './Hero.module.scss';

const Hero = () => {
  const { backgroundImg } = useStaticQuery(graphql`
    query {
      backgroundImg: file(relativePath: { eq: "overhead-3-pies.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      #      homePageContent: allContentfulHomePage {
      #        nodes {
      #          callToAction {
      #            callToAction
      #          }
      #          callToActionButtonText
      #        }
      #      }
    }
  `);

  // will be retrieved from Contentful query
  const content = {
    callToAction: {
      callToAction: "Spread some L'oven:\nSubscribe to our Bakery Boxes!",
    },
    callToActionButtonText: 'Subscribe!',
  };
  const { callToAction } = content.callToAction;
  const { callToActionButtonText } = content;

  return (
    <BackgroundImage
      className={styles.Hero}
      fluid={backgroundImg.sharp.fluid}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <img alt="L'oven Logo" src={Logo} className={styles.logo} />

          <p className={styles.ctaParagraph}>{callToAction}</p>

          <LinkButton to="/subscribe">{callToActionButtonText}</LinkButton>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Hero;
