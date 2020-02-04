import React from 'react';
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link
} from "react-router-dom";
import { Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPlus } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div className="App-header">
      <Row>
        <Col xs={3}>
          <Link to="/">
            <Button
              type="button"
              className="btn homeButton text-center"
              variant="info"
            >
              <FontAwesomeIcon icon={faHome} size="lg" />
            </Button>
          </Link>
        </Col>
        
        <Col 
          xs={{ span:4 }}
          md={{ span:2, offset:2 }}
          className="text-center"
        >
          <h2>Trivia Frenzy</h2>
        </Col>

        <Col
          xs={{ span:4, offset:1 }}
          md={{ span:2, offset:2 }}
        >
          <Link to="/add">
            <Button
              type="button"
              className="btn text-center"
              variant="info"
            >
              <FontAwesomeIcon icon={faPlus} size="lg" /> &nbsp; Add Questions...
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Header;