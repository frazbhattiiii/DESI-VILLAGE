import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import Home from "../Components/Home/Home";
import Menu from "../Components/Menu/Menu";
import Footer from "../Components/Footer/Footer";

function Dashboard(props) {
  return (
    <>
      <NavBar />
      <Home />
      <Menu />
      <Footer />
    </>
  );
}

export default Dashboard;
