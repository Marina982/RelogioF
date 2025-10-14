import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import styles from './GraduationCountdown.module.css';

const GraduationCountdown = () => {
  const graduationDate = new Date('2025-12-15T19:00:00');
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date();
    const difference = graduationDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        finished: true,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      finished: false,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Contagem Regressiva para a Formatura 🎓</h1>
        <h2 className={styles.name}>Marina Raquel Oliveira Maciel Oliveira Maciel Goes</h2>
        <h3 className={styles.class}>Turma: Informática 6A</h3>
        {timeLeft.finished ? (
          <h2 className={styles.finished}>🎉 Parabéns pela formatura! 🎉</h2>
        ) : (
          <div className={styles.timer}>
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </div>
        )}
      </div>
    </div>
  );
};

export default GraduationCountdown;