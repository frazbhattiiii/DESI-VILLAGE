import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Activation from './Pages/Activation';
import Forgot from './Pages/Forgot';
import {useEffect} from "react";
import {isAuth} from "./utils/auth";
import Reset from './Pages/Reset';
import Dashboard from "./Pages/Dashboard";
import NoPage from "./Pages/NoPage";
function App() {
  useEffect(() => {

    
  }, []);

  return (
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />}>
    </Route>
      <Route path="/signup" element={isAuth()?<Dashboard />:<Signup />}/>
      <Route path="*" element={<NoPage/>}/>
      <Route path="/users/activate/:token" element={isAuth()?<Dashboard/>:<Activation/>}/>
      <Route path="/login"  element={isAuth()?<Dashboard />:<Login/>}/>
      <Route path="/users/password/forget" element={isAuth()?<Dashboard />:<Forgot/>}/>
      <Route path="/users/password/reset/:token" element={<Reset/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
