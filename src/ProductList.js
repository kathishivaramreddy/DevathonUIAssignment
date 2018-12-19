import React from 'react';
import allProducts from './allProducts';
import {ProductDetails} from "./ProductDetails";
import {ProductVariation} from "./ProductVariation";
import './ProductList.css'

export class ProductList extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            showDetails: false,
            productId:1,
            top:0,
            left:0,
            addVariation:false,
        }
        this.openProductBox = this.openProductBox.bind(this)
        this.closeProductBox = this.closeProductBox.bind(this)
        this.addVariation = this.addVariation.bind(this)
    }

    openProductBox(id){

        const offsets = document.getElementById(`id${id}`).getBoundingClientRect();
        const top = offsets.top-172;
        const left = offsets.left-172;
        this.setState({showDetails:true,productId:id,top:top-10,left:left-10})

    }

    closeProductBox(){
        this.setState({showDetails:false})
    }

    addVariation(){
        this.setState({addVariation:true})
    }

    render(){
        const productList = allProducts().products.map( (product,index) =>
            <div id={`id${index+1}`}className="column" onClick={() => this.openProductBox(product.productid)}>
                <img className="product" src={require(`./images/${product.image}`)} alt="productimage"/>
            </div>)

        const productDetails= allProducts().products.filter(product => product.productid === this.state.productId)
            .map( product =>
              <div className="overlay">
                <div className="productdetails" style={{left: this.state.left,
                    top:this.state.top}}>

                    <div className="column2 productimage">
                        <img className="product" src={require(`./images/${product.image}`)} alt="productimage"/>
                    </div>

                    <div className="column2 dragdrop">
                        <img className="imageupload" src={require(`./images/draganddrop.png`)} alt="uploadimage" />
                    </div>

                    <ProductDetails product={product}/>

                    <div className="column2 variation">
                        <div className="varbutton">
                            <button onClick={this.addVariation}>+</button>
                            <pre>
                                Have variations to your product<br/>
                                like size,color and more
                            </pre>
                        </div>
                        <div className="submitimage" onClick={this.closeProductBox}>
                            <img src={require('./images/submit.png')}/>
                        </div>
                        <div className="addVariation">
                            {this.state.addVariation && <ProductVariation/>}
                        </div>
                    </div>

                </div>
              </div>)

        return(
            <div>
                {productList}
                {this.state.showDetails && productDetails}
            </div>
        )
    }
}