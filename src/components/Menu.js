/**
 *  Menu Component - Created by Olivier Pham Dang
 */

import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isActive: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
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
        return (
            <div className={`${this.state.isActive ? 'menu active' : 'menu'}`}>
                <div className="overlay" />
                <div className="burger" onClick={this.toggleMenu}>
                    <div className="burger-layers">
                        <div className="burger-layer" />
                        <div className="burger-layer" />
                        <div className="burger-layer" />
                    </div>
                </div>
                <ul className={`${this.state.isActive ? 'links active' : 'links'}`}>
                    <li className="home"><Link to="/">Home</Link></li>
                    <li className="contact"><Link to="/about">About</Link></li>
                    <li className="visit"><Link to="/visit">Visit</Link></li>
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
