import React, { Component } from 'react';
import { catalog } from './../../../data/mock.json';
import ButtonAddToCart from './AddItemToCart'

export const ProductList = (id) => {

    const ProductListClick = (id) => {
        console.log('ProductListClick', id);
        
    
    }

    return (
        <div>
            {
                catalog.map(element => {
                    return (
                        <li key={element.id} className="elemenList">
                            <img src={element.imageURL} alt="imgProduct" />
                            <p>{element.name}</p>
                            <p>{element.currency}{element.price}</p>
                            <ButtonAddToCart showProductClick={
                                () => ProductListClick(element.id)
                            } />
                        </li>
                    )
                })
            }
        </div>
    )


}

