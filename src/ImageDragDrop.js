import React, { Component, Fragment } from "react";
import Dropzone from "react-dropzone";
import request from 'superagent';

export class ImageDragDrop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            files: [],
        };
        this.onPreviewDrop = this.onPreviewDrop.bind(this)
    }

    onPreviewDrop = (files) => {
        this.setState({
            files: this.state.files.concat(files),
        });
    }

    render() {
        const previewStyle = {
            display: 'inline',
            width: 100,
            height: 100,
        };

        return (
            <div className="imagedrag">
                <Dropzone
                    accept="image/*"
                    onDrop={this.onPreviewDrop}
                >
                    <p> Drop an image, get a preview!</p>
                </Dropzone>

            </div>
        );
    }
}