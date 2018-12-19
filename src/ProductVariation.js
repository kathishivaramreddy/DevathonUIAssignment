import React from 'react';

export class ProductVariation extends React.Component{

    render(){
        return(
            <div className="container">

                <label>Option1</label>
                <input type={"text"} defaultValue={"Add Option Name"}></input>
                <hr/>

                <button className="addVar">+</button>  <label>Add More Variation</label>
                <div className="submitVar">
                    <button className="submitVar"> + </button> <label>Add More Variations</label>
                </div>
            </div>
        )
    }
}