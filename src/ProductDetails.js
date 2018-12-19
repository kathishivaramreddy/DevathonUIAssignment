import React from "react";

export class ProductDetails extends React.Component {

    render() {
        return(
        <form className="column2 details">
            <label>Product Title</label>
            <p>{this.props.product.title}</p>
            <hr/>
            <label>Price</label>
            <p>&#8377; {this.props.product.price}</p>
            <hr/>
            <label>Offer Price</label><br/>
            <br/>
            <input type="text" defaultValue="Enter Offer Price"></input><br/>
            <hr/>
            <label>Shipping Cost</label>
            <p>&#8377; 0</p>
            <hr/>
            <label>Inventory</label><br/>
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
            <hr/>
            <label>Description</label><br/>
            <input type="text" defaultValue="Enter Description For Product"></input><br/>
        </form>
        )
    }
}