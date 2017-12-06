import React from "react";
import "./SearchResultsList.css";

export const SearchResultsList = ({ children }) => {
    return (
        <div className = "list-overflow-container">
            <ul className = "list-group">
                {children}
            </ul>
        </div>
    );
};