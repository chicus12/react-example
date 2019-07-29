import React from 'react'
import { Link } from 'react-router-dom'
import {Nav} from 'react-bootstrap'

function Navigation(props) {
  return (
    <>
      <Nav>
        <Nav.Item>
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/actors">Actores</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link style={{ backgroundColor: "red" }}  to="/shows">
              Series
            </Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div>{props.children}</div>
    </>
  );
}

export default Navigation