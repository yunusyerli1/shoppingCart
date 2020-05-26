import React, { Component } from 'react';
import { addToCart } from '../redux/actions/cartActions';
import {connect} from 'react-redux';
import formatCurrency from '../util'


class ProductItem extends Component {
   
    render() {
        const {product} = this.props;
        return (
            <li >
                  <div className="product">
                    <a
                      href={"#" + product._id}
                      onClick={() => this.props.openModal(product)}
                    >
                      <img src={product.image} alt={product.title}></img>
                      <p>{product.title}</p>
                    </a>
                    <div className="product-price">
                      <div>{formatCurrency(product.price)}</div>
                      <button
                        onClick={() => this.props.addToCart(product)}
                        className="button primary"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </li>
        )
    }
}

export default  connect(null,{ addToCart})(ProductItem);