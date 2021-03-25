import React from 'react';
import { NavLink } from 'react-router-dom';

const navigationItem = ({ link, title }) => (
  <li>
    <NavLink to={link} exact>{title}</NavLink>
  </li>
);

export default navigationItem;