import React from 'react';
import allProducts from './allProducts';
import {ImageDragDrop} from "./ImageDragDrop";
import './ProductList.css'

export class ProductList extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            showDetails: false,
            productId:1
        }
        this.openProductBox = this.openProductBox.bind(this)
        this.closeProductBox = this.closeProductBox.bind(this)
    }

    openProductBox(id){
        this.setState({showDetails:true,productId:id})
    }

    closeProductBox(){
        this.setState({showDetails:false})
    }

    render(){
        const productList = allProducts().products.map( product =>
            <div className="column" onClick={() => this.openProductBox(product.productid)}>
                <img className="product" src={require(`./images/${product.image}`)} alt="productimage"/>
            </div>)

        const productDetails= allProducts().products.filter(product => product.productid === this.state.productId)
            .map( product =>
              <div className="overlay">
                <div className="productdetails">
                    <div className="column2">
                        <img className="product" src={require(`./images/${product.image}`)} alt="productimage"/>
                    </div>
                    <div className="column2">
                        <img className="imageupload" src={require(`./images/draganddrop.png`)} alt="uploadimage" />
                    </div>
                </div>
              </div>)

        return(
            <div>
                {productList}
                {this.state.showDetails && productDetails}
                {/*<ImageDragDrop/>*/}

                </div>
        )
    }
}