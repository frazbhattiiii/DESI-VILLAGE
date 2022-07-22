import React from 'react';
import NavBar from "../Components/NavBar/NavBar";
import Home from "../Components/Home/Home";
import Menu from "../Components/Menu/Menu";

function Dashboard(props) {
    return (
        <>
        <NavBar />
            <Home/>
            <Menu/>
        </>
    );
}

export default Dashboard;