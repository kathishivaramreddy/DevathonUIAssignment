import React from 'react';
import allProducts from './allProducts'
import './ProductList.css'

export class ProductList extends React.Component{

    render(){

        const productList = allProducts().products.map( image =>
            <div className="column">
            <img className="product" src={require(`./images/${image}`)} alt="productimage"/>
            </div>)

        return(
            <div className="row">

                {productList}

            </div>
        )
    }
}