import React, { Component } from 'react';
import formatCurrency from '../util'
import Fade  from 'react-reveal/Fade';
import Zoom  from 'react-reveal/Zoom';
import Modal from 'react-modal';
import ProductItem from './ProductItem'
import { fetchProducts } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';
import {connect} from 'react-redux';

 class Products extends Component {
     state = {product:null};
     componentDidMount() {
         this.props.fetchProducts();
     }
     
     openModal = product => {
         this.setState({product});
     }
     closeModal = () => {
         this.setState({product:null});
     }
    render() {
        const { product } = this.state;
    return (
      <div>
        <Fade bottom cascade>
          {!this.props.products ? (
            <div>Loading...</div>
          ) : (
            <ul className="products">
              {this.props.products.map((product) => (

                <ProductItem key={product._id} openModal={this.openModal} product={product}/>
              ))}
            </ul>
          )}
        </Fade>


        {product && (
          <Modal isOpen={true}  ariaHideApp={false} onRequestClose={this.closeModal}>
            <Zoom>
              <button className="close-modal" onClick={this.closeModal}>
                x
              </button>
              <div className="product-details">
                <img src={product.image} alt={product.title}></img>
                <div className="product-details-description">
                  <p>
                    <strong>{product.title}</strong>
                  </p>
                  <p>{product.description}</p>
                  <p>
                    Avaiable Sizes:{" "}
                    {product.availableSizes.map((x) => (
                      <span key={x} >
                        {" "}
                        <button className="button" >{x}</button>
                      </span>
                    ))}
                  </p>
                  <div className="product-price">
                    <div>{formatCurrency(product.price)}</div>
                    <button
                      className="button primary"
                      onClick={() => {
                        this.props.addToCart(product);
                        this.closeModal();
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
    }
}
const mapStateToProps = state => {
    return {
        products: state.products.filteredItems
    };
}
export default  connect(mapStateToProps,{fetchProducts, addToCart})(Products);