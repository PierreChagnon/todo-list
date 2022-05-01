import React from "react";
import InputField from "./InputField";
import SearchButton from "./SearchButton";

import './searchbar.css';

export default function Searchbar({ handleSearchInputChange, handleSearchClick }) {
    return (
        <div className="searchbar-container">
            <InputField handleSearchInputChange={handleSearchInputChange} />
            <SearchButton handleSearchClick={handleSearchClick} />
        </div>
    )
}