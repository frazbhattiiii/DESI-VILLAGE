import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Signup from './Pages/Signup';
function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route path="/" element={<h1> Desi Village</h1>}>
    </Route>
      <Route path="/signup" element={<Signup />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
