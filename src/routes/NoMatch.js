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
            <div className="no-match route">
                <main>
                    <h1>This page doesn`t exist</h1>
                </main>
            </div>
        );
    }
}

NoMatch.defaultProps = {
};

NoMatch.propTypes = {
};

export default NoMatch;
