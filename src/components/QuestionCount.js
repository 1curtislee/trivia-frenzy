import React from 'react';

function QuestionCount(props) {
  return (
    <div className="questionCount">
      <span>{props.counter}</span> / <span>{props.total}</span>
    </div>
  );
}

export default QuestionCount;