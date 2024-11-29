import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/global'
import Home from './pages/Home';
import Login from './pages/Login';
import Feed from './pages/Feed';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/feed' element={ <Feed /> } />
        <Route path='/register' element={ <Register /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
