import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Formatura Informática 6A 🎓</h1>
      <p className={styles.subtitle}>Marina Raquel Oliveira Maciel Oliveira Maciel Goes</p>
      <p className={styles.date}>15 de Dezembro às 19:00h</p>
    </header>
  );
};

export default Header;