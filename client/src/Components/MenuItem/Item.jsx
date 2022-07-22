import React from 'react';
import ItemDetail from "./ItemDetail";
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";
import { useParams } from "react-router-dom";
function Item ( props ) {
    const { id } = useParams();
    return (
        <>
            <NavBar />
        <Home/>
        <ItemDetail itemId={id}/>
        </>
    );
}

export default Item;