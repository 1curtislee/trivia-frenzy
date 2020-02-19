import React, { Component } from 'react';
import './style.css';
import axios from 'axios';

import Header from './components/Header';
import Home from './components/Home';
import Add from './components/Add';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      counter: 0,
      collection: '',
      questionId: null,
      questionArray: [],
      questionIndex: 0,
      question: '',
      quizLength: 10,
      guessed: null,
      answerOptions: [],
      answersCount: {},
      result: ''
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  };

  componentDidMount() {
    const baseUrl = process.env.baseURL || "http://localhost:3001"

    axios.get(baseUrl + '/api/getData')
    .then(response => {
      this.setupQuestion(response.data);
    })
    .catch(function(error) {
      console.log(error);
    })
  };

  setupQuestion(data) {
    let questionArray = data;

    let index = Math.floor(Math.random()*data.length)
    let randomQuestion = data[index];
    let currentQuestion = randomQuestion.question
    let randomizedAnswerOptions = this.shuffleArray(randomQuestion.answers);

    let questionId = this.state.questionId + 1;

    this.setState({
      questionArray: questionArray,
      questionIndex: index,
      question: currentQuestion,
      questionId: questionId,
      answerOptions: randomizedAnswerOptions,
      guessed: false
    });
  } 

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

  handleAnswerSelected(event) {
    this.setState({
      guessed: true
    })

    if (event.currentTarget.value === "true") {
      console.log('correct!');
    } else {
      console.log('nope, sorry :/');
    }
    
    setTimeout(() => {
      this.state.questionArray.splice(this.state.questionIndex, 1);
      this.setupQuestion(this.state.questionArray)
    }, 2000);
  };

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
  
  renderResult() {
    return (
      <Result quizResult={this.state.result} />
    );
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Route exact path='/'>
            <Home 
              category={this.state.collection}
            
            />
          </Route>
          <Route exact path='/quiz'>
            <Quiz
              question={this.state.question}
              answerOptions={this.state.answerOptions}
              guessed={this.state.guessed}
              onAnswerSelected={this.handleAnswerSelected}
              questionId={this.state.questionId}
              quizLength={this.state.quizLength}
            />
          </Route>
          <Route exact path='/add'>
            <Add />
          </Route>
          <Footer />
        </Router>
      </div>
    )
  }
}

export default App;
