import React from 'react';
import './ProductList.css'

export class ProductList extends React.Component{

    render(){

        return(
            <div className="row">

                <div className="column">
                    <img className="product" src={require('./images/image1.jpeg')} alt="productimage"/>
                </div>

                <div className="column">
                    <img className="product" src={require('./images/image1.jpeg')} alt="productimage"/>
                </div>

                <div className="column">
                    <img className="product" src={require('./images/image1.jpeg')} alt="productimage"/>
                </div>

                <div className="column">
                    <img className="product" src={require('./images/image1.jpeg')} alt="productimage"/>
                </div>

                <div className="column">
                    <img className="product" src={require('./images/image1.jpeg')} alt="productimage"/>
                </div>

                <div className="column">
                    <img className="product" src={require('./images/image1.jpeg')} alt="productimage"/>
                </div>

            </div>
        )
    }
}