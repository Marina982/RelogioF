import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Formatura 2025 🎓</h1>
        <p className={styles.subtitle}>Turma de Informática 6A</p>
        <p className={styles.date}>15 de Dezembro de 2025 - 19h</p>
      </header>
      <div className={styles.spacer}></div>
    </>
  );
};

export default Header;
