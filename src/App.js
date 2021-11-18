import React,{Component} from 'react';
import logo from './logo.svg';
import { Navbar , Nav , Container } from 'react-bootstrap';
import './App.css';
import { DISHES } from './shared/Dishes';
import Menu from './components/MenuComponents';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES
    };
  }
  render(){
  return (
    <div className="App">
      
      <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      </Container>
      </Navbar>
      <Menu dishes = {this.state.dishes} />
    </div>
  );
}
}

export default App;
