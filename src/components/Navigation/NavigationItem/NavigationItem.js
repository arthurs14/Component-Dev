import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';
import './NavigationItem.module.css';

const navigationItem = ({ link, title }) => (
  <li className={classes.NavigationItem}>
    <NavLink 
      to={link} 
      exact
      activeClassName={classes.active}>{title}</NavLink>
  </li>
);

export default navigationItem;