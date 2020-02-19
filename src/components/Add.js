import React, { Component } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import axios from 'axios';

class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: 'option1',
      newQuestion: '',
      newAuthor: '',
      newAnswer1: '',
      answer1Correct: false,
      newAnswer2: '',
      answer2Correct: false,
      newAnswer3: '',
      answer3Correct: false,
      newAnswer4: '',
      answer4Correct: false,
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const baseUrl = process.env.baseURL || "http://localhost:3001";

    axios.post(baseUrl + '/api/putData', {
      author: null,
      question: this.state.newQuestion,
      answers: [
        {
          option: this.state.newAnswer1,
          correct: this.state.answer1Correct
        },
        {
          option: this.state.newAnswer2,
          correct: this.state.answer2Correct
        },
        {
          option: this.state.newAnswer3,
          correct: this.state.answer3Correct
        },
        {
          option: this.state.newAnswer4,
          correct: this.state.answer4Correct
        },
      ]
    })
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error)
    })
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value === 'on' ? true : event.target.value;

    this.setState({
      selectedOption: event.target.name,
      [name]: value
    })
  }

  
  render() {
    return (
      <div>
        <br/>
        <h2>Add a question...</h2>
        <br/>

        <Form onSubmit={this.handleSubmit}>

          {/* question */}
          <Form.Group as={Row} id="formQuestion">
            <Form.Label column sm="2">Question</Form.Label>
            <Col sm="8">
              <Form.Control
                name="newQuestion"
                type="input"
                placeholder="How far is the earth from the sun?"
                onChange={this.handleInputChange}
              />
            </Col>
          </Form.Group>
          <br/>

          {/* answer 1 */}
          <Form.Group as={Row} id="formOption1">
            <Form.Label column sm="2">Option 1</Form.Label>
            <Col sm="6">
              <Form.Control 
                name="newAnswer1"
                type="input"
                placeholder="answer 1"
                onChange={this.handleInputChange}
              />
            </Col>
            <Col sm='2'>
              <Form.Check
                name="answer1Correct"
                type="radio"
                label="Correct"
                checked={this.state.selectedOption === 'answer1Correct'}
                onChange={this.handleInputChange}
              />
            </Col>
          </Form.Group>
          <br/>

          {/* answer 2 */}
          <Form.Group as={Row} id="formOption2">
            <Form.Label column sm="2">Option 2</Form.Label>
            <Col sm="6">
              <Form.Control 
                name="newAnswer2"
                type="input"
                placeholder="answer 2"
                onChange={this.handleInputChange}
              />
            </Col>
            <Col sm='2'>
              <Form.Check 
                name="answer2Correct"
                type="radio"
                label="Correct"
                checked={this.state.selectedOption === 'answer2Correct'}
                onChange={this.handleInputChange}
              />
            </Col>
          </Form.Group>
          <br/>

          {/* answer 3 */}
          <Form.Group as={Row} id="formOption3">
            <Form.Label column sm="2">Option 3</Form.Label>
            <Col sm="6">
              <Form.Control
                name="newAnswer3" 
                type="input"
                placeholder="answer 3"
                onChange={this.handleInputChange}
              />
            </Col>
            <Col sm='2'>
              <Form.Check 
                name="answer3Correct"
                type="radio"
                label="Correct"
                checked={this.state.selectedOption === 'answer3Correct'}
                onChange={this.handleInputChange}
              />
            </Col>
          </Form.Group>
          <br/>

          {/* answer 4 */}
          <Form.Group as={Row} id="formOption4">
            <Form.Label column sm="2">Option 4</Form.Label>
            <Col sm="6">
              <Form.Control
                name="newAnswer4"
                type="input"
                placeholder="answer 4"
                onChange={this.handleInputChange}
              />
            </Col>
            <Col sm='2'>
              <Form.Check
                name="answer4Correct"
                type="radio"
                label="Correct"
                checked={this.state.selectedOption === 'answer4Correct'}
                onChange={this.handleInputChange}
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