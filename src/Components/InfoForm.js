import React from 'react';
import { Row, Col, Form, FormGroup, FormText, Label, Input, Button, Modal, ModalBody } from 'reactstrap';
import FileUpload from './FileUpload'


class FormPopUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (

            <div>
                <Row style={{margin: "5px"}}>
                    <Col md="4">
                        <Form>
                            <FormGroup>
                                <Input type="textarea" name="text"/>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col md="1">
                        <Button>Add Text</Button>
                    </Col>

                    <Col md="4">
                        <Button color="danger">Delete</Button>
                        {/*TODO: Currently not conncted to anything*/}
                    </Col>
                    <Col md="3">
                        <Button onClick={this.toggle}>Upload Data</Button>
                        <Modal isOpen={this.state.modal} toggle={this.toggle}>
                            <ModalBody>
                                <BamUploadForm/>
                            </ModalBody>
                        </Modal>
                    </Col>
                </Row>


            </div>
        )
    };
}


// Form to take in information about user
class InfoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            telNum: '',
            email: '',
            agree: false,
            contactType: 'Tel. ',
            message: ''

        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
           [name]: value
        });
    }

    handleSubmit(event) {
        console.log("Current State is: " + JSON.stringify(this.state));
        alert("Current State is: " + JSON.stringify(this.state));
        event.preventDefault();
    }

    render (){

        return(
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}> First Name </Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname" placeholder="First Name"
                                           value={this.state.firstName} />

                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}> Last Name </Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname" placeholder="Last Name"
                                           value={this.state.lastName} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}> Contact Tel. </Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" name="telnum" placeholder="Tel. Num"
                                           value={this.state.telNum} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}> Email </Label>
                                <Col md={10}>
                                    <Input type="text" id="email" name="email" placeholder="Email"
                                           value={this.state.email} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree" checked={this.state.agree} />{' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Input type="select" name="contactType" value={this.state.contactType}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="feedback" md={2}> Your Feedback </Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message" rows="12"
                                           value={this.state.message} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

// Form for uploading BAM files
class BamUploadForm extends React.Component {


    render() {
        return (
            <Form>

                <legend> Metadata </legend>
                <FormGroup>
                    <Row>
                        <Col sm={{size:5, offset: 1}}>
                            <Label for="specimenName">Specimen Name: </Label>
                            <Input type="text" name="specimen_name" id="specimenName"
                                   placeholder="Enter Specimen Name"/>
                        </Col>
                        <Col sm="5">
                            <Label for="databaseName">Database Name: </Label>
                            <Input type="text" name="database_name" id="databaseName"
                                   placeholder="Enter Database Name"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{size:5, offset: 1}}>
                            <Label for="citation">Citation: </Label>
                            <Input type="text" name="cite" id="Citation" placeholder="Enter Citation"/>
                        </Col>
                        <Col sm="5">
                            <Label for="experimentInfo">Experiment Information: </Label>
                            <Input type="text" name="expInfo" id="experimentInfo"
                                   placeholder="Enter Experimentation Information"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{size:5, offset: 1}}>
                            <Label for="controlSample">Control Sample: </Label>
                            <Input type="text" name="contSamp" id="controlSample" placeholder="Enter Control Sample"/>
                        </Col>
                    </Row>
                </FormGroup>


                <FormText>Your information here:</FormText>
                <FormGroup>
                    <Row>
                        <Col sm={{size:5, offset: 1}}>
                            <Label for="userName">Name: </Label>
                            <Input type="text" name="name" id="userName" placeholder="Enter Your Name"/>
                        </Col>
                        <Col sm="5">
                            <Label for="email">Email Address: </Label>
                            <Input type="email" name="emailAddress" id="email" placeholder="Enter Your Email"/>
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup>
                    <FormText>Upload File:</FormText>
                    <Row>
                        <Col sm={{size:10, offset: 1}}>
                            <FileUpload/>
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup tag="fieldset">
                    <FormText>Would you like the file to be public or private?</FormText>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}
                            Public
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}
                            Private
                        </Label>
                    </FormGroup>
                </FormGroup>

                <Button>Submit</Button>

            </Form>
        )
    }
}

export default FormPopUp;
