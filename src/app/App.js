import React from "react";
import RouterComponent from "../routes/Routes";
import './App.css';
import '../components/servico/cinema/Cinema.component.css'
import '../nav-bar/nav-bar.css';

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <RouterComponent />
                {this.props.children}
            </div>
        );
    }
}