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
import Reset from './Pages/Reset';
function App() {
  console.log(process.env.REACT_APP_API_URL)
  console.log(process.env.REACT_GOOGLE_CLIENT_ID)
  return (
<BrowserRouter>
    <Routes>
      <Route path="/" element={<h1> Desi Village</h1>}>
    </Route>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/users/activate/:token" element={<Activation/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/users/password/forget" element={<Forgot/>}/>
      <Route path="/users/password/reset/:token" element={<Reset/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
