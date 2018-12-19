import React from "react";

export class ProductDetails extends React.Component {

    render() {
        return(
        <div className="column2 details">
            Product Title
            <p>{this.props.product.title}</p>
            <hr/>
            Price
            <p>{this.props.product.price}</p>
            <hr/>
            Offer Price<br/>
            <input type="text" defaultValue="Enter Offer Price"></input><br/>
            <hr/>
            Shipping Cost
            <p>0</p>
            <hr/>
            Inventory<br/>
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
            <hr/>
            Description<br/>
            <input type="text" defaultValue="Enter Description For Product"></input><br/>
        </div>
        )
    }
}