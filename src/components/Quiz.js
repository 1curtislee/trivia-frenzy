import React from 'react';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';

import { Container, Row, Col, Button } from 'react-bootstrap';


function Quiz(props) {
  let number = -1;
  
  function renderAnswerOptions(key) {
    // set index for looping through answers
    let answerKey = number += 1;
    let answerOption = props.answerOptions[number].option;
    let answerCorrectStatus = props.answerOptions[number].correct;

    return (
      <Row key={answerKey}>
        <Col>
          <Button
            type="button"
            className="btn answerButton"
            variant="info"
            size="lg"
            block

            value={answerCorrectStatus}
            onClick={props.onAnswerSelected}
          >{answerOption}</Button>
        </Col>
      </Row>
    );
  }

  return (
    <Container>
      <Row>
        <Col>
          <QuestionCount
            counter={props.questionId}
            total={props.questionTotal}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Question content={props.question} />
        </Col>
      </Row>
      <Row>
        <Col>
          {props.answerOptions.map(renderAnswerOptions)}
        </Col> 
      </Row>
    </Container>
  );
}

export default Quiz;