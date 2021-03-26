import React from 'react';

import NavigationItem from '../NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = () => (
  <div className={classes.links}>
    <ul className={classes.ul}>
      <NavigationItem title="Industries" link="/industries" />
      <NavigationItem title="Services" link="/services" />
      <NavigationItem title="About-Us" link="/about-us" />
    </ul>
  </div>
);

export default navigationItems;