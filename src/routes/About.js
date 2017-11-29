/** 
 *  About Component - Created by Olivier Pham Dang
 */
 
import React from 'react';
import PropTypes  from 'prop-types';

class About extends React.Component {
    constructor(props) {
        super(props);
        
        // this.state = {
        // };
    }
    
    render() {
        console.info('-->> About renders', this.props);
        return (
            <h1>About</h1>
        );
    }
};

About.defaultProps = {
};

About.propTypes = {
};

export default About;

