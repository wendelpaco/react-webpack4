import React from 'react';
import { Redirect, Route, Switch, HashRouter as Router, Link } from 'react-router-dom';
import HomeComponent from '../components/home/Home.components';
import CinemaComponent from '../components/servico/cinema/Cinema.component';

const RouterComponent = () => {
    return (
        <Router>
            <div className="link">
                <Link to="/">Home </Link>
                <Link to="/cinema/filmes">Cinema </Link>
                <Switch>
                    <Route exact path="/" component={HomeComponent} />
                    <Route path="/cinema/filmes" component={CinemaComponent} />
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