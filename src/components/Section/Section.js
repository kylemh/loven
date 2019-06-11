import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.scss';

Section.propTypes = {
  columns: PropTypes.array.isRequired, // can be JSX, elements, or strings
  id: PropTypes.string,
  title: PropTypes.string,
};

Section.defaultProps = {
  id: undefined,
  title: undefined,
};

function Section({ columns, id, title }) {
  return (
    <section id={id} className={styles.Section}>
      {title && <h3 className={styles.title}>{title}</h3>}

      <div className={styles.columnsContainer}>
        {columns.map((column, index) =>
          React.cloneElement(column, { key: index })
        )}
      </div>
    </section>
  );
}

export default Section;
