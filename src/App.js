import { BrowserRouter, Route, Routes} from 'react-router-dom';
import React, { useState } from 'react';
import './shared/reset.css';

import Navbar from './components/navbar/Navbar';
import SignIn from './components/singIn/SingIn';


function App() {
  const [online, setOnline] = useState(false);

  return (
    <BrowserRouter>
        <Navbar online={online} setOnline={setOnline} />
        <Routes>
        <Route path='/sign-in' element={<SignIn/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
