import React from 'react';
// const React = import('react')
// const RouterComponent = import('../routes/Routes')
import RouterComponent from "../routes/Routes";
const _ = import('./App.css');
const ___ = import('../components/servico/cinema/Cinema.component.css')
const __ = import('../nav-bar/nav-bar.css');

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