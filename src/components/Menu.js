/**
 *  Menu Component - Created by Olivier Pham Dang
 */

import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const ROUTES = {
    HOME: '/',
    ABOUT: '/about',
    VISIT: '/visit',
};

class Menu extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isActive: false,
            activeRoute: '', // init at home path
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    componentWillMount() {
        const routeKeys = Object.keys(ROUTES);
        const pathName = window.location.pathname;
        if (this.state.activeRoute !== pathName) {
            for (let i = 0; i < routeKeys.length; i += 1) {
                if (pathName === ROUTES[routeKeys[i]]) {
                    this.setState(
                        {activeRoute: ROUTES[routeKeys[i]]},
                        () => { console.info('> active route', this.state.activeRoute); }
                    );
                }
            }
        }
    }

    toggleMenu() {
        this.setState({
            isActive: !this.state.isActive
        }, () => {
            console.log(this.state.isActive);
        });
    }

    render() {
        console.info('-->> Menu renders', this.props);
        const {isActive, activeRoute} = this.state;
        return (
            <div className={`${isActive ? 'menu active' : 'menu'}`}>
                <div className="overlay" />
                <div className="burger" onClick={this.toggleMenu}>
                    <div className="burger-layers">
                        <div className="burger-layer" />
                        <div className="burger-layer" />
                        <div className="burger-layer" />
                    </div>
                </div>
                <ul className={`${isActive ? 'links active' : 'links'}`}>
                    <li className={`home${activeRoute === '/' ? ' active' : ''}`}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={`about${activeRoute === ROUTES.ABOUT ? ' active' : ''}`}>
                        <Link to="/about">About</Link>
                    </li>
                    <li className={`visit${activeRoute === ROUTES.VISIT ? ' active' : ''}`}>
                        <Link to="/visit">Visit</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

Menu.defaultProps = {
};

Menu.propTypes = {
};

export default Menu;
