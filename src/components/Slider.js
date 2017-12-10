/**
 *  Slider Component - Created by Olivier Pham Dang
 */

import React from 'react';
import PropTypes from 'prop-types';

class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0,
            timeOut: 3000
        };
    }

    componentDidMount() {
        this.setCRON();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.slides.length !== nextProps.slides.length) {
            clearInterval(this.CRON);
            this.setState({
                activeIndex: 0,
            }, this.setCRON);
        }
    }

    componentWillUnmount() {
        clearInterval(this.CRON);
    }

    setCRON() {
        const {timeOut} = this.state;
        this.CRON = setInterval(() => {
            const maxIndex = this.props.slides.length - 1;
            let {activeIndex} = this.state;
            activeIndex = activeIndex < maxIndex ? activeIndex + 1 : 0;
            this.setState({activeIndex});
        }, timeOut);
    }

    renderSlides() {
        const {activeIndex, lastActive} = this.state;
        const {slides} = this.props;
        return (
            <ul className="slides">
                {slides.map((slide, index) => {
                    const style = {
                        backgroundImage: `url(${slide.image})`
                    };
                    const slideClass = `slide${activeIndex === index ? ' active' : ''}`;

                    return (
                        <li key={`slide-${slide.id}`} className={slideClass} style={style} />
                    );
                })}
            </ul>
        );
    }

    renderPagination() {
        const {activeIndex} = this.state;
        const {slides} = this.props;
        return (
            <ul className="pagination">
                {slides.map((slide, index) => {
                    const paginationItemClass = `pagination-item${activeIndex === index ? ' active' : ''}`;
                    return (
                        <li key={`pagination-item-${slide.id}`} className={paginationItemClass} />
                    );
                })}
            </ul>
        );
    }

    render() {
        console.info('-->> Slider renders', this.props);
        console.info('     Slider state', this.state.activeIndex);
        console.info(this.props.slides);
        const {
            withPagination
        } = this.props;
        return (
            <div className="slider">
                {this.renderSlides()}
                {withPagination ? this.renderPagination() : null}
            </div>
        );
    }
}

Slider.defaultProps = {
    slides: []
};

Slider.propTypes = {
    slides: PropTypes.arrayOf(Object)
};

export default Slider;

