/**
 *  Visit Component - Created by Olivier Pham Dang
 */

import React from 'react';
import {connect} from 'react-redux';
import visitRouteActions from './visit.actions';
import FrameMovie from '../../components/FrameMovie';
// import PropTypes from 'prop-types';

function mapStateToProps(state, ownProps) {
    return {
        frames: state.visit.nextFrames
    };
}

class Visit extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    //     // this.state = {
    //     // };
    // }

    componentDidMount() {
        this.props.getNextFrames(0, 312);
    }

    render() {
        console.info('-->> Visit renders', this.props);
        return (
            <div className="visit route">
                <main>
                    <h1>Visit</h1>
                    <FrameMovie frames={this.props.frames} />
                </main>
            </div>
        );
    }
}

Visit.defaultProps = {
};

Visit.propTypes = {
};

export default connect(mapStateToProps, visitRouteActions)(Visit);
