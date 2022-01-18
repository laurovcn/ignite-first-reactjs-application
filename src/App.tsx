import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";

import { Login } from './pages/Login';
import { GlobalStyle } from './styles/global';
import { Dashboard } from './pages/Dashboard';

export const App = () => {

  return ( 
    <>
      <GlobalStyle />
      <BrowserRouter>  
        <Routes>
          <Route path="/" element={<Login/>} /> 
          <Route path="/Dashboard" element={<Dashboard/>} />          
        </Routes>          
      </BrowserRouter>
    </>   
  );
}

export default App;
