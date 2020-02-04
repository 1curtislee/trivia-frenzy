import React from 'react';
import { Link } from "react-router-dom";
import { Button, DropdownButton, Dropdown } from 'react-bootstrap';

function Home(props) {
  // need logic to forward a chosen category to the quiz app

  return (
    <div>
      <br/>
      <h2>Welcome to Trivia Frenzy!</h2>

      <DropdownButton id="dropdown-basic-button" title="Choose a category...">
        <Dropdown.Item href="#/action-1">Category1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Category2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Category3</Dropdown.Item>
      </DropdownButton>
      <br />
      <Link to="/quiz">
        <Button
          type="button"
          className="btn homeButton text-center"
          variant="info"
        >GO!
        </Button>
      </Link>
    </div>
  );
}

export default Home;