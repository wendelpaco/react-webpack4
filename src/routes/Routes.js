import React from 'react';
import { Redirect, Route, Switch, HashRouter as Router, Link } from 'react-router-dom';
import HomeComponent from '../components/home/Home.components';
import FilmeCartaz from '../components/servico/cinema/FilmeCartaz';
import Cinema from '../components/servico/cinema/Cinema';
import NavBarComponent from '../nav-bar/Nav-bar';
import Tradutor from '../components/Translate/Tradutor';

const RouterComponent = () => {
    return (
        <Router>
            <div>
                <NavBarComponent />
                <Switch>
                    <Route exact path="/" component={HomeComponent} />
                    <Route path="/cinema/filmes" component={Cinema} />
                    <Route path="/cinema/filme/:id" component={FilmeCartaz} />
                    <Route path="/tradutor" component={Tradutor} />
                    <Route render={() =>
                        <div>
                            {console.log("404 NOT FOUND!")}
                            <Redirect to="/" />
                        </div>
                    } />
                </Switch>
            </div>
        </Router>

    )
}
export default RouterComponent;