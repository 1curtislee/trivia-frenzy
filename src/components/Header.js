import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div className="App-header">
      <Row>
        <Col xs={3}>
          <a href="/">
            <Button
              type="button"
              className="btn homeButton text-center"
              variant="info"
            >
              <FontAwesomeIcon icon={faHome} size="lg" />
            </Button>
          </a>
        </Col>
        
        <Col 
          xs={{ span:4, offset:1 }}
          md={{ span:2, offset:2 }}
          className="text-center"
        >
          <h2>Trivia Frenzy</h2>
        </Col>
      </Row>
    </div>
  );
}

export default Header;