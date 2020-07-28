import React from 'react';
import './products.styles.scss';
import ProductList from '../../components/product-list/product-list.component';
import { fetchTypesStartAsync } from '../../redux/product/product.actions';
import { selectItems, selectIsFetching, selectErrorMessage } from '../../redux/product/product.selectors';
import { connect } from 'react-redux';

class ProductsPage extends React.Component {  

  componentDidMount() {
    const { fetchTypesStartAsync } = this.props;
    const typeParam = this.props.match.params.type;

    fetchTypesStartAsync( typeParam );
  }

  render() {
    const { items, isFetching, errorMessage } = this.props;
    if ( isFetching ) {
      return (
        <p>Loading...</p>
      )
    }
    else {
      if ( items.length === 0) {
        return (
          <div className='products-page-container'>
             { errorMessage?
               <p>{ errorMessage }</p>
               :
               <p>No products match the search parameters</p>
             }
          </div>
        );
      }

      return (
        <div className='products-page-container'>
          <ProductList />
        </div>
      );
    }
  }
}

const mapStateToProps = ( state ) => ({
  isFetching: selectIsFetching( state ),
  items: selectItems( state ),
  errorMessage: selectErrorMessage( state )
});

const mapDispatchToProps = ( dispatch ) => ({
  fetchTypesStartAsync: ( typeParam ) => dispatch( fetchTypesStartAsync( typeParam ))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);