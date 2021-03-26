import React from 'react';

import classes from './MainBar.module.css';
import logo from '../../abc_logo.svg';

const mainBar = () => (
  <div className={classes.mainbar}>
    <div className={classes.logo}>
      <img src={logo} alt="logo" />
    </div>
    <div className={classes.contact}>
      <p>Contact Us</p>
    </div>
  </div>
);

export default mainBar;