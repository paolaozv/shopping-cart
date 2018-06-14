import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { updateQuantity, deleteProduct } from '../../actions/cartActions';
import { IconArrow, EmptyCart, CartContainer } from './Cart.styles';

class Cart extends React.Component {

  constructor(props) {
    super(props);
    this.addQuantity = this.addQuantity.bind(this);
    this.lessQuantity = this.lessQuantity.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  addQuantity(id) {
    console.log(id);
    let quantity = 1;
    this.props.updateQuantity({id, quantity});
  }

  lessQuantity(id) {
    let quantity = -1;
    this.props.updateQuantity({id, quantity});
  }

  deleteProduct(id) {
    this.props.deleteProduct({id});
  }

  render() {
    
    if (this.props.cart.length !== 0) {
      return (
        <div className="wrapper">
          <IconArrow>
            <NavLink to="/catalog" replace>
              <i className="fa fa-arrow-left size-24"></i>
            </NavLink>
          </IconArrow>
          <CartContainer>
            <h2>My Cart</h2>
            <table>
              <thead>
                <tr>
                  <th className="th">Name</th>
                  <th className="th">Color</th>
                  <th className="th">Quantity</th>
                  <th className="th">Unit Price</th>
                  <th className="th">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.props.cart.map((obj, index) => (
                    <tr key={index}>
                      <td className="pd-15">{obj.product_name}</td>
                      <td className="pd-15">{obj.product_color}</td>
                      <td className="pd-15"><button className="addLess" onClick={(e) => this.lessQuantity(obj.id)}>-</button>{obj.quantity}<button className="addLess" onClick={(e) => this.addQuantity(obj.id)}>+</button></td>
                      <td className="pd-15">S/. {obj.product_price}</td>
                      <td className="pd-15"><button className="delete" onClick={(e) => this.deleteProduct(obj.id)}>Delete</button></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </CartContainer>
        </div>
      )
    } else {
      return (
        <div className="wrapper">
          <IconArrow>
            <NavLink to="/catalog" replace>
              <i className="fa fa-arrow-left size-24"></i>
            </NavLink>
          </IconArrow>
          <EmptyCart>Empty Cart</EmptyCart>
        </div>
      )
    }
  }
}


const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    updateQuantity,
    deleteProduct
  }, dispatch)
)

export default connect (mapStateToProps, mapDispatchToProps)(Cart);