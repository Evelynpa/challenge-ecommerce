import React, { Component } from 'react';
import { ProductList } from './ProductList';

class ButtonAddToCart extends Component {
    constructor() {
        super();
        this.state = {
           
        }
    }

    render() {
        const { showProductClick } = this.props;
        this.renderProductAdd
        return (
            <div>
                <button onClick={showProductClick} >add item to cart</button>
            </div>
        )
    }
}
export default ButtonAddToCart;