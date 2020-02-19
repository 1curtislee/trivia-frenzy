import React from 'react';
import { Link } from "react-router-dom";
import { Button, DropdownButton, Dropdown } from 'react-bootstrap';

function Home(props) {
  // need logic to forward a chosen category to the quiz app
  
  
  function onClick() {
    console.log('category chosen');

    // let category = props.category;

    /* 
    notes:
      - need an ajax call for db collections
      - 
    */
  }


  return (
    <div>
      <br/>
      <h2>Welcome to Trivia Frenzy!</h2>

      <DropdownButton id="dropdown-basic-button" title="Choose a collection...">
        <Dropdown.Item href="#/action-1">Coming soon...</Dropdown.Item>
      </DropdownButton>
      <br />
      <Link to="/quiz">
        <Button
          type="button"
          className="btn homeButton text-center"
          variant="info"
          onClick={onClick()}
        >GO!
        </Button>
      </Link>
    </div>
  );
}

export default Home;