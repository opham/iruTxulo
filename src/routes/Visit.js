/**
 *  Visit Component - Created by Olivier Pham Dang
 */

import React from 'react';
// import PropTypes from 'prop-types';

class Visit extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    //     // this.state = {
    //     // };
    // }

    render() {
        console.info('-->> Visit renders', this.props);
        return (
            <h1>Visit</h1>
        );
    }
}

Visit.defaultProps = {
};

Visit.propTypes = {
};

export default Visit;

