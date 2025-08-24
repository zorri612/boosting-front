// src/components/SectionCard/SectionCard.jsx

import React from 'react';
import styles from './SectionCard.module.css';

const SectionCard = ({ title, children, imagePlaceholder, isReversed }) => {
  return (
    <div className={`${styles.card} ${isReversed ? styles.reversed : ''}`}>
      <div className={styles.imagePlaceholder}>
        {imagePlaceholder}
      </div>
      <div className={styles.content}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <div className={styles.cardText}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default SectionCard;