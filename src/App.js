import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App( ) {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer/>} />
            <Route path='/products/:ProductId' element={<ItemDetailContainer/>} />
            <Route path="/*" element={<h1>Not found</h1>} />
      </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;
App.propTypes = {
  msg: PropTypes.string
}
