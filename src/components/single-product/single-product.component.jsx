import React from 'react';
import './single-product.styles.scss';

class SingleProduct extends React.Component {
  state = {
    quantity: 0
  }
  
  handleChange = ( e ) => {
    this.setState({
      quantity: e.target.value
    });
  }

  handleMinusClick = () => {
    if ( this.state.quantity > 0 )
      this.setState( prevState => ({
        quantity: prevState.quantity - 1
      }));
  }

  handlePlusClick = () => {
    if ( this.state.quantity < 10 )
      this.setState( prevState => ({
        quantity: prevState.quantity + 1
      }));
  }
  handleAddToCartClick = () => {
    
  }

  render() {
    const { item } = this.props;
    const image = 'src/assets/square.png';
    
    return (
      <div className='single-product-container'>              
          <img className='list-image' src={`${image}`} />
          <span className='item-title'>{ item.name }</span>
          <span className='item-price'>&euro;{ item.price_eur }</span>
          <div className='quantity-section'>
            <div className='small-btn minus-quantity' onClick={ this.handleMinusClick }>-</div>
            <input className='display-quantity' value={ this.state.quantity } onChange={ this.handleChange } readOnly />
            <div className='small-btn plus-quantity' onClick={ this.handlePlusClick }>+</div>
          </div>
          <div className='add-to-cart-section'>
            <div className='add-to-cart-button' onClick={ this.handleAddToCartClick }>Add to Cart</div>
          </div>
      </div>
    );
  }
}

export default SingleProduct;