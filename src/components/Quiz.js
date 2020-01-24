import React from 'react';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';

import Button from 'react-bootstrap/Button';


function Quiz(props) {
  let number = -1;
  
  function renderAnswerOptions(key) {
    // set index for looping through answers
    let answerKey = number += 1;
    let answerOption = props.answerOptions[number].option;

    return (
      <div className="row" key={answerKey}>
        <div className="col">
          <Button
            type="button"
            className="btn answerButton"
            variant="info"
            size="lg"
            block
            
            value={props.content}
            onClick={props.onAnswerSelected}
          >{answerOption}</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <QuestionCount
            counter={props.questionId}
            total={props.questionTotal}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Question content={props.question} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          {props.answerOptions.map(renderAnswerOptions)}
        </div> 
      </div>
    </div>
  );
}

export default Quiz;