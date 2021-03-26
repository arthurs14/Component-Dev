import React from 'react';

import classes from './MainBar.module.css';
import logo from '../../abc_logo.svg';

const mainBar = () => (
  <div className={classes.Mainbar}>
    <div className={classes.Logo}>
      <img src={logo} alt="logo" />
    </div>
    <div className={classes.Contact}>
      Contact Us
    </div>
  </div>
);

export default mainBar;