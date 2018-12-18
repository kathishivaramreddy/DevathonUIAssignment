import React from 'react';
import allProducts from './allProducts'
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
        console.log(this.state.showDetails,this.state.productId)
        const productList = allProducts().products.map( product =>
            <div className="column" onClick={() => this.openProductBox(product.productid)}>
            <img className="product" src={require(`./images/${product.image}`)} alt="productimage"/>
            </div>)

        const productDetails= allProducts().products.filter(product => product.productid === this.state.productId)
            .map( product => <div className="productdetails">
                <img className="product" src={require(`./images/${product.image}`)} alt="productimage"/>
            </div>)
        return(
            <div className="productDetails">
                {productList}
                {this.state.showDetails && productDetails}
            </div>
        )
    }
}