import React from 'react';

function AnswerOption(props) {

  return (
    <Button
      className="btn btn-success answerButton"
      value={props.content}
      type="button"
      onClick={props.onAnswerSelected}
    >{props.content} </Button>
  );
  
  
}
export default AnswerOption;