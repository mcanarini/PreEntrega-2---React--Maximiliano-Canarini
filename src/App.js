import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/navBar';
import ItemListConteiner from './components/ItemDetailConteiner/ItemDetailContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListConteiner />} />
          <Route path='/category/:categoryId' element={<ItemListConteiner />} />
          <Route path='/Item/:ItemId' element={<ItemDetailConteiner />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;
