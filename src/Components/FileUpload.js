import React, { Component } from "react";
import axios from 'axios';

export default class FileUpload extends Component {
    state = {
        selectedFile: null
    };

    // Event handler to set state to uploaded file
    onFileChange = event => {

        this.setState({selectedFile: event.target.files[0]});

    };

    // Event Handler to take in uploaded file
    onFileUpload = () => {
        const formData = new FormData();

        formData.append(
            "uploadedBam",
            this.state.selectedFile,
        );

        console.log(this.state.selectedFile);

        // using axios API to handle POST request
        axios.post("http://localhost:3000/upload", formData);

        // TODO: Currently this is not going anywhere, backend to be implemented to receive file
    };


    render() {
        return (

            <div onSubmit={this.onFormSubmit}>
                <input type="file" name="metadata_info" onChange={(e) => this.onFileChange(e)}></input>
                <button onClick={this.onFileUpload}>
                </button>
            </div>

        )
    }
}