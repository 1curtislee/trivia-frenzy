import React, { Component } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
// import axios from 'axios';

class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newQuestion: '',
      newAnswers: [],
      newAuthor: ''
    }
  }

  onSubmit(event) {
    event.preventDefault();
    // const baseUrl = process.env.baseURL || "http://localhost:3001";

    console.log(event.target);

    // axios.post(baseUrl + '/api/putData') {

    // }
  }
  
  render() {
    return (
      <div>
        <br/>
        <h2>Add a question...</h2>
        <br/>

        <Form onSubmit={this.onSubmit}>
          <Form.Group as={Row} id="formQuestion">
            <Form.Label column sm="2">Question</Form.Label>
            <Col sm="8">
              <Form.Control
                type="input"
                placeholder="How far is the earth from the sun?"
                value={this.state.question}
              />
            </Col>
          </Form.Group>
          <br/>
          <Form.Group as={Row} id="formOption1">
            <Form.Label column sm="2">Option 1</Form.Label>
            <Col sm="6">
              <Form.Control />
            </Col>
            <Col sm='2'>
              <Form.Check 
                type="radio"
                label="Correct"
                name="correct"
              />
            </Col>
          </Form.Group>
          <br/>
          <Form.Group as={Row} id="formOption2">
            <Form.Label column sm="2">Option 2</Form.Label>
            <Col sm="6">
              <Form.Control />
            </Col>
            <Col sm='2'>
              <Form.Check 
                type="radio"
                label="Correct"
                name="correct"
              />
            </Col>
          </Form.Group>
          <br/>
          <Form.Group as={Row} id="formOption3">
            <Form.Label column sm="2">Option 3</Form.Label>
            <Col sm="6">
              <Form.Control />
            </Col>
            <Col sm='2'>
              <Form.Check 
                type="radio"
                label="Correct"
                name="correct"
              />
            </Col>
          </Form.Group>
          <br/>
          <Form.Group as={Row} id="formOption4">
            <Form.Label column sm="2">Option 4</Form.Label>
            <Col sm="6">
              <Form.Control />
            </Col>
            <Col sm='2'>
              <Form.Check
                type="radio"
                label="Correct"
                name="correct"
              />
            </Col>
          </Form.Group>
          <br/>        
          <Button variant="primary" type="submit">
            Submit
          </Button>

        </Form>
      </div>
    );
}
}

export default Add;