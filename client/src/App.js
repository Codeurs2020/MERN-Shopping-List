import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Container } from 'reactstrap';

import AppNavbar from './Components/AppNavbar';
import AddItem from './Components/AddItem';
import ShoppingList from './Components/ShoppingList';

import { loadUser } from './actions/authActions';

import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

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
