/* eslint-disable */

import { useState } from "react";
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from "react-bootstrap";
import "./App.css";
import shoesData from "./data";
import Detail from "./Detail";

import { Link, Route, Switch } from "react-router-dom";

function App() {
  let [shoes, shoesUpdate] = useState(shoesData);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/detail">
              Detail
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <MainPage shoes={shoes}></MainPage>
        </Route>

        <Route path="/detail/:id">
          <Detail shoes={shoes} />
        </Route>

        <Route path="/:id">그 외</Route>
      </Switch>
    </div>
  );
}

function MainPage(props) {
  return (
    <div>
      <Jumbotron className="background">
        <h1>20% Season Off</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
      <div className="container">
        <div className="row">
          {props.shoes.map(function (shoes, i) {
            return <ShoesInfo shoes={shoes} i={i} key={i}></ShoesInfo>;
          })}
        </div>
      </div>
    </div>
  );
}

function ShoesInfo(props) {
  let index = props.i + 1;
  return (
    <div className="col-md-4">
      <img
        src={"https://codingapple1.github.io/shop/shoes" + index + ".jpg"}
        width="100%"
      />
      <h4> {props.shoes.title} </h4>
      <p> {props.shoes.content} </p>
      <p> {props.shoes.price.toLocaleString("ko-KR")} 원 </p>
    </div>
  );
}


export default App;
