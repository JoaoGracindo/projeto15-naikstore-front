import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import './shared/reset.css';

import SignIn from './components/singIn/SingIn';
import SignUp from './components/singUp/SingUp';
import { Home } from './components/Home';
import AuthContext from './contexts/AuthContext';
import { LogOut } from './components/logOut';
import Products from './components/Products';
import Checkout from "../src/components/Checkout"



function App() {
  const [token, setToken] = useState('');
  return (
    <AuthContext.Provider value={{token, setToken}}>
      <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/sign-in' element={<SignIn/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/log-out' element={<LogOut/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/produtos/:category' element={<Products/>}/>
          </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
