/**
 *  FrameMovie Component - Created by Olivier Pham Dang
 */

import React from 'react';
// import PropTypes from 'prop-types';
import Frame from './Frame';

class FrameMovie extends React.Component {
    constructor(props) {
        super(props);

        this.isLocked = false;

        this.state = {
            activeIndex: 0,
            frames: this.props.frames || [],
            loadedFrames: [],
            // activeFrameRange: 1,
            loadedFramesLength: 30
            // frameActiveRange: 0,
        };

        this.calcVerticalSpeedAndDirection = this.calcVerticalSpeedAndDirection.bind(this);
        this.calcLoadedFramesAndActiveIndex = this.calcLoadedFramesAndActiveIndex.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        this.movie.addEventListener('wheel', this.handleScroll, false);
    }

    componentWillReceiveProps(nextProps) {
        const {frames = []} = this.props;
        const {frames: nextFrames = []} = nextProps;

        if (frames.length !== nextFrames.length) {
            this.setState({
                frames: nextFrames
            });
        }
    }

    componentWillUnmount() {
        this.movie.removeEventListener('wheel', this.handleScroll, false);
    }

    handleScroll(e) {
        if (!this.isLocked) {
            window.requestAnimationFrame(() => {
                e.preventDefault();
                console.log(e);
                const {speed, direction} = this.calcVerticalSpeedAndDirection(e.deltaY);
                const {newLoadedFrames, newActiveIndex} = this.calcLoadedFramesAndActiveIndex(speed, direction);
                console.log('>> requestAnimationFrame', speed, direction, newLoadedFrames, newActiveIndex);
                this.setState({activeIndex: newActiveIndex, loadedFrames: newLoadedFrames}, () => {
                    this.isLocked = false;
                });
            });
            this.isLocked = true;
        }
        return false;
    }

    calcVerticalSpeedAndDirection(deltaY) {
        const direction = deltaY < 0 ? 'up' : 'down';
        let speed = 'slow';
        speed = deltaY < 100 ? 'slow' : 'medium';
        speed = deltaY > 300 ? 'fast' : speed;
        console.log('future speed', speed);

        return {
            speed: 'slow',
            direction
        };
    }

    /* calculate slices 'up' and 'down' with the active frame in the middle */
    calcSlices(newActiveIndex) {
        const {frames} = this.state;
        const {rangeUp, rangeDown} = this.calcRangeUpAndDown(newActiveIndex);
        const up = frames.slice(newActiveIndex - rangeUp, newActiveIndex);
        const down = frames.slice(newActiveIndex, newActiveIndex + rangeDown);
        return {up, down};
    }

    calcRangeUpAndDown(newActiveIndex) {
        const {loadedFramesLength, frames} = this.state;
        const range = Math.ceil(loadedFramesLength / 2);
        const framesLength = frames.length;

        let rangeUp = range;
        let rangeDown = range;

        let restUp = 0;
        let restDown = 0;

        if (newActiveIndex - range < 0) {
            rangeUp = range - newActiveIndex;
            restDown = range - rangeUp;
        }

        if (newActiveIndex + range > framesLength) {
            rangeDown = range - newActiveIndex;
            restUp = range - rangeUp;
        }

        return {
            rangeUp: rangeUp + restUp,
            rangeDown: rangeDown + restDown
        };
    }

    calcLoadedFramesAndActiveIndex(speed, direction) {
        const {frames, activeIndex} = this.state;
        let newActiveIndex = activeIndex;
        const framesLength = frames.length;

        if (direction === 'up') {
            switch (speed) { // calculate new index based on speed
            case 'slow':
                newActiveIndex = newActiveIndex - 1 < 0 ? 0 : newActiveIndex - 1;
                break;
            case 'medium':
                newActiveIndex = newActiveIndex - 5 < 0 ? 0 : newActiveIndex - 5;
                break;
            case 'high':
                newActiveIndex = newActiveIndex - 10 < 0 ? 0 : newActiveIndex - 10;
                break;
            default:
                break;
            }
        } else { // direction: 'down'
            switch (speed) {
            case 'slow':
                newActiveIndex = newActiveIndex + 1 < framesLength ? newActiveIndex + 1 : framesLength;
                break;
            case 'medium':
                newActiveIndex = newActiveIndex + 5 < framesLength ? newActiveIndex + 5 : framesLength;
                break;
            case 'high':
                newActiveIndex = newActiveIndex + 10 < framesLength ? newActiveIndex + 10 : framesLength;
                break;
            default:
                break;
            }
        }
        const slices = this.calcSlices(newActiveIndex);

        return {
            newLoadedFrames: [
                ...slices.up,
                ...slices.down
            ],
            newActiveIndex
        };
    }

    render() {
        console.info('-->> FrameMovie renders', this.props);
        const {loadedFrames, activeIndex, frames} = this.state;
        const activeId = frames[activeIndex] ? frames[activeIndex].uid : '';

        return (
            <div className="frame-movie" ref={(movie) => { this.movie = movie; }}>
                {loadedFrames.map((frame) => {
                    return (
                        <Frame
                            key={frame.uid}
                            id={frame.uid}
                            src={frame.src}
                            className={activeId === frame.uid ? 'active' : ''}
                        >
                            {frame.children}
                        </Frame>
                    );
                })}
            </div>
        );
    }
}

FrameMovie.defaultProps = {
};

FrameMovie.propTypes = {
};

export default FrameMovie;

