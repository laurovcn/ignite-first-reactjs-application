import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";

import { Login } from './pages/Login';
import { Home } from './pages/Home';

export const App = () => {

  return ( 

      <BrowserRouter>  
        <Routes>
          <Route path="/" element={<Login/>} /> 
          <Route path="/Dashboard" element={<Home/>} /> 
        </Routes>          
      </BrowserRouter>   
  );
}

export default App;
