import React, { Component } from 'react';
import formatCurrency from '../util';
import {connect} from 'react-redux';
import {removeFromCart} from '../redux/actions/cartActions'

class CartItem extends Component {

    render() {
        const {item} = this.props;
        return (
            
                            
                            <li>
                                <div>
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div>
                                    <div>{item.title}</div>
                                    <div className="right">
                                        {formatCurrency(item.price)} x {item.count}{" "}
                                        <button className="button" onClick={()=>this.props.removeFromCart(item)}>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </li>
        )
    }
}


export default  connect(null, {removeFromCart})(CartItem);