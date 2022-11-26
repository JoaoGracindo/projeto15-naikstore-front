import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './shared/reset.css';

import SignIn from './components/singIn/SingIn';
import SignUp from './components/singUp/SingUp';
import { Home } from './components/Home';


function App() {

  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
