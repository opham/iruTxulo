/**
 *  Menu Component - Created by Olivier Pham Dang
 */

import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
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
            isActive: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.location !== nextProps.location) {
            setTimeout(() => {
                this.setState({isActive: false});
            }, 500);
        }
    }

    toggleMenu() {
        this.setState({
            isActive: !this.state.isActive
        });
    }

    render() {
        const {location} = this.props;
        const {isActive} = this.state;

        return (
            <div className={`${isActive ? 'menu active' : 'menu'}`}>
                <div className="overlay" onClick={this.toggleMenu} />
                <div className="burger" onClick={this.toggleMenu}>
                    <div className="burger-layers">
                        <div className="burger-layer" />
                        <div className="burger-layer" />
                        <div className="burger-layer" />
                    </div>
                </div>
                <ul className={`${isActive ? 'links active' : 'links'}`}>
                    <li className={`home${location.pathname === '/' ? ' active' : ''}`}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={`about${location.pathname === ROUTES.ABOUT ? ' active' : ''}`}>
                        <Link to="/about">About</Link>
                    </li>
                    <li className={`visit${location.pathname === ROUTES.VISIT ? ' active' : ''}`}>
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

export default withRouter(Menu);
