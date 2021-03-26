import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './NavigationBar.module.css';

const navigationBar = () => (
  <div>
    <nav className={classes.NavigationItems}>
      <NavigationItems />
    </nav>
  </div>
);

export default navigationBar;