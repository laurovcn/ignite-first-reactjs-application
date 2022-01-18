import { GlobalStyle } from "./styles/global";

import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import { Login } from './pages/login';
import Home from './pages/Home';

export const App = () => {

  return (   
    <>
      <BrowserRouter>  
        <Routes>
          <Route path="/" element={<Login/>} /> 
          <Route path="/home" element={<Home/>} /> 
        </Routes>          
      </BrowserRouter>      
      <GlobalStyle />
     </>
  );
}

export default App;
