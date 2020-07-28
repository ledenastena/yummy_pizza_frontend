import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import MenuDropdown from '../menu-dropdown/menu-dropdown.component';

class Header extends React.Component {
  state = {
    menuDropdownVisible: false
  }
  
  // cartButtonRef = null;
  menuButtonRef = null;
  
  // setCartButtonRef = (node) => {
  //   this.cartButtonRef = node;
  // }
  
  toggleMenuDropdownVisible = () => {
    this.setState( prevState => ({
      menuDropdownVisible: !prevState.menuDropdownVisible
    }));
  }

  setHamburgerRef = (node) => {
    this.menuButtonRef = node;
  }

  handleHamburgerClick = () => {   
    this.toggleMenuDropdownVisible();
  }

  render() {
  return (
      <div className='header-container'>
        <div className='home-link'>
          <Link to='/'>Yummy Pizza</Link>
        </div>
        <div className='navigation-links'>
          <div className='regular-menu'>
            <Link to='/products'>All Products</Link>
            <Link to='/products/pizzas'>Pizzas</Link>
            <Link to='/products/drinks'>Drinks</Link>
            <Link to='/products/desserts'>Desserts</Link>
          </div>
          <div className='hamburger-menu-button' onClick={this.handleHamburgerClick} ref={this.setHamburgerRef}>
            <div className='hamburger-bar'></div>
            <div className='hamburger-bar'></div>
            <div className='hamburger-bar'></div>
          </div>
        </div>
        {
          this.state.menuDropdownVisible?
          <MenuDropdown menuButtonRef={ this.menuButtonRef} toggleMenuDropdownVisible={ this.toggleMenuDropdownVisible } />
          :''
        }
      </div>
    );
  }
}

export default Header;