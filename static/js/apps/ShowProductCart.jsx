import React, { Component } from 'react';
import {ProductList} from './ProductList'

export const ShowProductCart = () => {
    return (
        <div>
            <div>{`Total: $0`}</div>
           <ProductList />
        </div>
    )
}