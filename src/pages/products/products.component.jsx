import React from 'react';
import './products.styles.scss';
import { updateProductState } from '../../redux/product/product.actions';
import { selectItems } from '../../redux/product/product.selectors';
import { connect } from 'react-redux';

class ProductsPage extends React.Component {
  componentDidMount() {
    const { updateProductState } = this.props;

    fetch( 'https://yummypizza-api.herokuapp.com/api/products' )
    .then( response => response.json())
    .then( data => {
      updateProductState( data )
    });
  }

  render() {
    const { items } = this.props;
    return (
      <div className='products-page-container'>
        {
          items.map( item => (
          <p key={ item.id }>{ item.name }</p>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = ( state ) => ({
  items: selectItems( state )
})

const mapDispatchToProps = ( dispatch ) => ({
  updateProductState: ( payload ) => dispatch( updateProductState( payload ) )
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);