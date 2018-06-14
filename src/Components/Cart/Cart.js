import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateQuantity } from '../../actions/cartActions';

class Cart extends React.Component {

  constructor(props) {
    super(props);
    this.addQuantity = this.addQuantity.bind(this);
    this.lessQuantity = this.lessQuantity.bind(this);
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

  render() {
    
    return (
      <div>
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
                  <td></td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <div>Total Price: </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    updateQuantity
  }, dispatch)
)

export default connect (mapStateToProps, mapDispatchToProps)(Cart);