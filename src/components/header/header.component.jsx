import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className='header-container'>
    <Link to='/'>Home</Link>
    <Link to='/products'>Products</Link>
  </div>
);

export default Header;