import React from "react";
import RouterComponent from "../routes/Routes";
import './App.css';
import { Link } from 'react-router-dom';


const App = () => {
    return (
        <div className="container">
            <RouterComponent />
        </div>
    );
};
export default App;