import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import {BrowserRouter ,Routes, Route} from 'react-router-dom'
import Cart from './components/Cart';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;