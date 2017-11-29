/**
 *  NoMatch Component - Created by Olivier Pham Dang
 */

import React from 'react';
// import PropTypes from 'prop-types';

class NoMatch extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    //     // this.state = {
    //     // };
    // }

    render() {
        console.info('-->> NoMatch renders', this.props);
        return (
            <h1>
                This page doesnt exist
            </h1>
        );
    }
}

NoMatch.defaultProps = {
};

NoMatch.propTypes = {
};

export default NoMatch;
