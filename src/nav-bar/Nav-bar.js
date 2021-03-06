import React from 'react';
import logo from '../images/react.svg';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import ReactHintFactory from 'react-hint'
import 'react-hint/css/index.css'

const ReactHint = ReactHintFactory(React)
const styles = {
    fontSize: '20px'
};
const NavBarComponent = () => {
    return (
        <div className="reactHint">
            <ReactHint events delay={100} />
            <ul className="nav-bar">
                <div className="logo" >
                    <Link to="/" replace ><img src={logo} alt="Logo" /></Link>
                </div>
                <li><Link to="/" replace ><Icon data-rh="Home" data-rh-at="bottom" type="home" style={styles} /></Link></li>
                <li><Link to="#" replace ><Icon data-rh="Facebook" data-rh-at="bottom" type="facebook" style={styles} /></Link></li>
                <li><Link to="#" replace ><Icon data-rh="Instagram" data-rh-at="bottom" type="instagram" style={styles} /></Link></li>
                <li><Link to="/cinema/filmes" replace ><Icon data-rh="Cinema" data-rh-at="bottom" type="setting" style={styles} /></Link></li>
                <li><Link to="/tradutor" replace >Tradutor<Icon data-rh="Tradutor" data-rh-at="bottom" type="tradutor" style={styles} /></Link></li>
            </ul>
        </div>
    );
}

export default NavBarComponent;