import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './shared/reset.css';

import SignIn from './components/singIn/SingIn';
import SignUp from './components/singUp/SingUp';
import { Home } from './components/Home';
import Product from './components/Product';

function App() {

  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path={"/:produtoID"} element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
