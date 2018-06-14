import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addProduct } from '../../actions/cartActions';
import { ProductContainer, ContainerImg, ImgProduct, Description,
  ContainerButton } from './Product.styles';

class Product extends React.Component {

  constructor(props) {
    super(props);
		
  }

  selectProduct(product) {
    console.log(product);
    this.props.addProduct(product);
  }

  render() {
    
    return (
      <ProductContainer>
        <ContainerImg>
          <ImgProduct src={this.props.product.product_image} alt={this.props.product.product_name} />
        </ContainerImg>
        <Description>
          <p>{this.props.product.product_category}</p>
          <p>{this.props.product.product_name}</p>
          <p>{this.props.product.product_color}</p>
          <p>S/. {this.props.product.product_price}</p>
        </Description>
        <ContainerButton>
          <button onClick={(e) => this.selectProduct(this.props.product)} className="button">Add to Cart</button>
        </ContainerButton>
      </ProductContainer>
    )
  }
}


const mapStateToProps = (state) => {
  return state.products;
};

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    addProduct
  }, dispatch)
)

export default connect (mapStateToProps, mapDispatchToProps)(Product);