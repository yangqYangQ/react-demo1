import React, {Component} from 'react';
import './button.css';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            deltaX: 0,
            deltaY: 0
        };
        this.myRef = React.createRef();
    }

    buttonClick = ({clientX, clientY}) => {
        const {x, y} = this.myRef.current.getBoundingClientRect();
        const deltaX = clientX - x - 5;
        const deltaY = clientY - y - 5;
        this.setState({
            show: true,
            deltaX,
            deltaY
        });
    };

    hideRiffle = () => {
        this.setState({show: false});
    };

    render() {
        const {show, deltaX, deltaY} = this.state;
        return (
            <div className='wrapper'>
                <button onClick={this.buttonClick} ref={this.myRef}>Get Started</button>
                {show ? <span style={{left: deltaX, top: deltaY}} onAnimationEnd={this.hideRiffle}></span> : null}
            </div>
        );
    }
}