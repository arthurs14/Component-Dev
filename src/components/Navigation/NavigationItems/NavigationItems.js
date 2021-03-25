import React from 'react';

import NavigationItem from '../NavigationItem/NavigationItem';

const navigationItems = () => (
  <ul>
    <NavigationItem title="Industries" link="/industries" />
    <NavigationItem title="Services" link="/services" />
    <NavigationItem title="About-Us" link="/about-us" />
  </ul>
);

export default navigationItems;