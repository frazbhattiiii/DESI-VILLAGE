import './App.css';
import {
    BrowserRouter ,
    Routes ,
    Route ,
} from "react-router-dom";
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Activation from './Pages/Activation';
import Forgot from './Pages/Forgot';
import { useEffect } from "react";
import { isAuth } from "./utils/auth";
import Reset from './Pages/Reset';
import Dashboard from "./Pages/Dashboard";
import Logout from "./Pages/Logout";
import NoPage from "./Pages/NoPage";
import CartPage from "./Pages/CartPage";
import SideBar from "./Components/SideBar/SideBar";

function App () {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Dashboard/> }>

                </Route>
                <Route path="/home" element={ <Dashboard/> }/>
                <Route path="/signup" element={ <Signup/> }/>
                <Route path="/users/activate/:token" element={ <Activation/> }/>
                <Route path="/login" element={ <Login/> }/>
                <Route path="/users/password/forget" element={ <Forgot/> }/>
                <Route path="/users/password/reset/:token" element={ <Reset/> }/>
                <Route path='/logout' element={ <Logout/> }/>
                <Route path='/cart' element={ <CartPage/> }/>
                <Route path='/sidebar' element={ <SideBar open = {true}/> }/>
                <Route path="*" element={ <NoPage/> }/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
