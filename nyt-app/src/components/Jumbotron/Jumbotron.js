import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => 
    <div className = "jumbotron">
        <h1 className = "text-center">
            <strong>
                <i className = "fa fa-newspaper-o"></i>
                <u>New York Times Article Scrubber</u>
            </strong>
        </h1>
        <h2 className = "text-center">
            <p>Search for and annotate articles of interest!</p>
        </h2>
    </div>

// const Jumbotron = ({ children }) => 
//     <div className = "jumbotron">
//         {children}
//     </div>







export default Jumbotron;