import React from 'react';
import './home.styles.scss';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  componentDidMount() {
  }

  render() {

    return (
      <div className='homepage-container'>
        <Link to='/products'>
          <img src={ `src/assets/pizza_bg.png` } className='home-image' />
        </Link>
      </div>
    );
  }
}



export default HomePage;