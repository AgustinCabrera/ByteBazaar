import './App.css';
import NavBar from './components/NavBar';
import { useState } from 'react';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
    <NavBar />
    <ItemListContainer greeting={"Welcome"} />
    </div>
  );
}



export default App;
