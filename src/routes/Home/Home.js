/**
 *  Home Component - Created by Olivier Pham Dang
 */

import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../../components/Card';
import Slider from '../../components/Slider';
import homeRouteActions from './home.actions';

function mapStateToProps(state, ownProps) {
    return {
        homeSlides: state.home.homeSlides
    };
}

class Home extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    //     // this.state = {
    //     // };
    // }

    componentDidMount() {
        this.props.initData();
    }

    render() {
        console.info('-->> Home renders', this.props);
        const {homeSlides} = this.props;
        return (
            <div className="home route">
                <Slider slides={homeSlides} />
                <main>
                    <Card>
                        <h1>Home</h1>
                        <p>
                            Bacon ipsum dolor amet venison leberkas sausage prosciutto.
                            Filet mignon ham hock fatback prosciutto brisket sirloin andouille,
                            shank short loin ham alcatra. Cow flank filet mignon, chicken biltong kevin shoulder pancetta.
                            Corned beef venison burgdoggen spare ribs, meatloaf chuck brisket.
                        </p>
                        <p>
                            Meatball jerky sausage pastrami pig venison.
                            T-bone picanha short loin tenderloin alcatra.
                            T-bone tri-tip tail, shank turducken biltong beef ribs drumstick andouille tongue.
                            Swine pork loin doner, cow rump drumstick tenderloin chuck.
                        </p>
                        <p>
                            Meatball jerky sausage pastrami pig venison.
                            T-bone picanha short loin tenderloin alcatra.
                            T-bone tri-tip tail, shank turducken biltong beef ribs drumstick andouille tongue.
                            Swine pork loin doner, cow rump drumstick tenderloin chuck.
                        </p>
                        <p>
                            Meatball jerky sausage pastrami pig venison.
                            T-bone picanha short loin tenderloin alcatra.
                            T-bone tri-tip tail, shank turducken biltong beef ribs drumstick andouille tongue.
                            Swine pork loin doner, cow rump drumstick tenderloin chuck.
                        </p>
                        <p>
                            Meatball jerky sausage pastrami pig venison.
                            T-bone picanha short loin tenderloin alcatra.
                            T-bone tri-tip tail, shank turducken biltong beef ribs drumstick andouille tongue.
                            Swine pork loin doner, cow rump drumstick tenderloin chuck.
                        </p>
                        <p>
                            Meatball jerky sausage pastrami pig venison.
                            T-bone picanha short loin tenderloin alcatra.
                            T-bone tri-tip tail, shank turducken biltong beef ribs drumstick andouille tongue.
                            Swine pork loin doner, cow rump drumstick tenderloin chuck.
                        </p>
                        <p>
                            Meatball jerky sausage pastrami pig venison.
                            T-bone picanha short loin tenderloin alcatra.
                            T-bone tri-tip tail, shank turducken biltong beef ribs drumstick andouille tongue.
                            Swine pork loin doner, cow rump drumstick tenderloin chuck.
                        </p>
                    </Card>
                </main>
            </div>
        );
    }
}

Home.defaultProps = {
    homeSlides: []
};

Home.propTypes = {
    homeSlides: PropTypes.arrayOf(Object)
};

export default connect(mapStateToProps, homeRouteActions)(Home);

