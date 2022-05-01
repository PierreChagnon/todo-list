import React from "react";
import './inputfield.css';

export default function InputField({handleSearchInputChange}) {
    return (
        <div className="input-container">
            <input onChange={(e) => handleSearchInputChange(e.currentTarget.value)} placeholder="Recherche" type="text" className="input-field" />
        </div>
    )
}