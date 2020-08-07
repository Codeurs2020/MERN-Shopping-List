import React from 'react';
import { Container } from 'reactstrap';

import AppNavbar from './Components/AppNavbar';
import AddItem from './Components/AddItem';
import ShoppingList from './Components/ShoppingList';

import './App.css';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Container>
        <AddItem />
        <ShoppingList />
      </Container>
    </div>
  );
}

export default App;
