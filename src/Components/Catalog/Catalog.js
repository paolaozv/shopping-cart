import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadProducts, filterProducts } from '../../actions/productsActions';
import { CatalogContainer, Categories } from './Catalog.styles';
import { Product } from '../Product/Product';

class Catalog extends React.Component {

  constructor(props) {
    super(props);
		this.cleanFilter = this.cleanFilter.bind(this);
  }

  componentDidMount() {
    this.props.loadProducts();
  }

  listCategories() {

    let categories = this.props.data;
    let newCategories = [];
    let obj = {};

    if (categories.length > 0) {
      for(var i in categories) {
        obj[categories[i]["product_category"]] = categories[i];
      }

      for(i in obj) {
        newCategories.push(obj[i]);
      }

      return newCategories;
    }
  }

  selectCategory(category) {
    console.log(category);
    this.props.filterProducts(category);
  }

  cleanFilter() {
    this.props.loadProducts();
  }

  render() {
    const arr = (this.listCategories() ? this.listCategories() : []);
    return (
      <div>
        <Categories>
          {
            arr.map((opt, ind) => (
              <div key={ind} onClick={(e) => this.selectCategory(opt.product_category)} className="pd-top-15">
                {opt.product_category}
              </div>
            ))
          }
          <div className="pd-top-15" onClick={this.cleanFilter}>All</div>
        </Categories>
        <CatalogContainer>
          {this.props.data.map((obj, index) => (
            <div key={index}>
              <Product product={obj} />
            </div>
          ))}
        </CatalogContainer>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return state.products;
};

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    loadProducts,
    filterProducts
  }, dispatch)
)

export default connect (mapStateToProps, mapDispatchToProps)(Catalog);