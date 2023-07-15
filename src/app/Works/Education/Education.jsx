import React from 'react';
import styles from './Education.module.css';
function Education() {
  return (
    <div className={styles.education__container}>
      <div className={styles.education__card}>
        <h1>BPUT University, Odisha</h1>
        <span>B.E in ECE branch</span> <span>2008-2012</span>
      </div>
    </div>
  );
}

export default Education;
