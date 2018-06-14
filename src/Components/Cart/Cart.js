import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { updateQuantity, deleteProduct } from '../../actions/cartActions';

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
        <div className="wrapper text-center">
          <NavLink to="/catalog" replace>
            <i className="fa fa-arrow-left size-24"></i>
          </NavLink>
          <h2>My Cart</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Color</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.cart.map((obj, index) => (
                  <tr key={index}>
                    <td>{obj.product_name}</td>
                    <td>{obj.product_color}</td>
                    <td><button onClick={(e) => this.lessQuantity(obj.id)}>-</button>{obj.quantity}<button onClick={(e) => this.addQuantity(obj.id)}>+</button></td>
                    <td>{obj.product_price}</td>
                    <td><button onClick={(e) => this.deleteProduct(obj.id)}>Delete</button></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <div>Total Price: </div>
        </div>
      )
    } else {
      return (
        <div className="wrapper text-center">
          <NavLink to="/catalog" replace>
            <i className="fa fa-arrow-left size-24"></i>
          </NavLink>
          <p>Empty Cart</p>
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