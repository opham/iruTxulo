/** 
 *  About Component - Created by Olivier Pham Dang
 */
 
import React from 'react';
import GoogleMap from 'google-map-react';
import PropTypes from 'prop-types';
import Card from '../../components/Card';

class About extends React.Component {
    render() {
        console.info('-->> About renders', this.props);
        const Marker = () => {
            return (
                <div className="map-marker" />
            );
        };
        return (
            <div className="about route">
                <div className="map-wrapper">
                    <GoogleMap
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                        <Marker lat={59.955413} lng={30.337844} />
                    </GoogleMap>
                </div>
                <main>
                    <Card>
                        <h1>About</h1>
                        <div className="table">
                            <div className="row">
                                <div className="col">
                                    <p>
                                        Bacon ipsum dolor amet venison leberkas sausage prosciutto.
                                        Filet mignon ham hock fatback prosciutto brisket sirloin andouille,
                                        shank short loin ham alcatra. Cow flank filet mignon, chicken biltong kevin shoulder pancetta.
                                        Corned beef venison burgdoggen spare ribs, meatloaf chuck brisket.
                                    </p>
                                    <p>
                                        Bacon ipsum dolor amet venison leberkas sausage prosciutto.
                                        Filet mignon ham hock fatback prosciutto brisket sirloin andouille,
                                        shank short loin ham alcatra. Cow flank filet mignon, chicken biltong kevin shoulder pancetta.
                                        Corned beef venison burgdoggen spare ribs, meatloaf chuck brisket.
                                    </p>
                                </div>
                                <div className="col">
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
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>
                                        Bacon ipsum dolor amet venison leberkas sausage prosciutto.
                                        Filet mignon ham hock fatback prosciutto brisket sirloin andouille,
                                        shank short loin ham alcatra. Cow flank filet mignon, chicken biltong kevin shoulder pancetta.
                                        Corned beef venison burgdoggen spare ribs, meatloaf chuck brisket.
                                    </p>
                                    <p>
                                        Bacon ipsum dolor amet venison leberkas sausage prosciutto.
                                        Filet mignon ham hock fatback prosciutto brisket sirloin andouille,
                                        shank short loin ham alcatra. Cow flank filet mignon, chicken biltong kevin shoulder pancetta.
                                        Corned beef venison burgdoggen spare ribs, meatloaf chuck brisket.
                                    </p>
                                </div>
                                <div className="col">
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
                                </div>
                            </div>
                        </div>
                    </Card>
                </main>
            </div>
        );
    }
}

About.defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
};

About.propTypes = {
    center: PropTypes.objectOf(PropTypes.number),
    zoom: PropTypes.number
};

export default About;

