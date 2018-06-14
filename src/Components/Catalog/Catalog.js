import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadProducts } from '../../actions/productsActions';
import { CatalogContainer } from './Catalog.styles';
import { Product } from '../Product/Product';

class Catalog extends React.Component{

  componentDidMount() {
    this.props.loadProducts();
  }

  render() {
    return (
      <CatalogContainer>
        {this.props.data.map((obj, index) => (
          <div key={index}>
            <Product product={obj} />
          </div>
        ))}
      </CatalogContainer>
    )
  }
}


const mapStateToProps = (state) => {
  return state.products;
};

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    loadProducts
  }, dispatch)
)

export default connect (mapStateToProps, mapDispatchToProps)(Catalog);