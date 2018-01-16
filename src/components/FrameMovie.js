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
        this.playMovieCRON = null;
        this.direction = null;
        this.speed = null;
        this.state = {
            activeIndex: 0,
            frames: this.props.frames || [],
            loadedFrames: [],
            // activeFrameRange: 1,
            loadedFramesLength: 30
            // frameActiveRange: 0,
        };

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
        clearInterval(this.playMovieCRON);
        this.movie.removeEventListener('wheel', this.handleScroll, false);
    }

    handleScroll(e) {
        window.requestAnimationFrame(() => {
            console.log(e);
            const direction = e.deltaY < 0 ? 'up' : 'down';
            const hasChangedDirection = this.direction === direction;
            this.direction = direction;
            this.locked = !hasChangedDirection;
            if (!this.isLocked) { // means also that scroll has changed direction
                clearInterval(this.playMovieCRON);
                this.playMovieCRON = setInterval(() => {
                    const {newLoadedFrames, newActiveIndex} = this.calcLoadedFramesAndActiveIndex(direction);
                    // check if we need to clear Interval
                    this.setState({activeIndex: newActiveIndex, loadedFrames: newLoadedFrames}, () => {
                        if (this.state.activeIndex >= this.state.frames.length || this.state.activeIndex <= 0) {
                            clearInterval(this.playMovieCRON);
                        }
                    });
                }, 41); // 1000ms/24 = approx 41ms; for 24fps
            }
        });
        return false;
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
            rangeUp = newActiveIndex;
            restDown = range - rangeUp;
        }

        if (newActiveIndex + range > framesLength) {
            rangeDown = framesLength - newActiveIndex;
            restUp = range - rangeDown;
        }
        // console.group('>> up data', newActiveIndex);
        // console.log('rangeUp', rangeUp);
        // console.log('restUp', restUp);
        // console.groupEnd();
        // console.group('>> down data', newActiveIndex);
        // console.log('rangeDown', rangeDown);
        // console.log('restDown', restDown);
        // console.groupEnd();

        return {
            rangeUp: rangeUp + restUp,
            rangeDown: rangeDown + restDown
        };
    }

    calcLoadedFramesAndActiveIndex(direction) {
        const {frames, activeIndex} = this.state;
        let newActiveIndex = activeIndex;
        const framesLength = frames.length;

        if (direction === 'up') {
            newActiveIndex = newActiveIndex - 1 < 0 ? 0 : newActiveIndex - 1;
        } else { // direction: 'down'
            newActiveIndex = newActiveIndex + 1 < framesLength ? newActiveIndex + 1 : framesLength;
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
        const {loadedFrames, activeIndex, frames} = this.state;
        const {
            info = {
                scrollUp: ([<span key="scroll-up" className="icon">scroll up</span>, <span key="scroll-up-text" className="text">rewind Movie</span>]),
                scrollDown: ([<span key="scroll-down-text" className="text">play Movie</span>, <span key="scroll-down" className="icon">scroll down</span>]),
                pause: (<span>pause</span>)
            }
        } = this.props;
        const displayInfo = {
            scrollUp: activeIndex > 0,
            scrollDown: activeIndex < frames.length,
        };
        const activeId = frames[activeIndex] ? frames[activeIndex].uid : '';
        console.info('-->> FrameMovie renders activeId', activeId);

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
                <div className="info">
                    {displayInfo.scrollUp ? <div className="scroll-up">{info.scrollUp}</div> : null}
                    {displayInfo.scrollDown ? <div className="scroll-down">{info.scrollDown}</div> : null}
                    {displayInfo.pause ?
                        <button
                            type="button"
                            className="btn btn-pause"
                            onClick={() => { clearInterval(this.playMovieCRON); }}
                        >
                            {info.pause}
                        </button>
                        :
                        null
                    }
                </div>
            </div>
        );
    }
}

FrameMovie.defaultProps = {
};

FrameMovie.propTypes = {
};

export default FrameMovie;

