import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import {Provider} from 'react-redux'
import { store } from './Redux/Store';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './Components/Create/Create';
import Read from './Components/Read/Read';

function App() {
  return (
    <Provider store={store}>
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/read' element={<Read/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
    </Provider>
  );
}

export default App;
