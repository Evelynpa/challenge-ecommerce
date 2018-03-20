import React from 'react';
import {ProductList} from './ProductList';
import {ShowProductCart} from './ShowProductCart'


export const Catalogo = () => (
    <div>
        <ShowProductCart/>
        <ul>
        <ProductList />   
        </ul>
    </div>
)