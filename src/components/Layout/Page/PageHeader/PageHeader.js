import React from 'react';
import { Link } from 'gatsby';
import styles from './PageHeader.module.scss';
import Logo from '../../../../images/loven-logo.svg';

const PageHeader = () => (
  <header className={styles.PageHeader}>
    <nav>
      <Link className={styles.navLink} to="/">
        <img alt="L'oven Logo" src={Logo} className={styles.logo} />
      </Link>
    </nav>
  </header>
);

export default PageHeader;
