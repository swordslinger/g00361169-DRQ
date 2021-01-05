import React, { Component } from 'react';
import './App.css';
import { welcome } from './components/welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ReadMenu } from './components/ReadMenu';
import { addToMenu } from './components/addToMenu'
import { upDateMenu } from './components/upDateMenu'

class App extends Component {
render () {
  return (
    <Router>
     <div className="App">

<Navbar bg="primary" variant="dark">
  <Navbar.Brand href="#home">Navbar</Navbar.Brand>
  <Nav className="mr-auto">
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/addToMenu">Add Item too Menu</Nav.Link>
    <Nav.Link href="/ReadMenu">See Menu</Nav.Link>
    <Nav.Link href="/upDateMenu">Update Item On Menu</Nav.Link>
  </Nav>
</Navbar>

<br />
<Switch>
  <Route path='/' component={welcome} exact />
  <Route path='/ReadMenu' component={ReadMenu} exact />
  <Route path='/addToMenu' component={addToMenu} exact />
  <Route path='/upDateMenu' component={upDateMenu} exact />
</Switch>
</div>

    </Router>
  );
}
}
export default App;
