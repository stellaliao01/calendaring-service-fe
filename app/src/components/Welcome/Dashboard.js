import React from 'react';
import Header from './Header';
import classes from './Dashboard.module.scss';

export default function Dashboard() {
  return (
    <div className={classes.main}>
      <Header />
      <h5>Welcome</h5>
      <div className={classes.placeholder}>image placeholder</div>
      <p>
        This onbarding guide will show you how to add your avalibility, and
        customize your meeting types.
      </p>
      <div className={classes.buttonContainer}>
        <button>let's get started</button>
      </div>
    </div>
  );
}