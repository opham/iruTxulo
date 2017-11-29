/**
 *  Home Component - Created by Olivier Pham Dang
 */

import React from 'react';
// import PropTypes from 'prop-types';

class Home extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    //     // this.state = {
    //     // };
    // }

    render() {
        console.info('-->> Home renders', this.props);
        return (
            <h1>Home</h1>
        );
    }
}

Home.defaultProps = {
};

Home.propTypes = {
};

export default Home;

