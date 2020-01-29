import React, { Component } from 'react';
import './style.css';
import axios from 'axios';

import Header from './components/Header'
import Quiz from './components/Quiz'
import Result from './components/Result';
import Footer from './components/Footer';


class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      counter: 0,
      questionId: 1,
      questionArray: [],
      question: '',
      guessed: false,
      answerOptions: [],
      answersCount: {},
      result: ''
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  };

  componentDidMount() {
    axios.get('http://localhost:3001/api/getData')
    .then(response => {
      const questionArray = response.data;
      // chooses db entry (question, answers, author, etc.):
      const randomQuestion = response.data[Math.floor(Math.random()*response.data.length)];

      const currentQuestion = randomQuestion.question
      const randomizedAnswerOptions = this.shuffleArray(randomQuestion.answers);


      this.setState({
        questionArray: questionArray,
        question: currentQuestion,
        answerOptions: randomizedAnswerOptions,
        guessed: false
      });
    })
    .catch(function(error) {
      console.log(error);
    })

  };

  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  };

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      // question: quizQuestions[counter].question,
      // answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }


  // setUserAnswer(answer) {
  //   console.log('we made it as far as setUserAnswer')
  //   this.setState((state) => ({
  //     answersCount: {
  //       ...state.answersCount,
  //       [answer]: (state.answersCount[answer] || 0) + 1
  //     },
  //     answer: answer
  //   }));
  // }

  handleAnswerSelected(event) {
    // setTimeout(() => this.renderUnguessedQuiz(), 300);
    this.renderGuessedQuiz();

    if (event.currentTarget.value === "true") {
      console.log('correct!');
    } else {
      console.log('nope, sorry :/');
    }

    // if (this.state.questionId < this.state.questionArray.length) {
    //   setTimeout(() => this.setNextQuestion(), 300);
    // } else {
    //   setTimeout(() => this.setResults(this.getResults()), 300);
    // }
    
    // this.setUserAnswer(event.currentTarget.value);
    
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);
  
    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  setResults (result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }

  renderGuessedQuiz() {
    console.log('rendering GuessedQuiz')
    return (
      <Quiz
        question={this.state.question}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        questionTotal={this.state.questionArray.length}

        guessed={true}
        onAnswerSelected={this.handleAnswerSelected}
      />
    )
  }

  renderUnguessedQuiz() {
    console.log('rendering UnguessedQuiz')
    return (
      <Quiz
        question={this.state.question}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        questionTotal={this.state.questionArray.length}

        guessed={false}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }
  
  renderResult() {
    return (
      <Result quizResult={this.state.result} />
    );
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.renderUnguessedQuiz()}
        {/* {this.state.result ? this.renderResult() : this.renderGuessedQuiz()} */}
        <Footer />
      </div>
    )
  }
}

export default App;
