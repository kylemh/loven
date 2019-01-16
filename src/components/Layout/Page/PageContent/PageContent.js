import React from 'react';
import styles from './PageContent.module.scss';

const PageContent = ({ children }) => (
  <main className={styles.PageContent}>{children}</main>
);

export default PageContent;
