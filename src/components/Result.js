import React from 'react';

function Result(props) {
  return (
    <div className="result">
      You prefer <strong>{props.quizResult}</strong>!
    </div>
  );
}

export default Result;