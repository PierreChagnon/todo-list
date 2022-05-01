import React from "react";

import './searchbutton.css';

export default function SearchButton({ handleSearchClick }) {
    return (

        <button onClick={handleSearchClick} className="searchbutton">Rechercher</button>

    )
}